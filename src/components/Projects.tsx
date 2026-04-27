import React from "react";

interface Project {
  name: string;
  link: string;
  linkLabel: string;
  badge?: string;
  desc: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "VizOp",
    link: "https://github.com/Aaryan811/VizOp",
    linkLabel: "github ↗",
    desc: "Visualizes option premiums and Greeks over time. Exposes REST APIs via FastAPI; frontend and backend containerized for one-command local deployment.",
    tags: ["next.js", "fastapi", "docker"],
  },
  {
    name: "Aurai",
    link: "https://github.com/Aaryan811/Aurai",
    linkLabel: "github ↗",
    desc: "AI health companion that turns wearable data into conversational insights. Integrates Oura + Apple HealthKit, exposes JWT-authenticated REST APIs, and generates personalized video responses via Tavus. Built at HooHacks 2025.",
    tags: ["next.js", "django", "openai", "tavus", "oura", "healthkit", "heroku"],
  },
  {
    name: "Pitch",
    link: "https://github.com/Aaryan811",
    linkLabel: "private ↗",
    desc: "Cross-platform music social app. Weekly picks generate personalized daily playlists via a scheduled Sunday job; real-time feed via WebSockets, OAuth authentication, and Heroku deployment.",
    tags: ["react native", "django", "spotify api", "postgresql", "websockets", "oauth"],
  },
  {
    name: "Apex",
    link: "https://github.com/pensarai/apex",
    linkLabel: "github ↗",
    badge: "open source contributor",
    desc: "AI-powered penetration testing via autonomous agents — directly in your terminal. Contributing lightweight per-agent eval infrastructure (unit-level evals + scheduled multi-model regression tracking) to complement end-to-end Argus benchmarks.",
    tags: ["ai agents", "llmops", "evals", "python"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="section-wrapper" id="projects">
      <span className="section-label">projects</span>
      {projects.map((p) => (
        <div className="project-card" key={p.name}>
          <div className="project-header">
            <span className="project-name">{p.name}</span>
            {p.badge && <span className="tag tag-accent">{p.badge}</span>}
            <a
              href={p.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              {p.linkLabel}
            </a>
          </div>
          <p className="project-desc">{p.desc}</p>
          <div>
            {p.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
