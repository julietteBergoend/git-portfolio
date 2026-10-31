# Your Name — portfolio

A one-page React, TypeScript, and Vite portfolio. The site is designed to deploy
from the `portfolio/` folder in this repository to GitHub Pages.

## Make it yours

Update the starter content before publishing:

- In `src/App.tsx`, change the name, role, introduction, project examples, about
  copy, and contact email. The three projects are visual placeholders, not real
  case studies.
- In `index.html`, update the page title and meta description.
- In `src/App.css` and `src/index.css`, adjust the colors, typography, and
  layout to fit your style.
- Replace `public/favicon.svg` with your own mark if you like.

## Run locally

```sh
npm ci
npm run dev
```

Check the production build and lint rules with:

```sh
npm run build
npm run lint
```

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds this app and deploys it
when changes reach the repository's `main` branch. In the repository settings,
open **Pages** and set the build and deployment source to **GitHub Actions**.

The workflow automatically chooses the correct Vite base path for a project
site (`https://<owner>.github.io/<repository>/`) or a user site
(`https://<owner>.github.io/`).

For a local build that mirrors a project site, set `BASE_PATH` to the repository
name:

```sh
BASE_PATH=/your-repository/ npm run build
```
