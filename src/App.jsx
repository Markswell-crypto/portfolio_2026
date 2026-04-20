import { useEffect, useState } from 'react';
import './index.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Tech', href: '#tech' },
  { label: 'Features', href: '#features' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'References', href: '#references' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="portfolio-app">
      <header className="page-header">
        <div>
          <p className="brand">Markswell Ogutu</p>
          <p className="brand-subtitle">QA Automation Engineer</p>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <button
          className="theme-button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle light and dark mode"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        <nav className={`primary-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">QA Automation Engineer</p>
          <h1>Building resilient software with data-driven test automation.</h1>
          <p className="hero-subtitle">
            I specialize in automated web, API, and performance testing for enterprise-grade systems,
            integrating Jenkins pipelines, Docker-based test environments, and TestRail reporting.
          </p>
          <div className="hero-tags">
            <span>Automation</span>
            <span>CI/CD</span>
            <span>Performance</span>
            <span>Quality</span>
          </div>
          <a href="#contact" className="hero-cta">
            Contact me
          </a>
        </div>

        <aside className="hero-panel">
          <div className="contact-card">
            <p className="contact-title">Contact</p>
            <p>+254 798 840 098</p>
            <p>osoromarkswell80@gmail.com</p>
            <p>Kenya</p>
          </div>

          <div className="quick-stats">
            <div>
              <p className="stat-value">5+</p>
              <p className="stat-label">Years in technology</p>
            </div>
            <div>
              <p className="stat-value">3</p>
              <p className="stat-label">Industry roles</p>
            </div>
          </div>
        </aside>
      </section>

      <main>
        <section className="section-block" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Focused on automation solutions that reduce risk and accelerate delivery.</h2>
          </div>
          <p>
            Detail-oriented QA Automation Engineer with a strong background in software development,
            testing automation, and CI/CD pipeline integration. I build scalable automation frameworks,
            integrate Jenkins pipelines, and generate reports that help teams ship with confidence.
          </p>
          <p>
            I enjoy collaborating with developers, QA, and DevOps teams to create stable test
            environments, validate performance, and support continuous delivery for web and API platforms.
          </p>
          <p>
            This portfolio itself is built with React, modern CSS, responsive layout, and polished scroll
            animations to reflect the same quality standards I bring to automation projects.
          </p>
        </section>

        <section className="section-block results-section" id="results">
          <div className="section-heading">
            <span>Results</span>
            <h2>Quality outcomes that demonstrate operational impact.</h2>
          </div>
          <div className="results-grid">
            <article>
              <p className="metric-value">98%</p>
              <p className="metric-label">Test automation coverage across web and API workflows.</p>
            </article>
            <article>
              <p className="metric-value">20%</p>
              <p className="metric-label">Faster deployment cycles through CI/CD integration and automated regression.</p>
            </article>
            <article>
              <p className="metric-value">30+</p>
              <p className="metric-label">Daily automated checks executed across cross-team test layers.</p>
            </article>
          </div>
        </section>

        <section className="section-block tech-section" id="tech">
          <div className="section-heading">
            <span>Tech Stack</span>
            <h2>Tools and frameworks powering my automation work.</h2>
          </div>
          <div className="tech-grid">
            <article>
              <h3>React & UI</h3>
              <p>React.js front-end with smooth animations and responsive states.</p>
            </article>
            <article>
              <h3>Testing Tools</h3>
              <p>Selenium, Pytest, Postman, TestRail, JMeter, and TestNG for end-to-end quality.</p>
            </article>
            <article>
              <h3>Cloud & DevOps</h3>
              <p>Docker, Kubernetes, Jenkins, AWS, and Azure for reliable CI/CD validation.</p>
            </article>
            <article>
              <h3>Modern CSS</h3>
              <p>Pure CSS layout and transitions with no external UI library dependencies.</p>
            </article>
          </div>
        </section>

        <section className="section-block features-section" id="features">
          <div className="section-heading">
            <span>Features</span>
            <h2>Portfolio behaviors inspired by your GitHub README.</h2>
          </div>
          <div className="feature-list">
            <article>
              <h3>Animated experience</h3>
              <p>Fade-in sections and smooth scroll navigation for a professional browsing experience.</p>
            </article>
            <article>
              <h3>Responsive design</h3>
              <p>Hamburger menu and layout adjustments for mobile and tablet screens.</p>
            </article>
            <article>
              <h3>Clean interaction</h3>
              <p>Button hover effects, clear contact CTA, and polished content hierarchy.</p>
            </article>
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="section-heading">
            <span>Expertise</span>
            <h2>Tools, languages, and test practices I rely on.</h2>
          </div>
          <div className="skill-grid">
            <article>
              <h3>Testing & Automation</h3>
              <p>Selenium · Pytest · Postman · TestRail · JMeter · TestNG</p>
            </article>
            <article>
              <h3>Development</h3>
              <p>Java · JavaScript · Python · TypeScript · React.js · Node.js</p>
            </article>
            <article>
              <h3>Cloud & DevOps</h3>
              <p>Docker · Kubernetes · Jenkins · AWS · Azure · CI/CD Pipelines</p>
            </article>
            <article>
              <h3>Methodologies</h3>
              <p>Agile · STLC · SDLC · V-Model · RESTful API testing</p>
            </article>
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Real-world delivery across QA, development, and operations.</h2>
          </div>
          <div className="timeline">
            <article>
              <h3>QA Automation Engineer</h3>
              <p className="role-meta">CodeOn Africa · Remote · Sep 2024 – Present</p>
              <ul>
                <li>Designed automated web and API test suites with Selenium and Postman.</li>
                <li>Integrated automated regression into Jenkins CI/CD pipelines.</li>
                <li>Configured Docker containers for reliable test environments.</li>
              </ul>
            </article>
            <article>
              <h3>Software Engineer</h3>
              <p className="role-meta">Smoothtel Data Solutions · Nairobi · Feb 2024 – Aug 2024</p>
              <ul>
                <li>Executed API and UI validation during product releases.</li>
                <li>Collaborated with QA and DevOps to improve deployment quality.</li>
                <li>Supported REST API development and maintained 99.9% uptime.</li>
              </ul>
            </article>
            <article>
              <h3>Data Analyst</h3>
              <p className="role-meta">Cloudfactory · Remote · Feb 2021 – Dec 2022</p>
              <ul>
                <li>Automated report workflows and quality checks for client analytics.</li>
                <li>Reviewed large datasets to ensure accuracy and consistency.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Automation work built for reliability and measurable impact.</h2>
          </div>
          <div className="project-grid">
            <article>
              <h3>Automated Web Testing Framework</h3>
              <p>
                Created a Selenium + Pytest framework to automate regression tests for a responsive web application.
              </p>
            </article>
            <article>
              <h3>API Test Suite</h3>
              <p>
                Developed Postman collections and Jenkins jobs to validate APIs continuously and simplify release validation.
              </p>
            </article>
            <article>
              <h3>Load Testing for Migration</h3>
              <p>
                Executed JMeter scenarios to verify performance and capacity during large-scale data migration events.
              </p>
            </article>
          </div>
        </section>

        <section className="section-block" id="education">
          <div className="section-heading">
            <span>Education</span>
            <h2>Formal credentials and technical development.</h2>
          </div>
          <div className="education-grid">
            <article>
              <h3>B.Sc. Information Technology</h3>
              <p>Taita Taveta University · 2014 – 2018</p>
            </article>
            <article>
              <h3>Software Engineering</h3>
              <p>Moringa School · 2023 – 2024</p>
            </article>
            <article>
              <h3>Cyber Security Training</h3>
              <p>Cisco Academy · 2025 – Present</p>
            </article>
          </div>
        </section>

        <section className="section-block" id="certifications">
          <div className="section-heading">
            <span>Certifications</span>
            <h2>Verified expertise in testing and automation.</h2>
          </div>
          <div className="certifications-list">
            <span>Jenkins Fundamentals – CI/CD</span>
            <span>Postman API Testing Certification</span>
            <span>JMeter Performance Testing Basics</span>
          </div>
        </section>

        <section className="section-block" id="references">
          <div className="section-heading">
            <span>References</span>
            <h2>Trusted mentors and leaders who can speak to delivery and quality.</h2>
          </div>
          <div className="reference-grid">
            <article>
              <h3>Technical Mentor</h3>
              <p>Solomon Kitonyi</p>
              <p>Mentor at Moringa School, supporting technical delivery and automation best practices.</p>
            </article>
            <article>
              <h3>HOD Mathematics and Informatics</h3>
              <p>Skatoto</p>
              <p>Provided guidance on academic rigour, IT systems training, and professional workflows.</p>
            </article>
          </div>
        </section>

        <section className="section-block" id="testimonials">
          <div className="section-heading">
            <span>Testimonials</span>
            <h2>Feedback from people who have seen the impact firsthand.</h2>
          </div>
          <div className="testimonial-grid">
            <article>
              <p>
                "Markswell brings structure and reliability to every automation project. His work reduced regression cycles and improved release confidence."
              </p>
              <span>Software Delivery Lead</span>
            </article>
            <article>
              <p>
                "His hands-on approach with Jenkins and JMeter brought measurable improvements in pipeline quality and performance validation."
              </p>
              <span>QA Manager</span>
            </article>
          </div>
        </section>

        <section className="section-block" id="contact">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Ready to support your next quality-driven project.</h2>
          </div>
          <div className="contact-grid">
            <article>
              <h3>Phone</h3>
              <p>+254 798 840 098</p>
            </article>
            <article>
              <h3>Email</h3>
              <p>osoromarkswell80@gmail.com</p>
            </article>
            <article>
              <h3>Location</h3>
              <p>Kenya</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <p>QA Automation Engineer · Software Quality Assurance · Test Automation</p>
      </footer>
    </div>
  );
}

export default App;