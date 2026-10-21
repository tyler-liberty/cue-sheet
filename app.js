const REGIONS = ["All", "Back", "Core", "Hip", "Knee", "Shoulder", "Neck", "Ankle", "Balance"];
const PROGRAM_ID = "knee-oct-21c";
const PROGRAM = [
  "elevated-glute-bridge",
  "terminal-knee-extension",
  "hamstring-lean"
];
const DROPPED = [
  "ankle-pumps",
  "calf-stretch",
  "heel-prop",
  "quad-set",
  "leg-on-wall",
  "bag-with-weight"
];
const POPULAR = ["clamshell", "glute-bridge", "bird-dog", "chin-tuck", "dead-bug", "sit-to-stand", "calf-raise", "cat-camel"];
const KEY = "cuesheet.v1";

const state = {
  view: "home",
  query: "",
  region: "All",
  detailId: null,
  draftDose: null,
  sessionIndex: 0,
  customName: "",
  customVideo: "",
  customSteps: "",
  editingCustom: false
};

let store = loadStore();

function loadStore() {
  let store;
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "");
    if (parsed && Array.isArray(parsed.plan)) store = parsed;
  } catch (err) { /* fresh sheet */ }
  if (!store) store = { plan: [], custom: [], log: {}, installDismissed: false };
  if (store.programId !== PROGRAM_ID) {
    const kept = new Map(store.plan.filter((item) => !DROPPED.includes(item.id)).map((item) => [item.id, item]));
    const program = PROGRAM.map((id) => kept.get(id) || { id, dose: sheetDose(id) });
    const extras = store.plan.filter((item) => !PROGRAM.includes(item.id) && !DROPPED.includes(item.id));
    store.plan = program.concat(extras);
    store.programId = PROGRAM_ID;
    localStorage.setItem(KEY, JSON.stringify(store));
  }
  return store;
}

function sheetDose(id) {
  const exercise = window.EXERCISES.find((item) => item.id === id);
  const base = exercise?.defaultDose || { sets: 0, reps: 0, hold: 0, side: "both" };
  const dose = {
    sets: base.sets,
    reps: base.reps,
    hold: base.hold,
    side: exercise?.sided ? (base.side || "each") : (base.side || "both"),
    notes: base.notes || "",
    label: base.label || ""
  };
  if (id === "ankle-pumps" || id === "calf-stretch") {
    dose.sets = 0;
    dose.reps = 0;
    dose.hold = 0;
    dose.label = "Dose not written down";
    dose.notes = "On the list. No number was written down.";
  }
  return dose;
}

