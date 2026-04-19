import React, { useState } from 'react';
import { personal, references } from '../data';
import './Contact.css';

const contactItems = [
  {
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    label: personal.phone,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.21 2 2 0 012 .06h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    href: `mailto:${personal.email}`,
    label: personal.email,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: personal.linkedin,
    label: 'LinkedIn Profile',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green)">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: personal.github,
    label: 'GitHub Repository',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--green)">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
];

const quickFacts = [
  { label: 'Availability', value: 'Immediately', accent: true },
  { label: 'Work Mode', value: 'Remote / Hybrid / On-site' },
  { label: 'Experience', value: '6+ Years' },
  { label: 'Primary Stack', value: 'Python · Selenium · Jenkins' },
  { label: 'Location', value: 'Nairobi, Kenya 🇰🇪' },
];

export default function Contact() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrapper">
        <div className="section-label">Let's Connect</div>
        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>

        <div className="contact__grid">
          {/* Left col */}
          <div>
            <div className="contact__avail">
              <span className="contact__avail-dot" />
              Available for new opportunities
            </div>
            <p className="contact__intro">
              I'm actively looking for QA Automation Engineer roles where I can build robust
              testing frameworks, integrate CI/CD pipelines, and champion software quality. Let's talk.
            </p>

            <div className="contact__items">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-item"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-item__icon">{item.icon}</div>
                  <span className="contact-item__label">{item.label}</span>
                  {item.external && (
                    <svg className="contact-item__ext" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  )}
                </a>
              ))}

              {/* Copy email button */}
              <button
                className="contact-item contact-item--btn"
                onClick={() => handleCopy(personal.email, 'email')}
              >
                <div className="contact-item__icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </div>
                <span className="contact-item__label">
                  {copied === 'email' ? '✓ Email copied!' : 'Copy email address'}
                </span>
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="contact__right">
            <div className="quick-facts">
              <div className="quick-facts__title">// Quick Facts</div>
              {quickFacts.map((f) => (
                <div key={f.label} className="quick-facts__row">
                  <span className="quick-facts__label">{f.label}</span>
                  <span className={`quick-facts__value${f.accent ? ' quick-facts__value--accent' : ''}`}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="references">
              <div className="references__title">// References Available</div>
              {references.map((ref, idx) => (
                <div key={idx} className="ref-item">
                  <div className="ref-item__role">{ref.role}</div>
                  <div className="ref-item__name">{ref.name}{ref.org && ` · ${ref.org}`}</div>
                  <div className="ref-item__contact">
                    <a href={`mailto:${ref.email}`} className="ref-item__link">{ref.email}</a>
                    <span className="ref-item__sep">·</span>
                    <a href={`tel:${ref.phone.replace(/\s/g, '')}`} className="ref-item__link">{ref.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
