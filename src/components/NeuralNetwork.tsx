import React from "react";
import "./GeometricNeuralNetwork.css";
import goodredgit from "./goodredgit.png";
import linkedinIcon from "./link.png"; // Assuming the LinkedIn icon is the second image

const GeometricNeuralNetwork: React.FC = () => {
  const iconRadius = 20; // Assuming the radius of the icon is 20

  return (
    <svg
      id="geometric-neural-network"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Input Layer */}
      <circle
        cx="50"
        cy="100"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />
      <circle
        cx="50"
        cy="200"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />
      <circle
        cx="50"
        cy="300"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />

      {/* Hidden Layer */}
      <circle
        cx="200"
        cy="50"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />
      <circle
        cx="200"
        cy="150"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />
      <circle
        cx="200"
        cy="250"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />
      <circle
        cx="200"
        cy="350"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />

      {/* Output Layer */}
      <circle
        cx="350"
        cy="150"
        r="20"
        stroke="#ff6666"
        strokeWidth="2"
        fill="#ff6666"
      />

      {/* Connections */}
      <line
        x1="50"
        y1="100"
        x2="200"
        y2="50"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="100"
        x2="200"
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="100"
        x2="200"
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="100"
        x2="200"
        y2="350"
        stroke="#ff6666"
        strokeWidth="2"
      />

      <line
        x1="50"
        y1="200"
        x2="200"
        y2="50"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="200"
        x2="200"
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="200"
        x2="200"
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="200"
        x2="200"
        y2="350"
        stroke="#ff6666"
        strokeWidth="2"
      />

      <line
        x1="50"
        y1="300"
        x2="200"
        y2="50"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="300"
        x2="200"
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="300"
        x2="200"
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="300"
        x2="200"
        y2="350"
        stroke="#ff6666"
        strokeWidth="2"
      />

      <line
        x1="200"
        y1="50"
        x2={350 - iconRadius}
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="50"
        x2={350 - iconRadius}
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="150"
        x2={350 - iconRadius}
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="150"
        x2={350 - iconRadius}
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="250"
        x2={350 - iconRadius}
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="250"
        x2={350 - iconRadius}
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="350"
        x2={350 - iconRadius}
        y2="150"
        stroke="#ff6666"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="350"
        x2={350 - iconRadius}
        y2="250"
        stroke="#ff6666"
        strokeWidth="2"
      />

      {/* Images as last circles */}
      <image x="330" y="130" href={goodredgit} height="40" width="40" />
      <image x="325" y="230" href={linkedinIcon} height="40" width="40" />
    </svg>
  );
};

export default GeometricNeuralNetwork;
