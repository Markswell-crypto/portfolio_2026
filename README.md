# Markswell Ogutu — QA Automation Engineer Portfolio

Professional personal portfolio website for Markswell Osoro Ogutu, built with React and modern CSS. This site showcases QA automation expertise, experience, project highlights, and contact details.

## Overview

This portfolio presents a clean, responsive landing page designed to highlight:

- QA automation skills and toolset
- Performance and CI/CD result metrics
- Work experience and verified references
- Projects using Selenium, Postman, JMeter, and Jenkins
- A polished contact section with easy navigation

The portfolio includes a light/dark theme toggle, mobile-friendly navigation, and smooth scroll interactions.

## Built With

- **React** — UI rendering and component structure
- **CSS** — responsive layout, grid system, and animation styles
- **Vite** — fast development server and optimized production build
- **LocalStorage** — theme preference persistence

## Project Structure

```text
portfolio_2026/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx         # Main portfolio view and sections
│   ├── index.css       # Global styling and theme rules
│   ├── main.jsx        # React entry point
│   └── assets/         # Supporting images and assets
├── package.json
└── README.md
```

## Features

- Responsive hero section with action CTA
- Light/dark theme toggle with saved preferences
- Navigation for About, Results, Tech, Features, Skills, Experience, Projects, Education, References, and Contact
- Results section highlighting measurable QA outcomes
- Technology stack section reflecting project tooling
- Testimonials and reference endorsements
- Smooth scrolling and fade-in section animations
- Mobile-friendly hamburger navigation

## Getting Started

### Prerequisites

- Node.js (recommended 16+)
- npm

### Install

```bash
cd portfolio_2026
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the portfolio.

### Build for Production

```bash
npm run build
```

The optimized build output is placed into the `dist/` folder.

## Customization

The main content is currently defined in `src/App.jsx`. To update portfolio details, edit the relevant sections in the file:

- Hero copy and contact details
- Results and metrics
- Tech stack entries
- Features list
- Skills, experience, projects, and education
- References and testimonials

The styling is in `src/index.css`, where you can refine layout, colors, and responsive behavior.

## Notes

- The portfolio uses lightweight React and CSS only — no external UI frameworks are required.
- Theme preference is saved using `localStorage`.
- The current project setup is already configured to run with Vite.

## Deployment

This app can be deployed to any static hosting service that supports Vite output. Common options include:

- **Vercel** — connect the GitHub repository and deploy the `dist/` folder
- **Netlify** — drag and drop the `dist/` folder or connect the repo for automatic deploys
- **GitHub Pages** — add `"homepage"` to `package.json` and use `gh-pages`

Example GitHub Pages setup:

```json
"homepage": "https://your-username.github.io/portfolio_2026"
```

```bash
npm install --save-dev gh-pages
```

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

## Contributing

Feel free to customize this portfolio for your own use. Recommended edits:

- Update hero messaging and contact details in `src/App.jsx`
- Add or refine projects, experience, and skills content
- Adjust color palette and layout in `src/index.css`
- Keep styling consistent with the QA automation brand and professional tone

Contributions and improvements are welcome for creating a stronger personal showcase.

## License

This repository is free to use and customize for personal portfolio purposes.
