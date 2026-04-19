# Markswell Ogutu — QA Automation Engineer Portfolio

A production-ready personal portfolio website built with React. Dark terminal aesthetic with electric green accents, showcasing QA automation skills, experience, and projects.

## Tech Stack

- **React 18** — Component-based UI
- **CSS Modules** — Scoped, component-level styles
- **Google Fonts** — JetBrains Mono + Syne
- **No external UI libraries** — Pure CSS animations and transitions

## Project Structure

```
markswell-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Sticky nav with active section tracking
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── sections/
│   │   ├── Hero.js         # Animated terminal + hero content
│   │   ├── Hero.css
│   │   ├── Skills.js       # Skills grid with tag variants
│   │   ├── Skills.css
│   │   ├── Experience.js   # Expandable timeline cards
│   │   ├── Experience.css
│   │   ├── Projects.js     # Project cards with metrics
│   │   ├── Projects.css
│   │   ├── Education.js    # Education + certifications side-by-side
│   │   ├── Education.css
│   │   ├── Contact.js      # Contact links, quick facts, references
│   │   └── Contact.css
│   ├── styles/
│   │   └── global.css      # CSS variables, base styles, utilities
│   ├── data.js             # All portfolio content (single source of truth)
│   ├── App.js              # Root component + scroll animation observer
│   └── index.js            # React entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 14
- npm >= 6

### Installation

```bash
# Clone or extract the project
cd markswell-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

Outputs a production-optimised build to the `build/` folder. Ready to deploy to:
- **Netlify** — drag & drop the `build/` folder
- **Vercel** — `vercel --prod`
- **GitHub Pages** — add `"homepage"` to package.json and run `npm run deploy`

## Customisation

All portfolio content lives in **`src/data.js`**. Edit that single file to update:

- Personal info (name, email, phone, LinkedIn, GitHub)
- Skills and tags
- Work experience and bullet points
- Projects and metrics
- Education history
- Certifications
- References

No other files need to be touched for content changes.

## Features

- Animated terminal window in Hero with typewriter effect
- Sticky navbar with active section highlighting
- Mobile-responsive hamburger menu
- Expandable experience cards (click to expand bullets)
- Scroll-triggered fade-in animations (IntersectionObserver)
- Copy-to-clipboard for email address
- Pulsing availability badge
- Smooth scroll navigation
- Custom scrollbar styling
- Hover micro-interactions throughout

## Deployment to GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/markswell-portfolio"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```