function persist() {
  localStorage.setItem(KEY, JSON.stringify(store));
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function norm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function todayKey() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function todayLabel() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function allExercises() {
  return window.EXERCISES.concat(store.custom || []);
}

function findExercise(id) {
  return allExercises().find((exercise) => exercise.id === id) || null;
}

function planItem(id) {
  return store.plan.find((item) => item.id === id) || null;
}

function doneToday(id) {
  return (store.log[todayKey()] || []).includes(id);
}

function youtubeId(value) {
  const match = String(value || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/);
  if (match) return match[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(value || "")) return value;
  return null;
}

function parseQuery(raw) {
  let text = String(raw || "").trim();
  const dose = { sets: null, reps: null, hold: null, side: null };
  const take = (pattern, apply) => {
    const match = text.match(pattern);
    if (!match) return;
    apply(match);
    text = text.replace(match[0], " ").replace(/\s+/g, " ").trim();
  };
  take(/(\d+)\s*[x×]\s*(\d+)/i, (match) => {
    dose.sets = Number(match[1]);
    dose.reps = Number(match[2]);
  });
  take(/(\d+)\s*sets?\s*(?:of\s*)?(\d+)/i, (match) => {
    dose.sets = Number(match[1]);
    dose.reps = Number(match[2]);
  });
  take(/hold\s*(?:for\s*)?(\d+)\s*(?:s|sec|secs|seconds)?/i, (match) => {
    dose.hold = Number(match[1]);
  });
  take(/(\d+)\s*(?:second|seconds|sec|secs)\b/i, (match) => {
    dose.hold = Number(match[1]);
  });
  take(/(\d+)\s*sets?\b/i, (match) => { dose.sets = Number(match[1]); });
  take(/(\d+)\s*reps?\b/i, (match) => { dose.reps = Number(match[1]); });
  take(/\b(each side|both sides|per side)\b/i, () => { dose.side = "each"; });
  take(/\b(left|right)\b/i, (match) => { dose.side = match[1].toLowerCase(); });
  return { text, dose, videoId: youtubeId(raw) };
}

function stemsOf(text) {
  const base = norm(text);
  const stems = new Set([base]);
  if (base.endsWith("s")) stems.add(base.slice(0, -1));
  return [...stems].filter(Boolean);
}

function scoreExercise(exercise, stems) {
  const name = norm(exercise.name);
  const aliases = (exercise.aliases || []).map(norm);
  let best = 0;
  stems.forEach((stem) => {
    if (name === stem) best = Math.max(best, 100);
    if (aliases.includes(stem)) best = Math.max(best, 96);
    if (stem.length < 3) return;
    if (name.startsWith(stem)) best = Math.max(best, 84);
    if (aliases.some((alias) => alias.startsWith(stem))) best = Math.max(best, 80);
    const words = stem.split(" ").filter(Boolean);
    if (words.length > 1 && words.every((word) => name.includes(word))) best = Math.max(best, 76);
    if (name.includes(stem)) best = Math.max(best, 72);
    if (aliases.some((alias) => alias.includes(stem))) best = Math.max(best, 64);
  });
  return best;
}

function searchExercises(text) {
  const stems = stemsOf(text);
  return allExercises()
    .map((exercise) => ({ exercise, score: scoreExercise(exercise, stems) }))
    .filter((hit) => hit.score >= 64)
    .sort((a, b) => b.score - a.score || a.exercise.name.localeCompare(b.exercise.name));
}

function clamp(value, min, max) {
  const number = Math.round(Number(value) || 0);
  return Math.max(min, Math.min(max, number));
}

function blankDose(exercise) {
  const base = exercise?.defaultDose || { sets: 2, reps: 10, hold: 0, side: "both" };
  return {
    sets: base.sets,
    reps: base.reps,
    hold: base.hold,
    side: exercise?.sided ? (base.side || "each") : (base.side || "both"),
    notes: base.notes || "",
    label: base.label || ""
  };
}

function applyParsed(dose, parsed) {
  const next = { ...dose };
  ["sets", "reps", "hold", "side"].forEach((key) => {
    if (parsed && parsed[key] != null && parsed[key] !== "") next[key] = parsed[key];
  });
  return next;
}

function doseSummary(dose, sided) {
  if (!dose) return "Dose not set";
  if (dose.label) return dose.label;
  const sets = Number(dose.sets) || 0;
  const reps = Number(dose.reps) || 0;
  const hold = Number(dose.hold) || 0;
  let body = "";
  if (sets && reps && hold) body = `${sets} × ${reps}, hold ${hold}s`;
  else if (sets && hold && reps <= 1) body = `${sets} × ${hold}s hold`;
  else if (sets && reps) body = `${sets} × ${reps}`;
  else if (reps) body = `${reps} reps`;
  else if (hold) body = `${hold}s hold`;
  else body = "Dose not set";
  if (sided && dose.side === "each") return `${body} · each side`;
  if (dose.side === "left" || dose.side === "right") return `${body} · ${dose.side} side`;
  return body;
}

function snapshot() {
  return {
    view: state.view,
    query: state.query,
    region: state.region,
    detailId: state.detailId,
    draftDose: state.draftDose ? { ...state.draftDose } : null,
    sessionIndex: state.sessionIndex,
    customName: state.customName,
    customVideo: state.customVideo,
    customSteps: state.customSteps,
    editingCustom: state.editingCustom
  };
}

function go(patch, replace) {
  Object.assign(state, patch);
  const snap = snapshot();
  if (replace) history.replaceState(snap, "");
  else history.pushState(snap, "");
  render();
}

function standalone() {
  return window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
}

function videoUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function searchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function openExercise(id, parsed) {
  const exercise = findExercise(id);
  if (!exercise) return;
  const saved = planItem(id);
  const dose = applyParsed(saved ? { ...saved.dose } : blankDose(exercise), parsed);
  go({ view: "detail", detailId: id, draftDose: dose });
}

function saveDetail() {
  const dose = { ...state.draftDose };
  dose.sets = clamp(dose.sets, 0, 20);
  dose.reps = clamp(dose.reps, 0, 2000);
  dose.hold = clamp(dose.hold, 0, 1800);
  const existing = planItem(state.detailId);
  if (existing) existing.dose = dose;
  else store.plan.push({ id: state.detailId, dose });
  state.draftDose = dose;
  persist();
  render();
}

function removeFromPlan(id) {
  store.plan = store.plan.filter((item) => item.id !== id);
  persist();
}

function markDone(id) {
  const key = todayKey();
  const list = new Set(store.log[key] || []);
  list.add(id);
  store.log[key] = [...list];
  persist();
}

function movePlan(index, direction) {
  const next = index + direction;
  if (next < 0 || next >= store.plan.length) return;
  const copy = store.plan.slice();
  const [item] = copy.splice(index, 1);
  copy.splice(next, 0, item);
  store.plan = copy;
  persist();
  render();
}

function render() {
  const app = document.getElementById("app");
  const focus = document.activeElement;
  const fieldId = focus && ["q", "notes", "custom-name", "custom-video", "custom-steps"].includes(focus.id)
    ? focus.id
    : null;
  const selection = fieldId && focus.selectionStart != null
    ? [focus.selectionStart, focus.selectionEnd]
    : null;
  app.className = state.view === "home" && store.plan.length ? "app has-dock" : "app";
  app.innerHTML = state.view === "detail"
    ? viewDetail()
    : state.view === "session"
      ? viewSession()
      : state.view === "custom"
        ? viewCustom()
        : viewHome();
  bind();
  if (fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.focus();
      if (selection && field.setSelectionRange) field.setSelectionRange(selection[0], selection[1]);
    }
  }
}

