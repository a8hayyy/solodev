import { useState, useEffect } from 'react'
import './App.css'

const BOOT_LINES = [
  '> initializing solodev.in...',
  '> loading modules... [OK]',
  '> compiling projects... [OK]',
  '> deploying creativity... [OK]',
  '> system ready.',
];

function App() {
  const [bootIndex, setBootIndex] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    if (bootIndex >= BOOT_LINES.length) {
      const timer = setTimeout(() => setBootDone(true), 500);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setBootIndex((i) => i + 1), 600);
    return () => clearTimeout(timer);
  }, [bootIndex]);

  return (
    <div className="container">
      {/* CRT scanline + vignette overlay */}
      <div className="crt-overlay" />
      <div className="scanlines" />

      {/* Animated grid background */}
      <div className="grid-bg" />

      <div className="content">
        {/* Terminal boot sequence */}
        <div className="terminal">
          {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
            <p key={i} className="terminal-line">{line}</p>
          ))}
          {bootIndex < BOOT_LINES.length && <span className="cursor">█</span>}
        </div>

        {/* Main content — fades in after boot */}
        <div className={`main-content ${bootDone ? 'visible' : ''}`}>
          <h1 className="title" data-text="solodev.in">solodev.in</h1>
          <p className="subtitle">Building digital things, one pixel at a time.</p>

          <div className="btn-row">
            <a
              href="mailto:acuber1728@gmail.com?subject=Hello from solodev.in"
              className="pixel-btn"
            >
              Get in Touch
            </a>
            <a href="https://github.com/a8hayyy" target="_blank" rel="noreferrer" className="pixel-btn alt">
              GitHub
            </a>
            <a href="https://1906.in/" target="_blank" rel="noreferrer" className="pixel-btn alt">
              /x/
            </a>
          </div>
        </div>
      </div>

      {/* Corner status text */}
      <div className="corner-bl">v1.0.0</div>
      <div className="corner-br">© {new Date().getFullYear()}</div>
    </div>
  );
}

export default App