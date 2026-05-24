# EDGE — Minutes of Meeting Generator

AI-powered meeting minutes tool for EDGE Architecture & Design.  
Paste a Read.ai transcript, click Generate, get professionally formatted minutes instantly.

---

## Features

- Extracts attendees, actions, decisions, and risks automatically from any transcript
- Structured action tables with owner, due date, and status per agenda section
- Live risk register with Likelihood × Impact scoring (LOW / MED / HIGH)
- Matters Arising section for previous actions review
- Print-to-PDF output ready to issue directly
- Full EDGE brand identity — black, off-white, grey and yellow with Helvetica Neue

---

## Deploy on Netlify (Recommended — no API key entry needed by users)

1. Push this repo to your GitHub account
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect GitHub and select this repo
4. Under **Site configuration → Environment variables**, add:
   ```
   Key:   ANTHROPIC_API_KEY
   Value: sk-ant-api03-your-key-here
   ```
5. Deploy — your team gets a permanent URL with no API key entry required

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

Browsers block direct API calls from `file://` URLs. Run a simple local server instead:

```bash
# Python (built in — no install needed)
python3 -m http.server 8080

# Then open http://localhost:8080
```

---

## Usage Tips

- **Use Read.ai's Summary tab** rather than the full transcript for meetings over 60,000 characters — faster, cheaper, and produces cleaner output
- **Cost** — approximately $0.01–0.05 per generation with Claude Sonnet. $5 of API credit covers 100–500 meetings
- **Agenda sections** — toggle on/off the sections relevant to each meeting before generating
- **Risk Register** — recommended to leave on; it costs nothing extra and demonstrates EDGE operates at top-tier LDC standard

---

## Repository Structure

```
index.html                           Main app — single file, fully self-contained
netlify.toml                         Netlify deployment and security config
netlify/edge-functions/inject-key.js Injects API key server-side (Netlify only)
README.md                            This file
```

---

## Brand Identity

| Token     | Hex       | Weight | Usage                                      |
|-----------|-----------|--------|--------------------------------------------|
| Black     | `#000000` | 30%    | Header, table headers, body text, borders  |
| Off-white | `#FAF9F6` | 50%    | Page background, document body, surfaces   |
| Grey      | `#D3D3D3` | 15%    | Borders, dividers, form fields, muted UI   |
| Yellow    | `#FFD033` |  5%    | CTA button, accent rule, active states     |

**Font:** Helvetica Neue (system stack — no external dependency)

---

*EDGE Architecture & Design · Dubai, UAE · Internal Tool*