function viewHome() {
  const parsed = parseQuery(state.query);
  const hits = state.query.trim() ? searchExercises(parsed.text || state.query) : [];
  const regionHits = hits.filter((hit) => state.region === "All" || hit.exercise.region === state.region);
  const library = allExercises().filter((exercise) => state.region === "All" || exercise.region === state.region);
  const showingSearch = state.query.trim().length > 0;
  const banner = !store.installDismissed && !standalone()
    ? `<div class="banner">On your phone, tap Share, then <strong>Add to Home Screen</strong>. Build the sheet after you open the icon, so the list stays with it.
        <div><button type="button" id="dismiss-install">Got it</button></div></div>`
    : "";
  const plan = store.plan.length
    ? `<div class="pad"><h2>On your sheet</h2><div class="list">${store.plan.map((item, index) => planRow(item, index)).join("")}</div></div>`
    : "";
  let body = "";
  if (showingSearch) {
    body = regionHits.length
      ? `<div class="pad"><h2>Matches</h2>${regionHits.map((hit) => hitRow(hit.exercise)).join("")}</div>`
      : `<div class="pad"><div class="empty"><strong>No saved demo for “${esc(parsed.text || state.query)}”.</strong><p class="quiet">You can still keep it. Paste a video link if your physio sent one, and write their steps in your own words.</p>
          <button class="primary" type="button" id="add-unknown">Add it to my sheet</button>
          <a class="youtube" href="${esc(searchUrl(`${parsed.text || state.query} physical therapy exercise`))}" target="_blank" rel="noopener">Look up demos on YouTube</a></div></div>`;
  } else if (state.region === "All") {
    const popular = POPULAR.map(findExercise).filter(Boolean);
    body = `<div class="pad"><h2>Often on the sheet</h2>${popular.map(hitRow).join("")}
      <button class="linkish" type="button" id="add-blank">Add an exercise that is not listed</button></div>`;
  } else {
    body = `<div class="pad"><h2>${esc(state.region)}</h2>${library.map(hitRow).join("") || `<p class="quiet">Nothing in this area yet.</p>`}</div>`;
  }
  const dock = store.plan.length
    ? `<div class="dock"><button class="primary" type="button" id="start-session">${continueLabel()}</button></div>`
    : "";
  return `${banner}
    <header class="top">
      <p class="brand">Cue Sheet</p>
      <p class="day">${esc(todayLabel())}</p>
      <form class="search" id="search-form">
        <input id="q" name="q" placeholder="Try “clamshell 3×10” or “bird dog”" enterkeyhint="search" autocomplete="off" autocapitalize="off" value="${esc(state.query)}">
        ${state.query ? `<button class="icon-btn" type="button" id="clear-q" aria-label="Clear search">×</button>` : ""}
      </form>
    </header>
    <div class="chips" role="tablist">${REGIONS.map((region) => `<button type="button" class="chip${region === state.region ? " on" : ""}" data-region="${esc(region)}">${esc(region)}</button>`).join("")}</div>
    ${plan}
    ${body}
    <p class="disclaimer">General examples only. Do the version and the dose your physio gave you. Stop if pain is sharp, spreads, or you feel unwell.</p>
    ${dock}`;
}

