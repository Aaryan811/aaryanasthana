import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="container my-5" id="projects">
      <h2
        className="font-weight-bold"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        projects
      </h2>
      <div className="mt-4">
        <h5
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1.2rem",
          }}
        >
          sample title
        </h5>
        <p
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "0.9rem",
          }}
        >
          sample text.
        </p>
      </div>
      <div className="mt-4">
        <h5
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1.2rem",
          }}
        >
          sample title
        </h5>
        <p
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "0.9rem",
          }}
        >
          sample text.
        </p>
      </div>
      <div className="mt-4">
        <h5
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1.2rem",
          }}
        >
          sample title
        </h5>
        <p
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "0.9rem",
          }}
        >
          sample text.
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Projects;
