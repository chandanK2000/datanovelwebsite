import React from 'react';
// import { AiOutlineCheckCircle } from 'react-icons/ai';
import './WhyChooseagenticai.css';
import checkmarkagenticai from '../../../../assets/images/agenticAi/checkmarkagenticai.png'

const chooseData = [
  {
    title: "Deep AI Expertise",
    description: "Proven experience in AI, LLMs, and multi-agent systems."
  },
  {
    title: "End-to-End Development",
    description: "From ideation to deployment, we handle discovery and implementation."
  },
  {
    title: "Custom-Built Agents",
    description: "Every solution is designed to fit your workflows, industry, and goals."
  },
  {
    title: "Reliability & Accuracy",
    description: "We leverage RAG and advanced validation to reduce AI errors and hallucinations."
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade data security and adherence to compliance standards."
  },
  {
    title: "Faster ROI",
    description: "Our agile development and reusable frameworks help you launch faster and scale seamlessly."
  },
  {
    title: "Global Delivery Model",
    description: "Experience serving clients across multiple geographies and industries."
  },
];

const WhyChooseagenticai = () => {
  return (
    <div className="whychoose-section">
      <h2>Why Choose DataNovel<br />for Agentic AI Development?</h2>
      <p>At DataNovel, we go beyond building AI agents—we create intelligent, autonomous systems tailored to your business.</p>
      <div className="choose-grid">
        {chooseData.map((item, index) => (
          <div className="choose-card" key={index}>
            <div className="choose-header">
                <img src={checkmarkagenticai} alt='agentic' className='choose-icon '/>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseagenticai;
