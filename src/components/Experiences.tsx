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
          May 2024 - Aug 2024
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          

At RTS Labs, I built a full-stack app that automated ad design, cutting creation time by 40%. When designers rejected our first template-based approach, I pivoted to AI-generated backgrounds to keep the process fast yet creative. I also worked on a cGAN model for automated design generation and built a Flask API to handle backend operations. It was a crash course in balancing automation with human creativity—and in making AI actually useful. 🚀
        </p>
      </div>
      <div className="mt-4">
        <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          Research Assistant @ Fermilab
        </h4>
        <p
          className="text-muted"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          jan 2024 - present
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        At UVA’s Spin Physics Lab, I work alongside Fermilab physicists and researchers, using machine learning to analyze particle accelerator data. I build and optimize deep neural networks to extract Compton form factors—basically, I help uncover the 3D structure of protons at the subatomic level!
        </p>
      </div>
      <div className="mt-4">
        <h4 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          DevOps Manager
        </h4>
        <p
          className="text-muted"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          Jan 2025 - present
        </p>
        <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        As the DevOps lead for our student project, I managed the CI/CD pipeline and streamlined our cloud deployment using Docker and Kubernetes. I helped our team set up automated workflows, making sure our development and deployment process was smooth, scalable, and didn’t break every time we pushed an update.
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Experiences;
