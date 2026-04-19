import React from 'react';
import { projects } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <div className="section-wrapper" style={{ paddingTop: 0 }}>
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>
        <div className="projects__grid">
          {projects.map((proj) => (
            <div key={proj.num} className="proj-card">
              <div className="proj-card__top">
                <span className="proj-num">{proj.num} / {proj.category}</span>
                <svg className="proj-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.description}</p>

              <div className="proj-metrics">
                {proj.metrics.map((m) => (
                  <div key={m.label} className="proj-metric">
                    <span className="proj-metric__val">{m.value}</span>
                    <span className="proj-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`tag${tag.variant ? ` tag--${tag.variant}` : ''}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