function continueLabel() {
  const pending = store.plan.some((item) => !doneToday(item.id));
  const started = store.plan.some((item) => doneToday(item.id));
  if (started && pending) return "Continue session";
  if (!pending) return "Review session";
  return "Start session";
}

function planRow(item, index) {
  const exercise = findExercise(item.id);
  if (!exercise) return "";
  const done = doneToday(item.id);
  return `<div class="plan-item${done ? " done" : ""}">
    <button type="button" class="row" data-open="${esc(item.id)}">
      <span class="index">${index + 1}</span>
      <span>
        <span class="name">${esc(exercise.name)}</span>
        <div class="dose">${esc(doseSummary(item.dose, exercise.sided))}</div>
      </span>
      <span class="check" aria-hidden="true"></span>
    </button>
    <span class="movers">
      <button type="button" data-move="${index}" data-dir="-1" aria-label="Move ${esc(exercise.name)} up">↑</button>
      <button type="button" data-move="${index}" data-dir="1" aria-label="Move ${esc(exercise.name)} down">↓</button>
    </span>
  </div>`;
}

function hitRow(exercise) {
  const saved = planItem(exercise.id);
  return `<button type="button" class="hit" data-open="${esc(exercise.id)}">
    <span class="tag">${esc(exercise.region)}${exercise.videoId ? " · demo" : ""}${saved ? " · on your sheet" : ""}</span>
    <div class="name">${esc(exercise.name)}</div>
    <div class="blurb">${esc(exercise.blurb || "")}</div>
  </button>`;
}

