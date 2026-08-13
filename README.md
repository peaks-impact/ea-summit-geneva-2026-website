# EA Summit: Geneva 2026 website

Static landing page for [EA Summit: Geneva 2026](https://www.effectivealtruism.org/ea-global/events/ea-summit-geneva-2026)
(Saturday, 24 October 2026, Crowne Plaza Geneva). Plain HTML/CSS/JS, no build step.

```
index.html
css/style.css
js/main.js                    # mobile nav toggle only
assets/hero-banner.jpg|.webp  # banner, 2400px wide
assets/hero-banner-sm.*       # banner, 1200px wide (serves below 720px)
assets/ea-logo.png            # EA lightbulb mark, header + footer
assets/favicon.png
assets/apple-touch-icon.png
CNAME                         # GitHub Pages custom domain: geneva-summit.effectivealtruism.ch
```

## Deploy (GitHub Pages)

1. Push to `main` on `github.com/peaks-impact/ea-summit-geneva-2026-website`.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
3. GitHub Pages picks up the `CNAME` file automatically and serves the site at
   `geneva-summit.effectivealtruism.ch` once DNS is live and GitHub has issued an HTTPS
   certificate (can take up to ~1 hour after DNS propagates).
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes available.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Design

Converted from a Claude design-canvas file (`website.zip`) into plain HTML/CSS: template loops
expanded, inline styles moved into classes, the canvas JS runtime dropped.

- **Palette / type:** CSS custom properties at the top of `css/style.css`
  (`--cream` page background, `--navy` ink, `--rust` terracotta accent, `--sky*` blues).
  Literata for headings, Karla for body text, IBM Plex Mono for labels and eyebrows.
- **Sections** in `index.html`, in order: hero banner, intro + facts list, who it's for,
  program, application process, ticket pricing, contact, footer. All copy is inline.
- **Hero:** the "Effective Altruism Summit: Geneva" wordmark is baked into the banner image,
  with a visually hidden `<h1>` for screen readers and search engines. Below 720px the date /
  venue / format chips move underneath the image so they don't cover the wordmark.
- **Breakpoints:** 1000px (grids collapse to one column), 900px (nav becomes a menu),
  720px (mobile spacing, small banner, chips below the image).
- **Images:** WebP with JPEG fallback via `<picture>`. If you replace the banner, regenerate
  both widths and both formats.

## Updating content

All copy lives in `index.html`. The apply link (`https://luma.com/13lyllfq`) appears three
times: header CTA, intro, and the application section. Ticket tiers, program bullets and the
audience list are plain markup, so add or remove list items directly.
