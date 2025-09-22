import React from 'react';
import './NlpSolutions.css';
import arrowicon from '../../../../assets/images/cloud/arrowiconscloud.png';

const solutionsData = [
    {
        title: "Text Classification & Sentiment Analysis",
        description: "Detect intent, tone, and sentiment in customer feedback, reviews, and social media.",
    },
    {
        title: "Chatbots & Virtual Assistants",
        description: "Conversational AI for customer support, sales, and HR automation.",
    },
    {
        title: "Named Entity Recognition (NER)",
        description: "Extract meaningful data like names, dates, locations, or medical terms from documents.",
    },
    {
        title: "Machine Translation",
        description: "Break language barriers with accurate multilingual translation systems.",
    },
    {
        title: "Speech-to-Text & Voice Interfaces",
        description: "Enable smart voice-driven apps with accurate transcription and recognition.",
    },
    {
        title: "Document Processing & Summarization",
        description: "Automate reading, structuring, and summarizing large volumes of data.",
    }
];

const NlpSolutions = () => {
    return (
        <div className="nlp-solutions-section py-4">
            <h2 className="text-center mb-3">Our NLP Solutions</h2>
        
            <div className="row g-4 py-3">
                {solutionsData.map((solution, index) => (
                    <div
                        key={index}
                        className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
                    >
                        <div className={`solution-card border p-3 shadow-sm rounded w-100 card-bg-${(index % 6) + 1}`}>
                            <h4>{solution.title}</h4>
                            <p>{solution.description}</p>
                            <div className="arrowicon">
                                <img src={arrowicon} alt="arrowicon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NlpSolutions;
