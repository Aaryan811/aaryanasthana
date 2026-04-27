import React from "react";
import "./GeometricNeuralNetwork.css";

const GeometricNeuralNetwork: React.FC = () => {
  const nodeStroke = "#e74c3c";
  const lineStroke = "rgba(231, 76, 60, 0.3)";
  const outputFill = "#e74c3c";

  return (
    <svg
      id="geometric-neural-network"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Input Layer */}
      <circle cx="50" cy="100" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />
      <circle cx="50" cy="200" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />
      <circle cx="50" cy="300" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />

      {/* Hidden Layer */}
      <circle cx="200" cy="50"  r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />
      <circle cx="200" cy="150" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />
      <circle cx="200" cy="250" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />
      <circle cx="200" cy="350" r="20" stroke={nodeStroke} strokeWidth="1.5" className="nn-node" />

      {/* Connections: input → hidden */}
      {[100, 200, 300].flatMap((y) =>
        [50, 150, 250, 350].map((hy) => (
          <line key={`${y}-${hy}`} x1="50" y1={y} x2="200" y2={hy} stroke={lineStroke} strokeWidth="1" />
        ))
      )}

      {/* Connections: hidden → output */}
      {[50, 150, 250, 350].flatMap((hy) =>
        [150, 250].map((oy) => (
          <line key={`h${hy}-o${oy}`} x1="200" y1={hy} x2="330" y2={oy} stroke={lineStroke} strokeWidth="1" />
        ))
      )}

      {/* Output node — GitHub */}
      <a href="https://github.com/Aaryan811" target="_blank" rel="noreferrer">
        <circle cx="350" cy="150" r="20" fill={outputFill} />
        {/* GitHub icon — 24×24 path scaled and centered inside the circle */}
        <g transform="translate(330, 130) scale(1.667)">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
            fill="white"
          />
        </g>
      </a>

      {/* Output node — LinkedIn */}
      <a href="https://linkedin.com/in/aaryan-asthana" target="_blank" rel="noreferrer">
        <circle cx="350" cy="250" r="20" fill={outputFill} />
        {/* LinkedIn icon — 24×24 path scaled and centered inside the circle */}
        <g transform="translate(330, 230) scale(1.667)">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="white"
          />
        </g>
      </a>
    </svg>
  );
};

export default GeometricNeuralNetwork;
