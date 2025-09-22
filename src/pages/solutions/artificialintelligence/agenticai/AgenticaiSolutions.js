import React from 'react';
import './AgenticaiSolutions.css';

const steps = [
  "Define\nYour\nAI Goals",
  "Quality\nData\nPreparation",
  "Assign A\nTeam of\nAI Experts",
  "Custom\nAI Agent\nDevelopment",
  "Agent\nDeployment\nand Monitoring"
];

const AgenticaiSolutions = () => {
  return (
    <div className="agenticai-solution-section">
      <h2>Our Agentic AI Solutions</h2>
      <div className="solution-flow">
        {steps.map((step, index) => (
          <div key={index} className="solution-block">
            <span className="solution-text">{step}</span>
            {index !== steps.length - 1 && <span className="solution-connector">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenticaiSolutions;
