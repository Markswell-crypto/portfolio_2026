import React from 'react';
import { education, certifications } from '../data';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="fade-in">
      <div className="section-wrapper" style={{ paddingTop: 0 }}>
        <div className="edu__grid">

          {/* Education */}
          <div>
            <div className="section-label">Background</div>
            <h2 className="section-title" style={{ fontSize: '1.7rem', marginBottom: '1.5rem' }}>
              Education
            </h2>
            <div className="edu__list">
              {education.map((item, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-item__year">{item.year}</div>
                  <div className="edu-item__body">
                    <div className="edu-item__name">{item.institution}</div>
                    <div className="edu-item__degree">{item.degree}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="section-label">Credentials</div>
            <h2 className="section-title" style={{ fontSize: '1.7rem', marginBottom: '1.5rem' }}>
              Certifications
            </h2>
            <div className="cert__list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-card__icon" aria-hidden="true">
                    {cert.icon}
                  </div>
                  <div className="cert-card__body">
                    <div className="cert-card__name">{cert.name}</div>
                    <div className="cert-card__issuer">{cert.issuer}</div>
                  </div>
                  <svg className="cert-card__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
