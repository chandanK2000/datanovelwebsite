import React from 'react';
import './AgenticBeneficial.css';
import benefitImg1 from '../../../../assets/images/agenticAi/agenticbenfit1.png';
import benefitImg2 from '../../../../assets/images/agenticAi/agenticbenfit2.png';
import benefitImg3 from '../../../../assets/images/agenticAi/agenticbenfit3.png';
import benefitImg4 from '../../../../assets/images/agenticAi/agenticbenfit4.png';
import benefitImg5 from '../../../../assets/images/agenticAi/agenticbenfit5.png';
import benefitImg6 from '../../../../assets/images/agenticAi/agenticbenfit6.png';

const benefits = [
  {
    img: benefitImg1,
    title: "Operational Efficiency",
    desc: "Enterprise AI Agents can monitor and optimize business processes 24/7, identifying bottlenecks and implementing solutions without constant oversight."
  },
  {
    img: benefitImg2,
    title: "Data-Driven Decision Making",
    desc: "Leverage the ability of AI agents to analyze vast datasets and extract actionable insights that might otherwise remain hidden."
  },
  {
    img: benefitImg3,
    title: "Resource Optimization",
    desc: "Allocate human talent to high-value creative and strategic work while Agentic AI can handle routine tasks and complex computational challenges."
  },
  {
    img: benefitImg4,
    title: "Scalability",
    desc: "Our AI Agents can scale their operations instantaneously to meet changing business demands without the limitations of human resources."
  },
  {
    img: benefitImg5,
    title: "Continuous Improvement",
    desc: "These systems constantly learn from interactions and outcomes, becoming increasingly effective at achieving your specific business objectives over time."
  },
  {
    img: benefitImg6,
    title: "Competitive Advantage",
    desc: "Early adopters of Artificial Intelligence are establishing significant efficiency and innovation advantages that late-moving competitors will struggle to overcome."
  }
];

const AgenticBeneficial = () => {
  return (
    <div className="agentic-benefit-section p-4">
      <h2 className="text-center mb-4">How Beneficial Agentic AI</h2>
      <div className="row g-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="benefit-card">
              <img src={benefit.img} alt={benefit.title} className="benefit-img mb-3 " />
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenticBeneficial;
