import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="footer__prefix t-dim">// </span>
      Built with <span className="footer__heart">♥</span> by{' '}
      <span className="footer__name">Markswell Ogutu</span> · QA Automation Engineer ·{' '}
      <span className="footer__accent">Kenya</span> · {year}
    </footer>
  );
}
