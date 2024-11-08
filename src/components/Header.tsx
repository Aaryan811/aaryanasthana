import React from "react";

const Header: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1
        className="display-1"
        style={{ fontFamily: "'Pixelify Sans', sans-serif" }}
      >
        AARYAN
      </h1>
      <nav className="mt-4">
        <a
          href="#about"
          className="text-dark text-decoration-none mx-2"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          about
        </a>
        <span className="mx-2">|</span>
        <a
          href="#experiences"
          className="text-dark text-decoration-none mx-2"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          experiences
        </a>
        <span className="mx-2">|</span>
        <a
          href="#projects"
          className="text-dark text-decoration-none mx-2"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          projects
        </a>
      </nav>
    </div>
  );
};

export default Header;
