import React from 'react';
import './NlpBusinessBenefits.css';
import checkmarkicon from '../../../../assets/images/agenticAi/checkmarkagenticai.png';

const benefitsData = [
  {
    title: "Improved Customer Experience",
    description: "Understand customer intent and sentiment to deliver personalized support and faster resolutions."
  },
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks like email sorting, document processing, and report generation."
  },
  {
    title: "Actionable Insights",
    description: "Extract valuable information from unstructured data such as reviews, chats, or social media."
  },
  {
    title: "Smarter Decision-Making",
    description: "Use AI-driven analysis of conversations and text to guide strategies and business growth."
  },
  {
    title: "Multilingual Reach",
    description: "Break language barriers with real-time translation and localization."
  },
  {
    title: "Cost Reduction",
    description: "Reduce dependency on manual work, freeing up resources for strategic initiatives."
  },
  {
    title: "Competitive Advantage",
    description: "Adopt cutting-edge AI technology to stay ahead in a data-driven market."
  }
];

const NlpBusinessBenefits = () => {
  return (
    <div className="nlp-benefits-section">
      <h2>Benefits of NLP for Your Business</h2>
      <p>Leverage NLP technology to transform text into actionable insights and drive growth.</p>
      <div className="benefits-grid">
        {benefitsData.map((item, index) => (
          <div className="benefits-card" key={index}>
            <div className="benefits-header">
              <img src={checkmarkicon} alt='check' className='benefits-icon'/>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NlpBusinessBenefits;
