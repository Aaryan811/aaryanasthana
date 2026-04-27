import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="section-wrapper" id="contact">
      <span className="section-label">contact</span>
      <div className="contact-row">
        <div className="contact-item">
          <span className="contact-label">email</span>
          <a href="mailto:aaryanasthana811@gmail.com">aaryanasthana811@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">github</span>
          <a href="https://github.com/Aaryan811" target="_blank" rel="noreferrer">
            Aaryan811
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">linkedin</span>
          <a href="https://linkedin.com/in/aaryan-asthana" target="_blank" rel="noreferrer">
            aaryan-asthana
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
