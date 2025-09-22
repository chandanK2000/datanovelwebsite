import React from 'react';
import './DevelopmentProcess.css';
import developmentprocess from '../../../../assets/images/agenticAi/developmentprocess.png';

const processData = [
  {
    title: "Template-agnostic and Highly Scalable AI Agents",
    description:
      "Our agentic AI implementation experts analyze the objectives of your AI journey and start transforming your ideas into innovation",
    img: developmentprocess
  },
  {
    title: "Built on the Most Cutting-edge Technology Stack",
    description:
      "Enterprises can capitalize on our highly scalable agentic AI strategy that is designed on the most advanced AI platform available",
    img: developmentprocess
  },
  {
    title: "Reduced Development and Deployment Time",
    description:
      "With our intuitive AI framework, businesses can launch customized LLM-powered AI agents in a very short time across organization",
    img: developmentprocess
  },
  {
    title: "Applying RAG for Enhancing AI Responses",
    description:
      "We use RAG (Retrieval-Augmented Generative), an advanced GenAI technique, to eliminate AI hallucination and improve AI accuracy",
    img: developmentprocess
  },
  {
    title: "Autonomous Decision-Making",
    description:
      "Our AI agents are designed to make decisions without constant human oversight by analyzing situations and taking actions in real-time",
    img: developmentprocess
  },
];

const DevelopmentProcess = () => {
  return (
    <div className="developmentProcess-section">
      <h2>Development Process</h2>
      <div className="process-grid">
        {processData.map((item, index) => (
          <div className="process-cards" key={index}>
            {item.img && <img src={item.img} alt={item.title} className="process-img" />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
