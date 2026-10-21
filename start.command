#!/bin/bash
cd "$(dirname "$0")"
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "your-computer-ip")
echo ""
echo "  On this Mac:    http://localhost:8787"
echo "  On your phone:  http://${IP}:8787"
echo "  Same Wi-Fi, then Share → Add to Home Screen."
echo ""
exec python3 -m http.server 8787 --bind 0.0.0.0
