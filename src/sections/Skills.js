import React from 'react';
import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="fade-in">
      <div className="section-wrapper">
        <div className="section-label">Skills &amp; Expertise</div>
        <h2 className="section-title">
          Technical <span className="accent">Arsenal</span>
        </h2>
        <div className="skills__grid">
          {skills.map((card) => (
            <div key={card.title} className="skill-card">
              <div className="skill-card__header">
                <div className="skill-card__icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="skill-card__title">{card.title}</h3>
              </div>
              <div className="skill-card__tags">
                {card.tags.map((tag) => (
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
