# Aorabyte Sdn. Bhd. — Official Website

The official corporate website for **Aorabyte Sdn. Bhd.** (Reg. No. `202501033404` / `1634814-W`), a Malaysian technology company operating across **Telecommunications**, **Automotive Technology**, **Information Technology**, and **Generative AI**.

> Engineering the backbone of connected industries.

---

## 🧭 Overview

This is a fast, static, dependency-free marketing site built with plain **HTML + CSS + a sprinkle of vanilla JS**. No frameworks, no build step, no bloat. It deploys instantly to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

**Tech stack**
- HTML5 (single page, semantic)
- Modern CSS (Grid, custom properties, `clamp()`)
- Vanilla JavaScript (IntersectionObserver reveals, ~60 LOC)
- Google Fonts — Fraunces (display), Space Grotesk (body), JetBrains Mono (code)

**Design direction**
- Dominant near-black + ivory with a signal-cyan accent
- Editorial serif display paired with a clean geometric sans
- Grid overlay and subtle noise texture for atmospheric depth
- Scroll-reveal animations that respect `prefers-reduced-motion`

---

## 📁 Project structure

```
aorabyte-website/
├── index.html              # Main page
├── styles.css              # All styles
├── script.js               # Reveal animations + nav state
├── assets/
│   └── favicon.svg         # Scalable favicon
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Quick start (local preview)

You have several options — pick whichever is easiest.

### Option A — Just open the file
Double-click `index.html`. That's it. It will open in your browser.

### Option B — Python (recommended for fonts/CORS)
```bash
cd aorabyte-website
python3 -m http.server 8080
```
Then visit **http://localhost:8080** in your browser.

### Option C — Node.js
```bash
npx serve .
```

### Option D — VS Code
Install the **Live Server** extension, then right-click `index.html` → *Open with Live Server*.

---

## 🐙 Publishing to GitHub

```bash
# 1. Initialize the repo
cd aorabyte-website
git init
git add .
git commit -m "Initial commit: Aorabyte corporate website"

# 2. Create a repo on GitHub, then point your local one at it
git branch -M main
git remote add origin https://github.com/<your-username>/aorabyte-website.git
git push -u origin main
```

---

## 🌐 Deploying (free hosting options)

### 1) GitHub Pages (easiest — already configured)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. Once you push to `main`:

1. Go to your repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push any commit to `main` — the site will be live at `https://<your-username>.github.io/<repo-name>/`

### 2) Netlify
1. Visit [app.netlify.com](https://app.netlify.com)
2. *Add new site* → *Import an existing project* → connect your GitHub repo
3. Leave build command empty, publish directory: `.` → **Deploy**

### 3) Vercel
1. Visit [vercel.com](https://vercel.com) → *Add New Project* → import repo
2. Framework preset: **Other** → **Deploy**

### 4) Cloudflare Pages
1. Visit [pages.cloudflare.com](https://pages.cloudflare.com) → *Create project* → connect repo
2. Build command: *none*, output directory: `/` → **Save & Deploy**

---

## 🔗 Custom domain (e.g. aorabyte.com)

1. Buy the domain from any registrar (Namecheap, Cloudflare, Google Domains, Exabytes for `.com.my`).
2. In your host's dashboard (GitHub Pages / Netlify / Vercel / Cloudflare), add the custom domain.
3. Point DNS at the host:
   - **GitHub Pages**: `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, plus `CNAME www` → `<username>.github.io`
   - **Netlify / Vercel / Cloudflare**: follow their in-dashboard instructions (usually a single `CNAME`).
4. Wait for DNS to propagate (minutes to a few hours) and HTTPS to provision automatically.

---

## ✏️ Customising content

| What you want to change | Where to edit |
|---|---|
| Company tagline / headlines | `index.html` — search for `hero__headline` |
| Capabilities / sectors | `index.html` — `<section class="capabilities">` and `<section class="sectors">` |
| Contact info (email / phone / address) | `index.html` — `<section class="contact">` |
| Colors / fonts | `styles.css` — `:root { … }` block at the top |
| Logo SVG | `index.html` (nav + footer) and `assets/favicon.svg` |

---

## 📇 Company information (for reference)

| Field | Value |
|---|---|
| Company Name | AORABYTE SDN. BHD. |
| Registration No. | 202501033404 (1634814-W) |
| Incorporated | 21 July 2025 |
| Type | Private Limited (Sdn. Bhd.) |
| MSIC Codes | 45201 · 62099 · 61909 |
| Registered Address | 6, Jalan TPS 2/23, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor, Malaysia |
| Email | hafizuddeen.nikpa@gmail.com |
| Phone | +60 16-343 5465 |

### Directors
- Hafizuddeen Bin Nik Pa
- Mohamad Shairul Bin Mohd Noor
- Sahril Bin Masri

---

## 🤖 About the AI offering

Aorabyte's flagship generative AI service uses **Meta Llama agents** orchestrated with **Claude** to automate:

- Business decision-making
- HR and operations
- Procurement and purchasing
- Accounting workflows
- Client email and communication

---

## 📜 License

See `LICENSE` — this codebase is released under the MIT License. All company trademarks, copy, and branding belong to **Aorabyte Sdn. Bhd.**

---

## 🙋 Need help?

Open an issue on the repo or reach out at **hafizuddeen.nikpa@gmail.com**.