function viewDetail() {
  const exercise = findExercise(state.detailId);
  if (!exercise) return `<div class="pad"><button class="back" type="button" data-action="back">Back</button><p>That exercise is no longer on this phone.</p></div>`;
  const dose = state.draftDose || blankDose(exercise);
  const onSheet = Boolean(planItem(exercise.id));
  const video = exercise.videoId
    ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(exercise.videoId)}?rel=0&modestbranding=1&playsinline=1" title="${esc(exercise.name)} demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       <p class="credit">Demo from <a href="${esc(videoUrl(exercise.videoId))}" target="_blank" rel="noopener">${esc(exercise.credit || "YouTube")}</a>. Example form, not your program.</p>`
    : `<a class="youtube" href="${esc(searchUrl(exercise.videoQuery || `${exercise.name} physical therapy`))}" target="_blank" rel="noopener">Watch demos on YouTube</a>
       <p class="credit">No clinic clip is saved for this one. The steps are a general example.</p>`;
  const side = exercise.sided
    ? `<div class="seg" role="group" aria-label="Side">${["each", "left", "right"].map((value) => `<button type="button" data-side="${value}" class="${dose.side === value ? "on" : ""}">${value === "each" ? "Each side" : value[0].toUpperCase() + value.slice(1)}</button>`).join("")}</div>`
    : "";
  return `<header class="top bar">
      <button class="back" type="button" data-action="back">Sheet</button>
      <span class="tag">${esc(exercise.region)}</span>
    </header>
    <div class="pad">
      <h1>${esc(exercise.name)}</h1>
      <p class="meta">${esc(exercise.equipment || "")}</p>
      ${exercise.caution ? `<div class="caution">${esc(exercise.caution)}</div>` : ""}
      ${video}
      ${exercise.videoNote ? `<p class="video-note">${esc(exercise.videoNote)}</p>` : ""}
      <h2>Your dose</h2>
      ${dose.label ? `<p class="dose">${esc(dose.label)}</p>` : `<p class="quiet">Match the numbers on your sheet.</p>`}
      ${stepper("sets", "Sets", dose.sets, 0, 20)}
      ${stepper("reps", "Reps", dose.reps, 0, 2000)}
      ${stepper("hold", "Hold, seconds", dose.hold, 0, 1800)}
      ${side}
      <label class="field">Notes from physio
        <textarea id="notes" placeholder="Modifications, tempo, what to skip">${esc(dose.notes || "")}</textarea>
      </label>
      <p class="section-label">How to do the example</p>
      <ol class="steps">${(exercise.steps || []).map((step) => `<li><span>${esc(step)}</span></li>`).join("")}</ol>
      <div class="pair">
        <div><strong>You should feel</strong>${esc(exercise.feel || "")}</div>
        <div><strong>Skip or ease off if</strong>${esc(exercise.avoid || "")}</div>
      </div>
      <button class="primary" type="button" id="save">${onSheet ? "Update my sheet" : "Add to my sheet"}</button>
      ${onSheet ? `<button class="secondary" type="button" id="remove">Remove from my sheet</button>` : ""}
      ${exercise.custom ? `<button class="secondary" type="button" id="edit-custom">Edit steps or video</button>` : ""}
      ${exercise.custom ? `<button class="danger" type="button" id="delete-custom">Delete this exercise</button>` : ""}
      <p class="disclaimer">General example. Your physio’s version and dose win. Stop if pain is sharp, spreads, or you feel unwell.</p>
    </div>`;
}

function stepper(key, label, value, min, max) {
  return `<div class="stepper">
    <button type="button" data-step="${key}" data-delta="-1" data-min="${min}" data-max="${max}" aria-label="Decrease ${esc(label)}">−</button>
    <span>${esc(label)} · ${esc(value)}</span>
    <button type="button" data-step="${key}" data-delta="1" data-min="${min}" data-max="${max}" aria-label="Increase ${esc(label)}">+</button>
  </div>`;
}

function viewSession() {
  const items = store.plan.map((item) => ({ item, exercise: findExercise(item.id) })).filter((row) => row.exercise);
  if (!items.length) {
    return `<div class="pad"><button class="back" type="button" data-action="back">Sheet</button><p>Add an exercise before you start.</p></div>`;
  }
  if (state.sessionIndex >= items.length) {
    const done = items.filter((row) => doneToday(row.item.id)).length;
    return `<header class="top"><button class="back" type="button" data-action="back">Sheet</button></header>
      <div class="pad"><h1>That’s the list.</h1>
      <p>${done} of ${items.length} checked for today.</p>
      <button class="primary" type="button" data-action="back">Back to the sheet</button></div>`;
  }
  const current = items[state.sessionIndex];
  const exercise = current.exercise;
  const dose = current.item.dose;
  const video = exercise.videoId
    ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(exercise.videoId)}?rel=0&modestbranding=1&playsinline=1" title="${esc(exercise.name)} demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       <p class="credit"><a href="${esc(videoUrl(exercise.videoId))}" target="_blank" rel="noopener">Open the demo</a></p>`
    : "";
  return `<header class="top bar">
      <button class="back" type="button" id="session-prev" ${state.sessionIndex === 0 ? "disabled" : ""}>Previous</button>
      <span>${state.sessionIndex + 1} of ${items.length}</span>
      <button class="back" type="button" data-action="back">Close</button>
    </header>
    <div class="pad">
      <p class="tag">${esc(exercise.region)}</p>
      <h1>${esc(exercise.name)}</h1>
      <p class="dose">${esc(doseSummary(dose, exercise.sided))}</p>
      ${dose.notes ? `<div class="note-block"><strong>From your physio</strong>${esc(dose.notes)}</div>` : ""}
      ${exercise.caution ? `<div class="caution">${esc(exercise.caution)}</div>` : ""}
      ${video}
      <ol class="steps">${(exercise.steps || []).map((step) => `<li><span>${esc(step)}</span></li>`).join("")}</ol>
      <div class="session-foot">
        <button class="primary" type="button" id="session-done" data-done="${esc(exercise.id)}">${state.sessionIndex === items.length - 1 ? "Done" : "Done, next"}</button>
        <button class="secondary" type="button" id="session-skip">Skip for now</button>
      </div>
    </div>`;
}

