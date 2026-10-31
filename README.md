# Rohit Ahire — Portfolio V5

A minimalist, **dark-first** portfolio with a working light-mode toggle, selectable project details, and an alternating experience + education timeline. Both personal photos are included, with a backup copy embedded in the HTML for reliable loading.

## Run the website (Windows)
1. Download and extract **the complete ZIP**.
2. Open `Rohit_Ahire_Portfolio_v3`.
3. Double-click `index.html` (Chrome or Edge).

There is **no npm, Node.js, Python, build step or API key** needed.

## What changed
- Dark/charcoal appearance by default, switch to light mode from the top menu.
- Visual, alternating timeline of two degrees and three experience milestones.
- Updated hero to describe the FGVT HiWi position without mentioning 3D printing.
- More reliable photo loading: normal images from `images/`, fallback copies embedded in `index.html`.
- Six selected portfolio projects, contact buttons and the original CV PDF.

## Make changes
- `content.js`: personal profile, dates, experience and project metadata.
- `styles.css`: colors and layouts.
- `site.js`: interactions (modals, theme switch, timeline markup).
- `images/`: replace the two WebP photos here. The embedded backup in `index.html` is only used when those images fail to load.
- `Rohit_Ahire_CV.pdf`: replace with your latest résumé keeping the filename.

## Publish free
Upload the complete extracted folder to a GitHub repository. GitHub Pages (Settings → Pages) can deploy from the repository root. Vercel and Netlify also accept this static website with no build command. Do not upload just `index.html` if you want the editable content and stylesheet to keep working.

**Privacy:** Your photos, résumé and email become publicly accessible when you deploy.

V4 update: your name is now the primary homepage heading; the “Building intelligent systems…” statement is smaller. All other content remains unchanged.

V5: corrected hero proportions after visual feedback. Name is prominent but not oversized; secondary statement is smaller, and hero spacing is tighter. All other sections retain the V4 layout.
