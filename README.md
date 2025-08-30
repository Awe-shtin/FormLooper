# FormLooper (Local-First Web App, PWA)

FormLooper lets you **design a simple form** (text/number/date/select/checkbox), then **loop through records** quickly with autosave, and **export/import CSV**. It works fully offline and can be installed as an app (PWA).

## Quick Start
1. Open `index.html` in any modern browser (Chrome/Edge/Firefox).
2. Build your form in the **Form Builder** (add fields, set labels/keys, reorder).
3. Switch to **Looping Data Entry** to fill records. Use **Next** to add new records.
4. **Export CSV** anytime. **Import CSV** to load data, or **Load Schema** to load a saved layout.

Everything autosaves to your browser at `formlooper_v1`.

## PWA (Installable)
- The included `service-worker.js` and `manifest.webmanifest` enable offline use and "Install app" on desktop/mobile.
- For best offline behavior, host the folder with GitHub Pages, Netlify, or any static server.

## Hosting
- **GitHub Pages**: enable Pages in repo settings for instant hosting.
- **Netlify / Vercel**: drag-and-drop deploy the folder.
- **Any web host**: serve the files as static assets.

## Data Shapes
- CSV export columns follow your current schema keys (in order).
- CSV import will derive a schema from headers if none exists yet.
- JSON schema files can be saved/loaded to preserve layout.

## Keyboard Shortcuts
- **Ctrl + Enter**: Next record.

## Notes
- This is local-first: no servers, no sign-in. Data stays in your browser unless you export it.
