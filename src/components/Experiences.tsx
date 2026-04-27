import React from "react";

interface Experience {
  company: string;
  role: string;
  date: string;
  current?: boolean;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Tempus Insights",
    current: true,
    role: "Software Engineer Intern — LLMOps",
    date: "May 2025 – Present · San Francisco, CA",
    bullets: [
      "Engineered an LLM eval suite scoring 10K+ model responses with Langfuse tracing; cut evaluation cycles from 3 days to 3 hours across multi-dataset experiments.",
      "Designed an automated logo-slide workflow with GPT-powered domain discovery and two-tier S3 caching; integrated into React UI, reducing deck prep from 1 hour to 2 minutes.",
      "Migrated annotations from Excel to PostgreSQL via Alembic + FastAPI batch endpoints; achieved 4× faster queries with integrity enforced via deferred constraints.",
      "Deployed ECS, RDS, Redis, and Langfuse with Terraform; CI/CD via GitHub Actions; dev–prod parity with Docker Compose.",
      "Integrated LiteLLM + Instructor + Pydantic for structured outputs across Vertex AI, OpenAI, and Anthropic.",
    ],
  },
  {
    company: "UVA Spin Physics Lab",
    role: "Machine Learning Research Assistant",
    date: "Sep 2024 – Feb 2025 · Charlottesville, VA",
    bullets: [
      "Developed deep neural networks and symbolic regression models to extract Compton Form Factors from particle accelerator scattering data, probing the proton's 3D internal structure.",
      "Designed replica-based Monte Carlo augmentation to propagate experimental uncertainties, boosting predictive accuracy by 20% and improving error bar coverage of true CFF values.",
      "Built reproducible training pipelines (TensorFlow, NumPy, Pandas) and ran large-scale experiments on UVA's HPC cluster via SLURM.",
    ],
  },
  {
    company: "RTS Labs",
    role: "Software Engineer Intern",
    date: "Jun 2024 – Aug 2024 · Innsbrook, VA",
    bullets: [
      "Shipped a full-stack ad builder (Next.js / TypeScript; Flask REST APIs) that automated weekly marketing mailers, reducing client graphic-design workflow time by 40%.",
      "Prototyped a cGAN-based layout automation system and integrated OpenAI for content generation.",
      "Containerized local dev and configured CI/CD with GitHub Actions.",
    ],
  },
];

const Experiences: React.FC = () => {
  return (
    <div className="section-wrapper" id="experience">
      <span className="section-label">experience</span>
      {experiences.map((exp) => (
        <div className="exp-item" key={exp.company}>
          <p className="exp-company">
            {exp.company}
            {exp.current && <span className="live-dot" title="currently here" />}
          </p>
          <p className="exp-role">{exp.role}</p>
          <p className="exp-date">{exp.date}</p>
          <ul style={{ paddingLeft: "16px", listStyle: "none" }}>
            {exp.bullets.map((b, i) => (
              <li key={i} className="exp-desc" style={{ marginBottom: "6px", paddingLeft: "0" }}>
                <span style={{ color: "var(--accent)", marginRight: "8px" }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
