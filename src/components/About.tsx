import React from "react";

const skills = [
  "python", "typescript", "java", "c/c++",
  "react", "next.js", "react native", "fastapi", "flask", "django",
  "pytorch", "tensorflow", "langfuse", "litellm",
  "docker", "terraform", "aws", "postgresql", "redis",
];

const About: React.FC = () => {
  return (
    <div className="section-wrapper" id="about">
      <span className="section-label">about</span>
      <p className="body-text">
        hey, i'm aaryan — a cs student at uva (gpa: 3.8) with minors in data science and
        applied mathematics, graduating may 2026. i care about the intersection of machine
        learning and production engineering: building systems that are actually useful and
        actually work at scale.
      </p>
      <p className="body-text">
        right now i'm in san francisco interning at{" "}
        <a href="https://tempus.com" target="_blank" rel="noreferrer">tempus insights</a>
        {" "}on llmops — eval infrastructure, structured llm pipelines, and cloud deployments
        on aws. i also contribute to{" "}
        <a href="https://github.com/pensarai/apex" target="_blank" rel="noreferrer">apex</a>
        , an open-source ai-powered penetration testing tool. outside of tech, i play
        pickleball on uva's club team and explore blockchain / defi.
      </p>
      <div className="skills-row">
        {skills.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </div>
  );
};

export default About;
