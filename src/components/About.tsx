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
        hello! i am aaryan asthana, a student at UVA. I’m a software engineer who is passionate about the intersection of machine learning and full stack development. Previously, I interned as a developer for a tech consulting firm, RTS Labs, where I built an app to streamline ad generation. Outside of tech, 
        I’m an avid pickleball player on the UVA club team and have growing interests in blockchain and decentralized finance. 
      </p>
      <p
        className="mt-4"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        right now, i am working on a project to create an AI meeting facilitator that can take notes, summarize discussions, and provide insights. 
        super interested in working with startups and building cool projects, so feel free to reach out!
      </p>
      <hr className="my-4" />
    </div>
  );
};

export default About;
