import React, { useEffect, useState } from 'react';
import { personal, stats } from '../data';
import './Hero.css';

const terminalLines = [
  { type: 'cmd',  text: '$ pytest --html=report.html' },
  { type: 'dim',  text: 'collecting tests ...' },
  { type: 'info', text: 'collected 247 items' },
  { type: 'blank' },
  { type: 'pass', text: 'PASSED  tests/test_login.py' },
  { type: 'pass', text: 'PASSED  tests/test_api.py' },
  { type: 'pass', text: 'PASSED  tests/test_checkout.py' },
  { type: 'warn', text: 'WARN    tests/test_perf.py::load' },
  { type: 'pass', text: 'PASSED  tests/test_regression.py' },
  { type: 'blank' },
  { type: 'dim',  text: '═══════════════════════════════' },
  { type: 'result', parts: [{ t: 'pass', v: '246 passed' }, { t: 'text', v: ', ' }, { t: 'warn', v: '1 warning' }, { t: 'text', v: ' in ' }, { t: 'blue', v: '12.4s' }] },
  { type: 'blank' },
  { type: 'cmd',  text: '$ newman run api-suite.json' },
  { type: 'dim',  text: 'Running API Test Suite...' },
  { type: 'pass', text: '✓  POST /api/auth     200 OK' },
  { type: 'pass', text: '✓  GET  /api/users    200 OK' },
  { type: 'pass', text: '✓  PUT  /api/data     204 OK' },
  { type: 'pass', text: '✓  DEL  /api/session  200 OK' },
  { type: 'blank' },
  { type: 'success', text: 'All tests passed — build ready 🚀' },
];

function TerminalLine({ line }) {
  if (line.type === 'blank') return <div className="term-line" />;
  if (line.type === 'result') {
    return (
      <div className="term-line">
        {line.parts.map((p, i) => (
          <span key={i} className={`t-${p.t}`}>{p.v}</span>
        ))}
      </div>
    );
  }
  return (
    <div className={`term-line term-line--${line.type}`}>
      {line.text}
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const delay = terminalLines[visibleLines]?.type === 'blank' ? 80 : 120;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section id="about" className="hero">
      <div className="hero__content">
        <div className="hero__prefix fade-in">
          <span className="hero__dollar">$</span> markswell --role qa-engineer{' '}
          <span className="hero__cursor">█</span>
        </div>

        <h1 className="hero__name fade-in">
          Markswell<br />
          <span className="hero__name-accent">Ogutu.</span>
        </h1>

        <p className="hero__role fade-in">
          {personal.role}
          {personal.roleExtra.map((r) => (
            <React.Fragment key={r}>
              <span className="hero__pipe">|</span>{r}
            </React.Fragment>
          ))}
        </p>

        <p className="hero__desc fade-in">{personal.summary}</p>

        <div className="hero__cta fade-in">
          <a href="#contact" className="btn btn--primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get In Touch
          </a>
          <a href="#projects" className="btn btn--outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            View Projects
          </a>
        </div>

        <div className="hero__stats fade-in">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal window */}
      <div className="hero__terminal">
        <div className="term-bar">
          <div className="term-dots">
            <span className="term-dot term-dot--red" />
            <span className="term-dot term-dot--amber" />
            <span className="term-dot term-dot--green" />
          </div>
          <span className="term-title">qa_runner.sh</span>
        </div>
        <div className="term-body">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <TerminalLine key={i} line={line} />
          ))}
          {visibleLines < terminalLines.length && (
            <span className="hero__cursor">█</span>
          )}
        </div>
      </div>
    </section>
  );
}