function viewCustom() {
  const dose = state.draftDose || blankDose({ sided: true, defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" } });
  return `<header class="top"><button class="back" type="button" data-action="back">Sheet</button></header>
    <div class="pad">
      <h1>${state.editingCustom ? "Edit exercise" : "Add your own"}</h1>
      <p class="quiet">Use the name on your sheet. A video link is optional. Write the steps your physio gave you, one per line.</p>
      <label class="field">Name
        <input class="box" id="custom-name" value="${esc(state.customName)}">
      </label>
      <label class="field">YouTube link
        <input class="box" id="custom-video" placeholder="https://youtu.be/…" value="${esc(state.customVideo)}">
      </label>
      <label class="field">Steps
        <textarea id="custom-steps" placeholder="One step per line">${esc(state.customSteps)}</textarea>
      </label>
      ${stepper("sets", "Sets", dose.sets, 0, 20)}
      ${stepper("reps", "Reps", dose.reps, 0, 2000)}
      ${stepper("hold", "Hold, seconds", dose.hold, 0, 1800)}
      <div class="seg">${["each", "left", "right", "both"].map((value) => `<button type="button" data-side="${value}" class="${dose.side === value ? "on" : ""}">${value === "each" ? "Each side" : value === "both" ? "Together" : value[0].toUpperCase() + value.slice(1)}</button>`).join("")}</div>
      <label class="field">Notes
        <textarea id="notes" placeholder="Modifications, tempo, what to skip">${esc(dose.notes || "")}</textarea>
      </label>
      <button class="primary" type="button" id="save-custom">Save to my sheet</button>
    </div>`;
}

function bind() {
  const q = document.getElementById("q");
  if (q) {
    q.addEventListener("input", () => {
      state.query = q.value;
      const form = document.getElementById("search-form");
      const clear = document.getElementById("clear-q");
      if (state.query && !clear && form) {
        form.insertAdjacentHTML("beforeend", `<button class="icon-btn" type="button" id="clear-q" aria-label="Clear search">×</button>`);
        document.getElementById("clear-q").addEventListener("click", clearSearch);
      }
      if (!state.query && clear) clear.remove();
      paintResults();
    });
  }
  document.getElementById("search-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const parsed = parseQuery(state.query);
    if (parsed.videoId && !searchExercises(parsed.text).length) {
      openCustom(parsed.text, state.query);
      return;
    }
    const hits = searchExercises(parsed.text).filter((hit) => state.region === "All" || hit.exercise.region === state.region);
    if (hits[0] && hits[0].score >= 72) openExercise(hits[0].exercise.id, parsed.dose);
  });
  document.getElementById("clear-q")?.addEventListener("click", clearSearch);
  document.getElementById("dismiss-install")?.addEventListener("click", () => {
    store.installDismissed = true;
    persist();
    render();
  });
  document.querySelectorAll("[data-region]").forEach((button) => {
    button.addEventListener("click", () => {
      state.region = button.dataset.region;
      render();
    });
  });
  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const parsed = parseQuery(state.query);
      const fromSearch = button.classList.contains("hit");
      openExercise(button.dataset.open, fromSearch && state.query.trim() ? parsed.dose : null);
    });
  });
  document.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      movePlan(Number(button.dataset.move), Number(button.dataset.dir));
    });
  });
  document.getElementById("start-session")?.addEventListener("click", () => {
    const firstOpen = store.plan.findIndex((item) => !doneToday(item.id));
    go({ view: "session", sessionIndex: firstOpen === -1 ? 0 : firstOpen });
  });
  document.getElementById("add-unknown")?.addEventListener("click", () => {
    const parsed = parseQuery(state.query);
    openCustom(parsed.text || state.query, parsed.videoId ? state.query : "");
  });
  document.getElementById("add-blank")?.addEventListener("click", () => openCustom("", ""));
  document.querySelectorAll("[data-action=back]").forEach((button) => {
    button.addEventListener("click", () => history.back());
  });
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.step;
      const min = Number(button.dataset.min);
      const max = Number(button.dataset.max);
      if (!state.draftDose) state.draftDose = blankDose(findExercise(state.detailId));
      state.draftDose[key] = clamp(Number(state.draftDose[key]) + Number(button.dataset.delta), min, max);
      delete state.draftDose.label;
      render();
    });
  });
  document.querySelectorAll("[data-side]").forEach((button) => {
    button.addEventListener("click", () => {
      state.draftDose.side = button.dataset.side;
      render();
    });
  });
  document.getElementById("notes")?.addEventListener("input", (event) => {
    if (!state.draftDose) return;
    state.draftDose.notes = event.target.value;
  });
  document.getElementById("save")?.addEventListener("click", saveDetail);
  document.getElementById("remove")?.addEventListener("click", () => {
    removeFromPlan(state.detailId);
    history.back();
  });
  document.getElementById("edit-custom")?.addEventListener("click", () => {
    const exercise = findExercise(state.detailId);
    if (!exercise) return;
    go({
      view: "custom",
      editingCustom: true,
      customName: exercise.name,
      customVideo: exercise.videoId ? `https://youtu.be/${exercise.videoId}` : "",
      customSteps: (exercise.steps || []).join("\n"),
      draftDose: { ...(state.draftDose || blankDose(exercise)) }
    });
  });
  document.getElementById("delete-custom")?.addEventListener("click", () => {
    store.custom = store.custom.filter((exercise) => exercise.id !== state.detailId);
    removeFromPlan(state.detailId);
    persist();
    history.back();
  });
  document.getElementById("session-prev")?.addEventListener("click", () => {
    if (state.sessionIndex > 0) {
      state.sessionIndex -= 1;
      render();
    }
  });
  document.getElementById("session-done")?.addEventListener("click", (event) => {
    markDone(event.currentTarget.dataset.done);
    state.sessionIndex += 1;
    render();
  });
  document.getElementById("session-skip")?.addEventListener("click", () => {
    state.sessionIndex += 1;
    render();
  });
  ["custom-name", "custom-video", "custom-steps"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", (event) => {
      if (id === "custom-name") state.customName = event.target.value;
      if (id === "custom-video") state.customVideo = event.target.value;
      if (id === "custom-steps") state.customSteps = event.target.value;
    });
  });
  document.getElementById("save-custom")?.addEventListener("click", saveCustom);
}

