# Souhail El Addaoui — Portfolio

A responsive React + TypeScript portfolio built with Vite, Tailwind CSS, and Lucide icons. No external services or environment variables are required.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite.

## Update

- Edit `src/content.ts` for personal information, project details, internship highlights, skills, certifications, and coursework.
- Edit `src/main.tsx` for section introductions and page structure.
- Edit `src/styles.css` for layout, colors, spacing, and responsive behavior.
- Update the title and sharing description in `index.html`.

No résumé was supplied. To add one, put your PDF at `public/resume.pdf`, then add a download link in `src/main.tsx` pointing to `/resume.pdf`. No download button is displayed until you add it.

The diagrams are conceptual illustrations, not application screenshots. No project repository, live demo, or GitHub profile links are included because none were supplied.

## Check and build

```sh
npm run check
npm run build
npm run preview
```

## Deploy

GitHub Actions builds and deploys pushes to `main` using `.github/workflows/deploy.yml`.
In the repository’s Settings → Pages, select **GitHub Actions** as the source.
Follow deployment progress in the Actions tab. After a successful deployment, visit
https://esouhail.github.io/myportfolio/.

Vite’s base is configured for `/myportfolio/`. Change it if the repository name or hosting path changes.
For another static host, run `npm run build` and publish `dist/` with an appropriate base path.
