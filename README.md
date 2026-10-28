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

Run `npm run build`, then publish the generated `dist/` directory to a static host. For a Git-connected host, use `npm run build` as the build command and `dist` as the output directory. The site requires no backend or SPA redirects. For hosting below a subdirectory, configure Vite’s `base` and adjust the favicon path.

Publication requires the owner’s approval; this implementation has not been published.