function clearSearch() {
  state.query = "";
  render();
}

function paintResults() {
  const parsed = parseQuery(state.query);
  const root = document.getElementById("app");
  const oldPad = [...root.querySelectorAll(":scope > .pad")].filter((node) => !node.querySelector(".list"));
  const disclaimer = root.querySelector(".disclaimer");
  const showingSearch = state.query.trim().length > 0;
  const hits = showingSearch
    ? searchExercises(parsed.text || state.query).filter((hit) => state.region === "All" || hit.exercise.region === state.region)
    : [];
  let html = "";
  if (showingSearch) {
    html = hits.length
      ? `<div class="pad"><h2>Matches</h2>${hits.map((hit) => hitRow(hit.exercise)).join("")}</div>`
      : `<div class="pad"><div class="empty"><strong>No saved demo for “${esc(parsed.text || state.query)}”.</strong><p class="quiet">You can still keep it. Paste a video link if your physio sent one, and write their steps in your own words.</p>
          <button class="primary" type="button" id="add-unknown">Add it to my sheet</button>
          <a class="youtube" href="${esc(searchUrl(`${parsed.text || state.query} physical therapy exercise`))}" target="_blank" rel="noopener">Look up demos on YouTube</a></div></div>`;
  } else if (state.region === "All") {
    const popular = POPULAR.map(findExercise).filter(Boolean);
    html = `<div class="pad"><h2>Often on the sheet</h2>${popular.map(hitRow).join("")}
      <button class="linkish" type="button" id="add-blank">Add an exercise that is not listed</button></div>`;
  } else {
    const library = allExercises().filter((exercise) => exercise.region === state.region);
    html = `<div class="pad"><h2>${esc(state.region)}</h2>${library.map(hitRow).join("")}</div>`;
  }
  oldPad.forEach((node) => node.remove());
  disclaimer.insertAdjacentHTML("beforebegin", html);
  root.querySelectorAll("[data-open]").forEach((button) => {
    if (button.closest(".list")) return;
    button.addEventListener("click", () => {
      const parsedNow = parseQuery(state.query);
      const fromSearch = button.classList.contains("hit");
      openExercise(button.dataset.open, fromSearch && state.query.trim() ? parsedNow.dose : null);
    });
  });
  document.getElementById("add-unknown")?.addEventListener("click", () => {
    const parsedNow = parseQuery(state.query);
    openCustom(parsedNow.text || state.query, parsedNow.videoId ? state.query : "");
  });
  document.getElementById("add-blank")?.addEventListener("click", () => openCustom("", ""));
}

