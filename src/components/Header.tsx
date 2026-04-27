import React from "react";
import { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggle }) => {
  return (
    <div className="hero-outer">
      <div className="hero">
        <h1 className="hero-name">
          AARYAN<br />ASTHANA<span className="hero-blink">_</span>
        </h1>
        <p className="hero-sub">software engineer &amp; ml enthusiast</p>
        <p className="hero-current">
          cs @ uva &nbsp;·&nbsp; currently{" "}
          <span>llmops intern @ tempus insights</span>
        </p>
        <nav className="hero-nav">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#writing">writing</a>
          <a href="#contact">contact</a>
          <button className="theme-toggle" onClick={onToggle} aria-label="toggle theme">
            {theme === "dark" ? "☀ light" : "☾ dark"}
          </button>
        </nav>
      </div>
      <span className="scroll-hint">scroll ↓</span>
    </div>
  );
};

export default Header;
