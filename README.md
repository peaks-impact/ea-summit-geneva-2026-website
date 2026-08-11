# EA Summit: Geneva 2026 website

Static landing page for [EA Summit: Geneva 2026](https://www.effectivealtruism.org/ea-global/events/ea-summit-geneva-2026)
(Saturday, 24 October 2026, Crowne Plaza Geneva). Plain HTML/CSS/JS, no build step.

```
index.html
css/style.css
js/main.js
assets/favicon.svg
CNAME              # GitHub Pages custom domain: geneva-summit.effectivealtruism.ch
```

## Deploy (GitHub Pages)

1. Push this repo to `main` on `github.com/peaks-impact/ea-summit-geneva-2026-website`.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
3. GitHub Pages will pick up the `CNAME` file automatically and serve the site at
   `geneva-summit.effectivealtruism.ch` once the DNS record below is live and GitHub has
   issued an HTTPS certificate for it (can take up to ~1 hour after DNS propagates).
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes available (greyed out
   until DNS + cert are ready).

See the chat response for the full step-by-step INWX DNS setup.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

## Updating content

All copy lives in `index.html`. Colors/fonts/spacing are CSS custom properties at the top of
`css/style.css` (`--accent-*` for the teal palette, `--bg*`/`--text*` for the dark theme).
