import React from "react";

const Experiences: React.FC = () => {
  return (
    <div className="container my-5" id="experiences">
      <h2
        className="font-weight-bold"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        experiences
      </h2>
      <div className="mt-4">
        <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          software engineer intern @ RTS Labs
        </h4>
        <p
          className="text-muted"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          feb 2024 - present
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          sample.
        </p>
      </div>
      <div className="mt-4">
        <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          software engineer intern @ ithena
        </h4>
        <p
          className="text-muted"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          jan 2024 - present
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          sample.
        </p>
      </div>
      <div className="mt-4">
        <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          sample
        </h4>
        <p
          className="text-muted"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          may 2021 - present
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          sample.
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Experiences;
