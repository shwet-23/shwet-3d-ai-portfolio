# Shwet Pandit — 3D AI Engineer Portfolio

A responsive React + Vite portfolio with an interactive Three.js scene, animated UI, project cards, and automatic public GitHub repository sync.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP.
3. Open the extracted project folder in VS Code.
4. Open Terminal in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

## Customize

- Portfolio content: `src/App.jsx`
- Visual design and responsive layout: `src/index.css`
- 3D scene: `src/components/Scene3D.jsx`
- Page metadata: `index.html`

The project list attempts to fetch public repositories from `https://api.github.com/users/shwet-23/repos`. If the API is unavailable or rate-limited, it shows the curated project list instead.

## Notes

- The 3D hero requires WebGL support in the browser.
- Google Fonts and GitHub API sync need an internet connection.
- No private repository information is requested or displayed.
