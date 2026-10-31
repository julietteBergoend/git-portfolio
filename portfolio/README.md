# Juliette Bergoënd — portfolio

A bilingual, one-page React, TypeScript, and Vite portfolio. The site is
designed to deploy from the `portfolio/` folder in this repository to GitHub
Pages.

## Personalize the portfolio

French and English text and portfolio content are in
`src/translations/index.ts`. Update both languages together when changing:

- The introduction, experience, project highlights, and biography.
- Skills, language levels, education, and publication details.
- The email address and GitHub profile in the contact section.

The portfolio intentionally does not publish the CV’s phone number or home
address. The displayed project highlights summarize work described in the CV;
they are not links to separate case studies.

`src/App.tsx` contains the page structure and language switching. The initial
page title and description are in `index.html`; their translated versions are
in `src/translations/index.ts`. The visual design and responsive styles are in
`src/App.css` and `src/index.css`.

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
