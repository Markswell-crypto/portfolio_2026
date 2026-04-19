import React, { useState } from 'react';
import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => setExpanded(expanded === idx ? null : idx);

  return (
    <section id="experience" className="fade-in">
      <div className="section-wrapper" style={{ paddingTop: 0 }}>
        <div className="section-label">Work History</div>
        <h2 className="section-title">
          Professional <span className="accent">Experience</span>
        </h2>

        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className={`exp-dot${exp.current ? ' exp-dot--active' : ''}`} />

              <div className="exp-card" onClick={() => toggle(idx)}>
                <div className="exp-card__header">
                  <div className="exp-card__left">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-card__right">
                    {exp.current && <span className="exp-badge">Current</span>}
                    <svg
                      className={`exp-chevron${expanded === idx ? ' exp-chevron--open' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div className="exp-meta">
                  <span className="exp-date">{exp.period}</span>
                  <span className="exp-sep">·</span>
                  <span className="exp-location">{exp.location}</span>
                </div>

                <div className={`exp-bullets${expanded === idx ? ' exp-bullets--open' : ''}`}>
                  <ul className="exp-list">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
