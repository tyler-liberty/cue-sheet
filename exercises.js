/* Curated examples of common home exercises. Doses are blanks to edit, not a prescription. */
window.EXERCISES = [
  {
    id: "clamshell",
    name: "Clamshell",
    aliases: ["clam", "clams", "clam shell", "clamshells", "clam shells"],
    region: "Hip",
    equipment: "Floor. Band only if you were given one",
    sided: true,
    blurb: "Side lying, knees bent, top knee opens.",
    videoId: "39vuP5xozsI",
    credit: "MedStar Health",
    videoNote: "This clip uses a band above the knees. Leave the band off if your physio did not give you one.",
    steps: [
      "Lie on your side with hips stacked, knees bent about halfway, and heels in line with your seat.",
      "Keep the feet touching. Lift the top knee, like a book opening, without rolling the top hip backward.",
      "Pause, then lower the knee slowly.",
      "Switch sides when you have finished the dose for the first side."
    ],
    feel: "The side of the back hip.",
    avoid: "Rolling the pelvis back, lifting the foot, or rushing the knee up.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "glute-bridge",
    name: "Glute bridge",
    aliases: ["bridge", "bridges", "hip bridge", "pelvic bridge", "glute bridges"],
    region: "Hip",
    equipment: "Floor",
    sided: false,
    blurb: "On your back, lift the hips by squeezing the seat.",
    videoId: "7NOGZGBusWQ",
    credit: "Sheffield Teaching Hospitals NHS Foundation Trust",
    videoNote: "The physio in this clip also cues a gentle pelvic-floor lift. Add that only if your physio taught it.",
    steps: [
      "Lie on your back, knees bent, feet flat about hip-width apart, arms by your sides.",
      "Exhale, squeeze the buttocks, and lift the hips until shoulders, hips, and knees are roughly in one line.",
      "Pause, then lower slowly. Let the back of the ribs come down before the tail.",
      "Keep the knees pointing the same direction as the toes."
    ],
    feel: "The buttocks and the back of the thighs. The low back should stay quiet.",
    avoid: "Pushing up by arching the back, holding your breath, or letting the knees fall in or out.",
    defaultDose: { sets: 2, reps: 10, hold: 2, side: "both" }
  },
  {
    id: "elevated-glute-bridge",
    name: "Elevated glute bridge",
    aliases: ["couch bridge", "feet elevated bridge", "single leg elevated bridge", "elevated bridge"],
    region: "Hip",
    equipment: "A couch",
    sided: true,
    blurb: "Feet on the couch. The other foot hovers just above the heel.",
    videoId: "I7Zwyzr8COk",
    credit: "Theory of Motion Exercise Library",
    videoNote: "Feet stay up on the couch or bench. Keep the free foot just above the heel, rather than lifting that leg high.",
    steps: [
      "Lie on your back with your feet up on the couch, at couch height.",
      "Leave one foot on the couch. Lift the other foot so it sits just above that heel.",
      "Push through the glutes and lift the hips. Hold 5 seconds, then lower.",
      "Switch so the other foot is the one up just above the heel."
    ],
    feel: "The glutes. The low back stays quiet.",
    avoid: "Arching the back to get higher, or letting the foot on the couch slip.",
    defaultDose: { sets: 2, reps: 5, hold: 5, side: "each", notes: "Couch height. Left and right: the free foot is up just above the heel. Push through the glutes." }
  },
  {
    id: "hamstring-lean",
    name: "Hamstring stretch, leaning down",
    aliases: ["hamstring stretch leaning down", "leaning hamstring", "standing hamstring stretch", "lean down hamstring"],
    region: "Knee",
    equipment: "A chair nearby if you want a hand on it",
    sided: true,
    blurb: "Lean the chest down and feel the back of the thigh.",
    videoId: "SeKKQg3HVYA",
    credit: "VIGEO",
    videoNote: "Hinge at the hips and lean the chest forward. A chair is there if you want a hand on it.",
    steps: [
      "Stand tall, one foot slightly forward, that knee soft.",
      "Hinge at the hips and lean your chest down toward the front thigh, back long.",
      "Stop at a stretch in the back of the thigh. A chair in front is fine for balance.",
      "If yours was sitting and leaning down toward a straight leg, do that version instead."
    ],
    feel: "A stretch in the back of the thigh.",
    avoid: "Rounding hard and yanking toward the floor, or a stretch that tingles into the foot.",
    defaultDose: { sets: 0, reps: 0, hold: 0, side: "each", label: "Dose not written down", notes: "Hamstring stretch, leaning down. No number was on the note." }
  },
  {
    id: "heel-prop",
    name: "Heel prop",
    aliases: ["knee elevated", "knee elevation", "knee elevations", "heel hang", "passive knee extension"],
    region: "Knee",
    equipment: "A towel roll, pillow, or the edge of the couch",
    sided: false,
    blurb: "Heel up, knee free to hang straight. 15–20 minutes.",
    videoQuery: "heel prop passive knee extension physical therapy",
    steps: [
      "Prop the heel up so the knee is unsupported and can hang toward straight. A towel roll, a pillow, or the couch edge all work.",
      "Relax the leg. Let the knee settle. This is a long rest, not a hard push.",
      "Stay 15–20 minutes.",
      "Do it 2–3 times a day.",
      "A bag of weight goes on the thigh only if your physio set it there."
    ],
    feel: "A stretch at the back of the knee as it hangs straighter.",
    avoid: "Forcing the knee down with your hands, or pain that is sharp rather than a stretch.",
    defaultDose: { sets: 3, reps: 1, hold: 0, side: "both", label: "15–20 min · 2–3 times a day", notes: "Knee elevated, heel prop. 15–20 minutes, 2–3 times a day." }
  },
  {
    id: "leg-on-wall",
    name: "Leg on the wall",
    aliases: ["leg on wall", "leg on wall thing", "wall heel slide", "leg up the wall"],
    region: "Knee",
    equipment: "A wall",
    sided: false,
    blurb: "Foot on the wall. Slide to bend, or rest the leg up.",
    videoQuery: "heel slides on wall knee flexion physical therapy",
    steps: [
      "Lie on your back and put the foot on the wall.",
      "If you were shown a bend: slide the heel down the wall to bend the knee, then slide it back up to straighten.",
      "If you were shown a rest: leave the leg up the wall so it stays elevated.",
      "Use the version from your visit."
    ],
    feel: "The knee bending, or the leg simply resting up.",
    avoid: "Pushing the bend into a sharp pain, or getting up quickly if you have been resting the leg overhead.",
    defaultDose: { sets: 0, reps: 0, hold: 0, side: "both", label: "Dose not written down", notes: "Listed as “leg on wall thing.” No number was on the note." }
  },
  {
    id: "bag-with-weight",
    name: "Bag with weight",
    aliases: ["weight bag", "weighted bag", "bag weight"],
    region: "Knee",
    equipment: "The bag your physio used",
    sided: false,
    blurb: "Their bag, on the spot they showed you.",
    videoQuery: "heel prop with weight on thigh knee extension",
    steps: [
      "Use the bag and the amount of weight from your visit.",
      "Put it where they put it. On this list that is often across the thigh during the heel prop, or at the hips during the bridge.",
      "If the bag belongs on one of those, follow it there."
    ],
    feel: "The same exercise it sits on, a little heavier.",
    avoid: "A heavier bag than you were given, or resting it on the kneecap itself.",
    defaultDose: { sets: 0, reps: 0, hold: 0, side: "both", label: "Their bag and weight", notes: "Bag with weight. Place it where your physio did." }
  },
  {
    id: "bird-dog",
    name: "Bird dog",
    aliases: ["bird-dog", "bird dogs", "birddog", "quadruped arm and leg"],
    region: "Back",
    equipment: "Floor. A towel under the knees if they are sore",
    sided: true,
    blurb: "Hands and knees, opposite arm and leg reach out.",
    videoId: "xo7Qpb_NTKE",
    credit: "Hospital for Special Surgery",
    steps: [
      "Start on hands and knees. Hands under shoulders, knees under hips.",
      "Brace the stomach lightly, as if someone were about to poke it, and keep breathing.",
      "Slide one leg back until it is about level with the hip. Toes point toward the floor.",
      "If that is steady, reach the opposite arm forward, thumb up.",
      "Pause, come back, and switch sides."
    ],
    feel: "The stomach and the back of the hip. The low back stays still.",
    avoid: "Kicking the leg high, rolling the hips, or locking the elbows.",
    defaultDose: { sets: 2, reps: 8, hold: 2, side: "each" }
  },
  {
    id: "dead-bug",
    name: "Dead bug",
    aliases: ["deadbug", "dead bugs"],
    region: "Core",
    equipment: "Floor",
    sided: true,
    blurb: "On your back, one arm and the opposite leg reach away.",
    videoId: "8NBNM8haZx0",
    credit: "ChoosePT",
    videoNote: "Start with the leg only, the way the physio shows first. Add the arm when the back stays still.",
    steps: [
      "Lie on your back. Hips and knees bent so the knees are up over the hips, arms toward the ceiling.",
      "Gently set the low back toward the floor and keep it there. Keep breathing.",
      "Slowly reach one heel away, only as far as the back stays still, then bring it back.",
      "To make it harder, reach the opposite arm overhead at the same time.",
      "Alternate sides."
    ],
    feel: "A deep, quiet effort in the stomach.",
    avoid: "Letting the low back arch off the floor, holding your breath, or moving fast.",
    defaultDose: { sets: 2, reps: 6, hold: 0, side: "each" }
  },
  {
    id: "chin-tuck",
    name: "Chin tuck",
    aliases: ["chin tucks", "cervical retraction", "double chin exercise", "chin retraction"],
    region: "Neck",
    equipment: "A wall, or a chair",
    sided: false,
    blurb: "Slide the chin straight back, eyes level.",
    videoId: "EM0NUpAeGY4",
    credit: "NHS University Hospitals of Northamptonshire",
    steps: [
      "Stand with your seat, shoulder blades, and the back of your head lightly on a wall.",
      "Draw the chin down and back, like a soft double chin. Keep the eyes level. This is a slide, not a nod.",
      "Hold about a second, then relax.",
      "Away from a wall, make the same straight-back slide while sitting or standing tall."
    ],
    feel: "A stretch at the back of the neck and light work at the front.",
    avoid: "Looking down, jutting the chin forward, or forcing it into pain.",
    defaultDose: { sets: 2, reps: 10, hold: 1, side: "both" }
  },
  {
    id: "cat-camel",
    name: "Cat-camel",
    aliases: ["cat camel", "cat cow", "cat-cow", "cat and camel"],
    region: "Back",
    equipment: "Floor or a bed",
    sided: false,
    blurb: "Hands and knees, slowly round and then gently dip the back.",
    videoId: "JJkjIKlimW8",
    credit: "Royal Free London NHS Foundation Trust",
    steps: [
      "On hands and knees, wrists under shoulders and knees under hips. A bed is fine if the floor is not.",
      "Slowly round the back up and tuck the tail under. Let the head nod a little.",
      "Then let the chest and belly sink gently so the back dips. Only go as far as it stays comfortable.",
      "Move back and forth, slow enough to feel each part of the back."
    ],
    feel: "The back moving, not a hard stretch.",
    avoid: "Pushing into a sharp pain, or holding your breath at either end.",
    defaultDose: { sets: 1, reps: 10, hold: 0, side: "both" }
  },
  {
    id: "calf-raise",
    name: "Single-leg calf raise",
    aliases: ["calf raise", "calf raises", "heel raise", "heel raises", "single leg calf raise"],
    region: "Ankle",
    equipment: "A counter or wall to hold",
    sided: true,
    blurb: "Hold a counter and rise up onto the ball of one foot.",
    videoId: "qPd73snQfUs",
    credit: "Hospital for Special Surgery",
    videoNote: "If your sheet says both feet, lift both heels together. Use the clip for the shape of the rise, not the one-foot balance.",
    steps: [
      "Face a counter, feet hip-width, toes forward. Rest your hands on it.",
      "For the single-leg version in the video, lift one foot off the floor.",
      "Raise the standing heel, with the weight toward the ball of the foot between the first and second toes.",
      "Lower the heel slowly.",
      "Easier version: keep both feet down and raise both heels."
    ],
    feel: "The calf of the standing leg.",
    avoid: "Rolling onto the outside of the foot, bouncing, or locking the knee hard.",
    defaultDose: { sets: 2, reps: 10, hold: 1, side: "each" }
  },
  {
    id: "wall-angels",
    name: "Wall angels",
    aliases: ["wall angel", "wall slides", "wall slide", "scapular wall slide"],
    region: "Shoulder",
    equipment: "A wall. Optional small towel behind the head",
    sided: false,
    blurb: "Back on the wall, slide the arms up and down.",
    videoId: "ywYi4rBhRBQ",
    credit: "Tangelo Health",
    steps: [
      "Stand with your back on a wall. Step the feet forward a little if you need to, so the back can rest there.",
      "A small towel behind the head is fine. Gently tuck the chin.",
      "Start with the arms in a goal-post shape, elbows and hands toward the wall.",
      "Slide the arms up, then back down, keeping them on the wall as much as you comfortably can."
    ],
    feel: "Work between the shoulder blades, and sometimes a stretch in the chest.",
    avoid: "Arching the low back, shrugging toward the ears, or forcing the hands flat if they will not go.",
    defaultDose: { sets: 2, reps: 8, hold: 0, side: "both" }
  },
  {
    id: "pendulum",
    name: "Pendulum",
    aliases: ["pendulums", "codman", "codmans", "codman's", "shoulder pendulum"],
    region: "Shoulder",
    equipment: "A table or counter",
    sided: true,
    blurb: "Lean forward and let the arm hang and sway.",
    videoId: "-37fDuC83DQ",
    credit: "The Physical Therapy Advisor",
    steps: [
      "Hold a table with the uninvolved hand and lean forward a little. The working arm hangs loose.",
      "Sway your body so the arm swings gently forward and back, then side to side.",
      "Let it make small circles. The shoulder muscles stay relaxed. The body creates the motion.",
      "Stand up slowly when you finish."
    ],
    feel: "A loose, easy swing. Little to no effort in the shoulder.",
    avoid: "Using the shoulder muscles to draw the circles, or making the swings large and fast.",
    defaultDose: { sets: 1, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "band-external-rotation",
    name: "Band external rotation",
    aliases: ["external rotation", "shoulder external rotation", "er", "band er", "pull apart", "scapular retraction"],
    region: "Shoulder",
    equipment: "A light band",
    sided: false,
    blurb: "Elbows at your sides, rotate the hands out and squeeze the blades.",
    videoId: "4tpl-huz060",
    credit: "sportsinjuryclinic.net",
    steps: [
      "Stand or sit tall. Elbows bent about 90 degrees and tucked to your sides. Palms up.",
      "Hold a light band between the hands with a little tension.",
      "Move the hands apart, rotating at the shoulder, and gently squeeze the shoulder blades down and together.",
      "Hold about two seconds, then return slowly. The elbows stay against the sides."
    ],
    feel: "The back of the shoulders and between the shoulder blades.",
    avoid: "The elbows drifting forward, shrugging, or a band so strong the shoulders hike up.",
    defaultDose: { sets: 2, reps: 10, hold: 2, side: "both" }
  },
  {
    id: "sit-to-stand",
    name: "Sit to stand",
    aliases: ["sit-to-stand", "sit to stands", "chair stand", "chair stands", "squat to stand"],
    region: "Knee",
    equipment: "A sturdy chair",
    sided: false,
    blurb: "Stand up from a chair, then sit back down slowly.",
    videoId: "jAkKklZh4aQ",
    credit: "Kingston and Richmond NHS Foundation Trust",
    videoNote: "The clip also shows harder versions, with arms crossed and then one foot slightly forward. Stay with the basic one unless your physio progressed you.",
    steps: [
      "Sit toward the front of a sturdy chair. Feet back, hip-width, knees pointing over the toes.",
      "Lean your nose forward over your toes and stand up. Use the armrests if you were told to.",
      "Stand tall, then sit back down slowly. Let the hips reach back to the chair.",
      "The knees stay in line with the toes."
    ],
    feel: "The thighs and the seat.",
    avoid: "Plopping down, the knees caving in, or a chair that slides.",
    defaultDose: { sets: 2, reps: 8, hold: 0, side: "both" }
  },
  {
    id: "standing-knee-flexion",
    name: "Standing hamstring curl",
    aliases: ["standing knee flexion", "hamstring curl", "hamstring curls", "heel to bum", "heel to bottom", "standing knee bend"],
    region: "Knee",
    equipment: "A chair to hold",
    sided: true,
    blurb: "Hold a chair and bring one heel up toward your seat.",
    videoId: "k4TDxANOD4M",
    credit: "Kingston and Richmond NHS Foundation Trust",
    steps: [
      "Hold the back of a chair. Stand tall.",
      "Bend one knee and bring the heel slowly toward your seat.",
      "Keep the thighs lined up. Do not let the working thigh swing forward.",
      "Lower the foot back down with control."
    ],
    feel: "Work in the back of the thigh.",
    avoid: "Arching the back, swinging the hip forward, or yanking the heel up.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "hip-flexor-stretch",
    name: "Half-kneeling hip flexor stretch",
    aliases: ["hip flexor stretch", "hip flexor", "kneeling hip flexor", "half kneeling hip flexor"],
    region: "Hip",
    equipment: "A pillow or pad for the knee",
    sided: true,
    blurb: "Half kneeling, tuck the pelvis, shift slightly forward.",
    videoId: "mzPvzMivukw",
    credit: "Hospital for Special Surgery",
    steps: [
      "Kneel on one knee, the other foot in front, both hips facing forward. Pad the kneeling knee.",
      "Flatten the low back by gently tucking the pelvis under, like zipping the belt buckle up.",
      "Shift the weight forward a little, torso tall, until you feel a stretch at the front of the kneeling hip.",
      "Hold and breathe. Switch sides."
    ],
    feel: "A stretch at the front of the hip on the kneeling side.",
    avoid: "Arching the low back, leaning the trunk forward, or pain at the kneecap.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "each" }
  },
  {
    id: "straight-leg-raise",
    name: "Straight leg raise",
    aliases: ["slr", "straight leg raises", "lying leg raise"],
    region: "Knee",
    equipment: "Floor or bed",
    sided: true,
    blurb: "One knee bent, lift the straight leg to that height.",
    videoQuery: "straight leg raise physical therapy demonstration",
    steps: [
      "Lie on your back. Bend the knee you are not working, foot flat.",
      "Tighten the thigh of the straight leg so the knee presses toward the bed.",
      "Lift that straight leg up to about the height of the bent knee.",
      "Lower it slowly, still with the thigh tight, until the heel nearly touches."
    ],
    feel: "The front of the thigh.",
    avoid: "Arching the back, letting the straight knee bend on the way up, or hiking the hip.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "heel-slides",
    name: "Heel slides",
    aliases: ["heel slide", "heel slides", "lying knee bend", "knee bends lying"],
    region: "Knee",
    equipment: "Bed or floor",
    sided: true,
    blurb: "Slide the heel up to bend the knee, then back down.",
    videoQuery: "heel slides knee physical therapy",
    steps: [
      "Lie on your back with the working leg out straight.",
      "Slide the heel toward your seat to bend the knee, as far as it goes comfortably.",
      "Pause, then slide the heel back down until the knee is straight.",
      "Keep the toes pointing up, not rolled out."
    ],
    feel: "A bend and a straighten at the knee. Mild tightness can be normal. Sharp pain is not.",
    avoid: "Forcing the bend, lifting the hip to cheat the slide, or letting the foot roll out.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "quad-set",
    name: "Quad flexing sets",
    aliases: ["quad set", "quad sets", "quad flex", "quad flexing", "static quad", "static quads", "knee lock", "quadriceps set"],
    region: "Knee",
    equipment: "Optional small towel under the knee",
    sided: false,
    blurb: "Tighten the thigh, 10 second hold, through the day.",
    videoQuery: "quad set towel roll physical therapy",
    steps: [
      "Sit or lie with the leg straight. A small rolled towel under the knee is useful if you have one.",
      "Flex the quad, pressing the back of the knee toward the towel. Hold 10 seconds.",
      "Relax the thigh completely before the next one.",
      "Spread them through the day. The note says about 1000."
    ],
    feel: "The front of the thigh tightening.",
    avoid: "Holding your breath, or pain deep in the knee. Ease the squeeze if it hurts.",
    defaultDose: { sets: 1, reps: 1000, hold: 10, side: "both", label: "1000 a day · 10 second hold", notes: "Quad flexing sets. 10 second hold, about 1000 times through the day." }
  },
  {
    id: "short-arc-quad",
    name: "Short arc quad",
    aliases: ["short arc quads", "saq", "knee extension over roll"],
    region: "Knee",
    equipment: "A rolled towel or bolster",
    sided: true,
    blurb: "Towel under the knee, straighten to lift the foot.",
    videoQuery: "short arc quad physical therapy",
    steps: [
      "Lie back with a rolled towel under the knee so the knee rests in a small bend.",
      "Tighten the thigh and straighten the knee, lifting the foot. The back of the knee stays on the towel.",
      "Hold a moment, then lower the foot slowly."
    ],
    feel: "The front of the thigh, just above the knee.",
    avoid: "Lifting the whole thigh off the towel, or snapping the knee straight.",
    defaultDose: { sets: 2, reps: 10, hold: 2, side: "each" }
  },
  {
    id: "terminal-knee-extension",
    name: "Banded terminal knee extension",
    aliases: ["tke", "terminal knee extension", "terminal knee extensions", "banded tke", "doorframe tke"],
    region: "Knee",
    equipment: "A loop band and a doorframe",
    sided: false,
    blurb: "Band in a circle in the door. Stand close and pull the leg straight.",
    videoId: "xdKm8PSX438",
    credit: "E3 Rehab Exercise Library",
    videoNote: "The band sits behind the knee. Looping it in the doorframe is the same motion as the anchor in this clip. Hold 5 seconds.",
    steps: [
      "Put the band in a circle and shut it in the doorframe so it stays put.",
      "Stand close to the door and put the working leg in the band.",
      "Pull the leg straight. Hold 5 seconds.",
      "Ease the bend back, then repeat. Two sets of 10."
    ],
    feel: "The thigh, as the knee finishes straight.",
    avoid: "Snapping the knee, a band that can slip out of the door, or pain in the joint.",
    defaultDose: { sets: 2, reps: 10, hold: 5, side: "both", label: "2 × 10 · 5 second hold", notes: "Band in a circle, in the doorframe. Stand close and pull the leg straight." }
  },
  {
    id: "side-leg-raise",
    name: "Side-lying leg raise",
    aliases: ["side lying hip abduction", "hip abduction", "side leg lift", "side lying leg raise"],
    region: "Hip",
    equipment: "Floor",
    sided: true,
    blurb: "On your side, lift the top leg a little, toe forward.",
    videoQuery: "side lying hip abduction physical therapy",
    steps: [
      "Lie on your side, bottom knee bent a little for balance, top leg straight and in line with the body.",
      "Hips stacked, top hip slightly rolled forward.",
      "Lift the top leg a small amount, leading with the heel, toes pointing forward rather than at the ceiling.",
      "Lower slowly."
    ],
    feel: "The side of the hip.",
    avoid: "Rolling the hip back, lifting the leg high, or turning the toes up.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "pelvic-tilt",
    name: "Pelvic tilt",
    aliases: ["pelvic tilts", "low back flatten"],
    region: "Back",
    equipment: "Floor",
    sided: false,
    blurb: "On your back, gently flatten the low back, then release.",
    videoQuery: "pelvic tilt lying down physical therapy",
    steps: [
      "Lie on your back, knees bent, feet flat.",
      "Gently tilt the pelvis so the low back flattens toward the floor.",
      "Hold a breath or two, then return to a small natural gap under the back.",
      "Keep the movement small."
    ],
    feel: "Light work in the stomach and a change of pressure under the back.",
    avoid: "Pressing hard, lifting the hips into a bridge, or holding your breath.",
    defaultDose: { sets: 2, reps: 10, hold: 3, side: "both" }
  },
  {
    id: "stomach-brace",
    name: "Lower-stomach brace",
    aliases: ["ta", "drawing in", "drawing-in", "transverse abdominis", "stomach brace", "abdominal brace"],
    region: "Core",
    equipment: "Floor",
    sided: false,
    blurb: "A gentle lower-stomach draw-in while you keep breathing.",
    videoQuery: "transverse abdominis activation physical therapy lying",
    steps: [
      "Lie on your back, knees bent. Rest two fingers just inside the front hip bones.",
      "Gently draw the lower stomach in and slightly up, like zipping snug trousers. You should still be able to talk.",
      "The fingers feel a light tightening. Hold while breathing, then let go fully."
    ],
    feel: "A deep, light tension under the fingers. Not a hard six-pack brace.",
    avoid: "Sucking in so hard you hold your breath or bear down, unless your physio taught you a harder brace on purpose.",
    defaultDose: { sets: 2, reps: 8, hold: 5, side: "both" }
  },
  {
    id: "hamstring-stretch",
    name: "Hamstring stretch",
    aliases: ["hamstring stretches", "lying hamstring stretch", "strap hamstring stretch"],
    region: "Knee",
    equipment: "A towel or belt",
    sided: true,
    blurb: "On your back, towel behind the thigh, knee eases straighter.",
    videoQuery: "supine hamstring stretch towel physical therapy",
    steps: [
      "Lie on your back. The leg you are not stretching stays bent, foot on the floor.",
      "Loop a towel behind the thigh or calf of the other leg and bring it up.",
      "Straighten the knee until you feel a stretch in the back of the thigh. Keep a soft knee if straight hurts.",
      "Hold and breathe. The tail stays heavy on the floor."
    ],
    feel: "A stretch in the back of the thigh.",
    avoid: "Yanking the leg, rounding up off the floor, or a stretch that tingles into the foot.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "each" }
  },
  {
    id: "figure-4",
    name: "Figure-4 stretch",
    aliases: ["figure 4", "figure four", "piriformis stretch", "glute stretch", "number 4 stretch"],
    region: "Hip",
    equipment: "Floor",
    sided: true,
    blurb: "Ankle over the other knee, gently draw the leg in.",
    videoQuery: "figure 4 stretch physical therapy supine",
    steps: [
      "Lie on your back with both knees bent.",
      "Cross one ankle over the other knee, making a figure 4.",
      "If you want more, hold behind the uncrossed thigh and draw it gently toward you.",
      "Keep the head and shoulders down."
    ],
    feel: "A stretch in the back of the crossed hip.",
    avoid: "Pulling into a sharp pain, or twisting the low back off the floor.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "each" }
  },
  {
    id: "scapular-squeeze",
    name: "Shoulder-blade squeeze",
    aliases: ["scapular squeeze", "scap squeeze", "shoulder blade squeeze", "posture squeeze", "scapular retraction"],
    region: "Shoulder",
    equipment: "None",
    sided: false,
    blurb: "Draw the shoulder blades down and gently together.",
    videoQuery: "scapular retraction squeeze physical therapy",
    steps: [
      "Sit or stand tall, arms relaxed at your sides.",
      "Draw the shoulder blades slightly down, then gently together, as if sliding them toward back pockets.",
      "Hold, then release all the way.",
      "The chin stays back and the neck stays long."
    ],
    feel: "Work between the shoulder blades, not in the neck.",
    avoid: "Shrugging up toward the ears, sticking the ribs out, or squeezing as hard as you can.",
    defaultDose: { sets: 2, reps: 10, hold: 3, side: "both" }
  },
  {
    id: "doorway-stretch",
    name: "Doorway chest stretch",
    aliases: ["doorway stretch", "pec stretch", "pectoral stretch", "doorway pec stretch", "chest stretch"],
    region: "Shoulder",
    equipment: "A doorway",
    sided: false,
    blurb: "Forearms on the frame, a small step through.",
    videoQuery: "doorway pec stretch physical therapy",
    steps: [
      "Put the forearms on the door frame, elbows about shoulder height and bent.",
      "Step one foot through the door until you feel a stretch across the chest.",
      "Keep the neck long and the ribs from flaring hard.",
      "If you feel a pinch at the front of the shoulder, lower the elbows or stop."
    ],
    feel: "A stretch across the chest.",
    avoid: "A pinch in the front of the shoulder, or leaning hard through a painful range.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "both" }
  },
  {
    id: "open-book",
    name: "Open book",
    aliases: ["open books", "book opening", "thoracic rotation", "thread the needle"],
    region: "Back",
    equipment: "Floor",
    sided: true,
    blurb: "Side lying, knees stacked, open the top arm toward the ceiling.",
    videoQuery: "open book thoracic rotation physical therapy",
    steps: [
      "Lie on your side with knees bent and stacked, arms reached out in front of you.",
      "Keep the knees together. Open the top arm and let the chest turn toward the ceiling.",
      "Follow the hand with your eyes. Only go as far as the knees stay stacked.",
      "Bring the arm back. Switch sides."
    ],
    feel: "Turning through the mid-back.",
    avoid: "Forcing the shoulder down, letting the knees come apart, or holding your breath.",
    defaultDose: { sets: 2, reps: 8, hold: 2, side: "each" }
  },
  {
    id: "plank",
    name: "Forearm plank",
    aliases: ["plank", "planks", "elbow plank"],
    region: "Core",
    equipment: "Floor",
    sided: false,
    blurb: "Elbows under shoulders, body a straight line. Knees down is the start.",
    videoQuery: "forearm plank on knees physical therapy",
    steps: [
      "Elbows under shoulders, knees on the floor.",
      "Make a straight line from your head to your knees. Brace the stomach lightly and keep breathing.",
      "Hold. If that is easy and your physio agrees, lift the knees for a full plank.",
      "Stop if the low back sags or you cannot breathe."
    ],
    feel: "The stomach, and some work in the shoulders.",
    avoid: "The low back dropping, the seat up in the air, or holding your breath.",
    defaultDose: { sets: 2, reps: 1, hold: 15, side: "both" }
  },
  {
    id: "step-up",
    name: "Step-up",
    aliases: ["step up", "step ups", "step-ups"],
    region: "Knee",
    equipment: "A low step and something to hold",
    sided: true,
    blurb: "Whole foot on a step, press through the heel to stand.",
    videoQuery: "forward step up physical therapy",
    steps: [
      "Use a low step. Hold a rail if you have one.",
      "Place the whole foot on the step.",
      "Press through the heel to stand up on that leg. Try not to push off the back foot.",
      "Lower slowly. The knee tracks over the middle of the foot."
    ],
    feel: "The thigh and the seat of the leg on the step.",
    avoid: "The knee collapsing inward, a step so high you have to heave, or a foot only half on the step.",
    defaultDose: { sets: 2, reps: 8, hold: 0, side: "each" }
  },
  {
    id: "band-walk",
    name: "Lateral band walk",
    aliases: ["monster walk", "monster walks", "crab walk", "band walk", "side step band"],
    region: "Hip",
    equipment: "A loop band",
    sided: false,
    blurb: "Band above the knees, small steps sideways.",
    videoQuery: "lateral band walk monster walk physical therapy",
    steps: [
      "Put the band just above the knees, unless your physio placed it at the ankles or feet.",
      "Soft bend in hips and knees, chest up.",
      "Step sideways, keeping tension in the band. The knees stay out over the toes.",
      "Take a few steps one way, then the other, slow enough that the feet do not slap."
    ],
    feel: "The side of the hips.",
    avoid: "Knees caving in, leaning the trunk, or steps so big you lose balance.",
    defaultDose: { sets: 2, reps: 8, hold: 0, side: "each" }
  },
  {
    id: "ankle-pumps",
    name: "Ankle pumps",
    aliases: ["ankle pump", "foot pumps"],
    region: "Ankle",
    equipment: "None",
    sided: true,
    blurb: "Point the foot, then pull the toes back.",
    videoQuery: "ankle pumps physical therapy",
    steps: [
      "Long sitting or lying, leg relaxed.",
      "Point the foot away slowly.",
      "Then pull the toes back toward the shin.",
      "Move through a comfortable range. Repeat in a steady rhythm."
    ],
    feel: "The calf and the front of the shin taking turns.",
    avoid: "Fast jerky pumps, or pushing into a sharp pain at the ankle.",
    defaultDose: { sets: 2, reps: 15, hold: 0, side: "each" }
  },
  {
    id: "calf-stretch",
    name: "Calf stretches",
    aliases: ["calf stretch", "calf stretch at the wall", "gastroc stretch", "gastrocnemius stretch", "soleus stretch", "wall calf stretch"],
    region: "Ankle",
    equipment: "A wall",
    sided: true,
    blurb: "Back heel down, a gentle lean toward the wall.",
    videoQuery: "standing calf stretch wall physical therapy gastroc soleus",
    steps: [
      "Hands on the wall. Step one foot back, toes forward, heel down.",
      "For the upper calf, keep the back knee straight and ease the hips forward until the back of the lower leg stretches.",
      "For the lower calf, bend the back knee a little and keep the heel down.",
      "Hold and breathe. Do the version your physio circled."
    ],
    feel: "A stretch in the calf. Bent-knee version sits lower, near the Achilles.",
    avoid: "The back foot turning out, the heel lifting, or bouncing.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "each" }
  },
  {
    id: "single-leg-balance",
    name: "Single-leg balance",
    aliases: ["single leg stance", "single leg balance", "one leg balance", "stork stand"],
    region: "Balance",
    equipment: "A counter within reach",
    sided: true,
    blurb: "Stand on one leg next to a counter.",
    videoQuery: "single leg balance physical therapy counter",
    steps: [
      "Stand at a kitchen counter, fingertips ready but trying not to grip.",
      "Lift one foot off the floor. Stand tall. Keep a soft knee on the standing leg.",
      "Hold. Use more of the hand if you wobble hard.",
      "Look at a still point in front of you."
    ],
    feel: "The foot and the side of the hip working to keep you still.",
    avoid: "Locking the knee, holding your breath, or practicing far from something you can hold.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "each" }
  },
  {
    id: "childs-pose",
    name: "Child's pose",
    aliases: ["childs pose", "child pose"],
    region: "Back",
    equipment: "Floor. Optional pillow",
    sided: false,
    blurb: "Sit the hips toward the heels and let the back round.",
    videoQuery: "child's pose stretch gentle",
    steps: [
      "Kneel, then sit the hips back toward the heels.",
      "Fold forward and rest the forehead down. Arms can reach forward or rest by your sides.",
      "Knees apart if that gives the belly room. A pillow between the hips and heels helps sore knees.",
      "Breathe into the back."
    ],
    feel: "A gentle stretch along the back.",
    avoid: "Knee pain. Come out if the knees complain, and try a pillow or skip it.",
    defaultDose: { sets: 2, reps: 1, hold: 20, side: "both" }
  },
  {
    id: "towel-scrunches",
    name: "Towel scrunches",
    aliases: ["toe scrunches", "toe curls", "towel toe scrunch"],
    region: "Ankle",
    equipment: "A towel",
    sided: true,
    blurb: "Scrunch a towel toward you with the toes.",
    videoQuery: "towel scrunches toe curls physical therapy",
    steps: [
      "Sit, bare foot on a towel on a hard floor.",
      "Scrunch the towel toward you with the toes.",
      "Spread the toes to smooth it away, if that was part of your sheet.",
      "Keep the movement in the toes. The heel stays down."
    ],
    feel: "The small muscles under the foot.",
    avoid: "Curling from the whole ankle, or going so hard the foot cramps. Shake it out if it cramps.",
    defaultDose: { sets: 2, reps: 10, hold: 0, side: "each" }
  },
  {
    id: "glute-set",
    name: "Glute set",
    aliases: ["glute sets", "buttock squeeze", "gluteal set", "bottom squeeze"],
    region: "Hip",
    equipment: "None",
    sided: false,
    blurb: "Squeeze the buttocks, hold, then fully let go.",
    videoQuery: "glute set gluteal squeeze physical therapy",
    steps: [
      "Lie on your back with legs straight, or stand tall.",
      "Squeeze the buttocks together.",
      "Hold, then relax completely before the next squeeze."
    ],
    feel: "The buttocks tightening.",
    avoid: "Squeezing so hard the muscle cramps, or holding your breath.",
    defaultDose: { sets: 2, reps: 10, hold: 5, side: "both" }
  },
  {
    id: "prone-press-up",
    name: "Prone press-up",
    aliases: ["press up", "press-up", "mckenzie press up", "cobra", "extension in lying"],
    region: "Back",
    equipment: "Floor or bed",
    sided: false,
    caution: "Only if your physio specifically asked you to bend the back backward. Skip it if extension is on your avoid list.",
    blurb: "Face down, press the chest up, hips stay on the floor.",
    videoQuery: "prone press up McKenzie physical therapy",
    steps: [
      "Lie face down, hands under the shoulders, as if for a small push-up.",
      "Relax the buttocks and the back.",
      "Press the chest up by straightening the elbows only as far as it stays acceptable. The hips stay on the floor.",
      "Pause, then lower back down."
    ],
    feel: "A stretch or pressure in the low back. It should stay in a range your physio already cleared.",
    avoid: "Pushing into a sharp pain, a pain that spreads down the leg, or lifting the hips off the floor.",
    defaultDose: { sets: 1, reps: 10, hold: 2, side: "both" }
  }
];
