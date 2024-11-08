import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container my-5" id="contact">
      <h2
        className="font-weight-bold"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        contact
      </h2>
      <p
        className="mt-4"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        if you want to get in touch, feel free to email me at gcs3hd [at]
        virginia [dot] edu.
      </p>
      <hr className="my-4" />
    </div>
  );
};

export default Contact;
