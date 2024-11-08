import React from "react";

const About: React.FC = () => {
  return (
    <div className="container my-5" id="about">
      <hr className="my-4" />
      <h2
        className="font-weight-bold"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        about
      </h2>
      <p
        className="mt-4"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        hello! i am aaryan asthana, a student at UVA.
      </p>
      <p
        className="mt-4"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        right now, i am working on
      </p>
      <hr className="my-4" />
    </div>
  );
};

export default About;
