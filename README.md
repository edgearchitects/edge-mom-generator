# EDGE — Minutes of Meeting Generator

AI-powered meeting minutes tool for EDGE Architecture & Design. Paste a Read.ai transcript, click Generate, get professional formatted minutes instantly.

---

## Features

- Extracts attendees, actions, decisions, and risks automatically from any transcript
- Structured action tables with owner, due date, and status per agenda section
- Live risk register with Likelihood × Impact scoring (LOW / MED / HIGH)
- Matters Arising section for previous actions review
- Print-to-PDF output ready to issue directly
- EDGE branded — navy, blue and orange palette with Barlow font

---

## Deploy on Netlify (Recommended — no API key needed by users)

1. Fork or push this repo to your GitHub account
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect GitHub and select this repo
4. Under **Site configuration → Environment variables**, add:
   ```
   Key:   ANTHROPIC_API_KEY
   Value: sk-ant-api03-your-key-here
   ```
5. Deploy — your team gets a URL with no API key entry needed

Get your API key at [console.anthropic.com/keys](https://console.anthropic.com/keys)

---

## Deploy on GitHub Pages (Basic — users enter their own key)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Save — live at `https://YOUR-USERNAME.github.io/REPO-NAME/`
5. Each user enters their own Anthropic API key on first use

---

## Local Use

Just open `index.html` in Chrome or Edge — but note that browsers block direct API calls from `file://` URLs. Use a simple local server instead:

```bash
# Python (built in)
python3 -m http.server 8080

# Then open http://localhost:8080
```

---

## Usage Tips

- **Use Read.ai's Summary tab** rather than the full transcript for transcripts over 60,000 characters — it's faster, cheaper, and produces cleaner output
- **Cost**: ~$0.01–0.05 per generation with Claude Sonnet. $5 of API credit = 100–500 meetings
- **Agenda sections**: toggle on/off the sections relevant to each meeting before generating
- **Risk Register**: leave on — it costs nothing extra and positions EDGE as a top-tier LDC practice

---

## Files

```
index.html                          — Main app (single file, self-contained)
netlify.toml                        — Netlify deployment config
netlify/edge-functions/inject-key.js — Injects API key server-side (Netlify only)
README.md                           — This file
```

---

## Branding

Colours sourced from EDGE MoM template (`EDGE_MoM_Template.docx`):

| Token    | Hex       | Use               |
|----------|-----------|-------------------|
| Navy     | `#0E2841` | Header, doc bands |
| Blue     | `#156082` | Primary, tables   |
| Orange   | `#E97132` | Accent stripe     |
| Teal     | `#0F9ED5` | Gradient accent   |
| Light    | `#EAF2F7` | Table backgrounds |

Font: **Barlow** (Google Fonts) — closest web equivalent to Aptos used in the template.

---

*EDGE Architecture & Design · Dubai, UAE · Internal Tool*
