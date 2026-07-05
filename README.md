# Sakshi Srivastava - Developer Portfolio

A production-ready, high-performance personal portfolio website built with **Astro**, **Tailwind CSS v4**, and **TypeScript**, styled after the minimalist Vercel design language.

## 🚀 Key Features

- **Vercel Design Language**: A sleek, dark theme by default, clean typography (Geist/Inter), abundant whitespace, razor-thin borders, and subtle glows.
- **Spotlight Cards**: High-fidelity interactive hover glow cards implemented using pure CSS and optimized lightweight vanilla JS.
- **Animated Background**: Performance-friendly floating ambient radial glows and grid overlays (0% main-thread blocking, zero heavy scripts).
- **SEO & Social Optimization**:
  - Automatically generates proper Meta Tags (Title, Description, Robots).
  - OpenGraph & Twitter Cards setup.
  - Canonical URLs and Sitemap configuration.
  - Rich JSON-LD Structured Data Schema for a `Person` and `WebSite` to boost search index rankings.
  - Custom `robots.txt` and `sitemap.xml`.
- **Lucide Icons Wrapper**: A modular, type-safe [Icon.astro](file:///run/media/ridhamverma/STUDY%20BRO/COMPANY/Sakshi/portfolio-main/Sakshi-portfolio-versal/src/components/Icon.astro) component providing optimized inline SVG nodes, eliminating heavy node package overhead.
- **Dynamic Projects & Featured Layout**: Double-width layout grids for featured items, complete with customized macOS window mockups displaying SVG layouts (graphs, dashboard frames, data structures) instead of heavy image placeholders.
- **Copy-to-Clipboard Email Affordance**: A click-to-copy email interaction with a visual state checkmark confirmation.
- **Fully Accessible**: Implements WCAG 2.2 AA standards (semantic HTML5 layout, clear keyboard navigation focus rings, descriptive ARIA attributes, responsive layouts).
- **Data-Driven Architecture**: Easily customize or edit the entire site's copy in a single file: [src/data/portfolio.ts](file:///run/media/ridhamverma/STUDY%20BRO/COMPANY/Sakshi/portfolio-main/Sakshi-portfolio-versal/src/data/portfolio.ts).

---

## 🛠️ Project Structure

```text
/
├── public/
│   ├── favicon.svg      # Favicon vector
│   ├── favicon.ico      # Favicon fallback
│   ├── robots.txt       # Crawler rules
│   ├── sitemap.xml      # Search indexing outline
│   └── resume.pdf       # Place your real resume PDF here!
├── src/
│   ├── assets/          # Global assets
│   ├── data/
│   │   └── portfolio.ts # Centralized portfolio content database
│   ├── components/
│   │   ├── Icon.astro   # Custom SVG Lucide Icon component
│   │   ├── Header.astro # Sticky glassmorphic nav bar & mobile drawer
│   │   ├── Footer.astro # Brand copyright and quick footer links
│   │   ├── Hero.astro   # Main introduction and background glows
│   │   ├── About.astro  # Biography, specialties, and goals
│   │   ├── Skills.astro # Expertise categories
│   │   ├── Experience.astro # Responsive timeline
│   │   ├── Projects.astro # Gallery + custom mockups
│   │   ├── Education.astro # Academic cards
│   │   ├── Certifications.astro # Credential grids
│   │   ├── Achievements.astro # Key accomplishments
│   │   └── Contact.astro # Reach out panel & clipboard copy action
│   ├── layouts/
│   │   └── Layout.astro # Base layout (SEO, fonts, spotlight handler)
│   ├── styles/
│   │   └── global.css   # Tailwind v4 import & custom visual utilities
│   └── pages/
│       └── index.astro  # Homepage mounting all components
├── astro.config.mjs     # Astro & @tailwindcss/vite config
├── tsconfig.json        # TypeScript configuration
└── package.json         # Manifest dependencies
```

---

## ⚙️ How to Customize

To modify any details, projects, experience, or links on the site, simply open and edit **[src/data/portfolio.ts](file:///run/media/ridhamverma/STUDY%20BRO/COMPANY/Sakshi/portfolio-main/Sakshi-portfolio-versal/src/data/portfolio.ts)**:

```ts
export const portfolioData = {
  personal: {
    name: "Sakshi Srivastava",
    title: "Software Engineer",
    email: "sakshisrivastava9546@gmail.com",
    github: "https://github.com/Sakshiiii24",
    linkedin: "https://www.linkedin.com/in/sakshi-srivastava-7b08a3371/",
    resumeUrl: "/resume.pdf", // Matches public/resume.pdf
    ...
  },
  skills: [...],
  experience: [...],
  projects: [...],
  ...
};
```

To update the resume download button, place your compiled PDF resume file inside **`/public/resume.pdf`**.

---

## 💻 Commands

Inside the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Builds your production static site to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npx astro check` | Runs TypeScript diagnostic check across components |

---

## 🌐 Deployment

This site is optimized for static-first rendering. You can host it on:
- **Vercel**: Link your repository, and it will auto-detect Astro and build instantly.
- **GitHub Pages**: Add a build workflow or deploy the `/dist` output directory. Remember to configure your custom domain or `site` key in `astro.config.mjs` if deploying to a subpath.
- **Cloudflare Pages / Netlify**: Connect git repo and select Astro preset.