function openCustom(name, video) {
  const parsed = parseQuery(name);
  go({
    view: "custom",
    customName: parsed.text || name || "",
    customVideo: video || "",
    customSteps: "",
    editingCustom: false,
    draftDose: applyParsed(blankDose({ sided: true, defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" } }), parsed.dose)
  });
}

function saveCustom() {
  const name = state.customName.trim();
  if (!name) {
    document.getElementById("custom-name")?.focus();
    return;
  }
  const id = state.editingCustom && state.detailId ? state.detailId : `custom-${Date.now()}`;
  const steps = state.customSteps.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const clip = youtubeId(state.customVideo);
  const exercise = {
    id,
    name,
    aliases: [norm(name)],
    region: "Mine",
    equipment: "",
    sided: state.draftDose.side !== "both",
    blurb: "Added from your sheet",
    videoId: clip || "",
    credit: "Your link",
    steps: steps.length ? steps : ["Follow the instructions your physio wrote for this one."],
    feel: "",
    avoid: "Stop if pain is sharp, spreads, or you feel unwell.",
    custom: true,
    defaultDose: { ...state.draftDose }
  };
  store.custom = store.custom.filter((item) => item.id !== id);
  store.custom.push(exercise);
  const dose = { ...state.draftDose, notes: state.draftDose.notes || "" };
  const existing = planItem(id);
  if (existing) existing.dose = dose;
  else store.plan.push({ id, dose });
  persist();
  go({ view: "detail", detailId: id, draftDose: dose }, true);
}

function boot() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
  const initial = snapshot();
  history.replaceState(initial, "");
  window.addEventListener("popstate", (event) => {
    if (!event.state) return;
    Object.assign(state, event.state);
    if (event.state.draftDose) state.draftDose = { ...event.state.draftDose };
    if (state.view === "detail") {
      const saved = planItem(state.detailId);
      if (saved) state.draftDose = { ...saved.dose };
    }
    render();
  });
  render();
}

boot();
