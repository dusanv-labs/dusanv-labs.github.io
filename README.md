# Dušan Vasić – Portfolio

Personal bilingual (English / Serbian) portfolio website of **Dušan Vasić**, Full Stack Developer.

**Live site:** https://dusanv-labs.github.io  
Serbian version: https://dusanv-labs.github.io/?lang=sr

## About

A static website built with plain HTML, CSS and JavaScript, with no frameworks and no build step, hosted on GitHub Pages.

- English / Serbian language switch (auto-detected from the browser, remembered between visits)
- Light and dark theme (follows the system setting by default)
- Responsive layout, smooth scrolling and a mobile menu
- Downloadable CV in both languages (`cv-en.pdf`, `cv-sr.pdf`)

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Page structure and SEO meta tags |
| `translations.js` | **All site text in both languages** |
| `styles.css` | Styles and light/dark themes |
| `main.js` | Language switch, theme, menu and animations |
| `cv-en.pdf`, `cv-sr.pdf` | Downloadable CVs |
| `cv-source/` | HTML sources used to generate the CV PDFs |

## Updating content

1. Edit the text in `translations.js` (keep the same keys in `en` and `sr`).
2. Commit and push to `main`:
   ```
   git add .
   git commit -m "Update content"
   git push
   ```
3. GitHub Pages redeploys the site automatically within 1–2 minutes.

To update a CV, edit `cv-source/cv-en.html` or `cv-source/cv-sr.html`, open it in Chrome, and print it to PDF (A4, no headers/footers) as `cv-en.pdf` / `cv-sr.pdf`.
