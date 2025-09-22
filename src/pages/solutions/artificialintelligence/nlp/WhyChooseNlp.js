import React from 'react';
import './WhyChooseNlp.css';
import choosenlp1 from '../../../../assets/images/nlpimages/choosenlp1.png';
import choosenlp2 from '../../../../assets/images/nlpimages/choosenlp2.png';
import choosenlp3 from '../../../../assets/images/nlpimages/choosenlp3.png';
import choosenlp4 from '../../../../assets/images/nlpimages/choosenlp4.png';
import choosenlp5 from '../../../../assets/images/nlpimages/choosenlp5.png';

const chooseNlpData = [
  { title: "Proven expertise in /AI, LLMs, and deep/ learning models", icon: choosenlp1 },
  { title: "Custom NLP /pipelines tailored to/ your business / workflows", icon: choosenlp2 },
  { title: "Integration with/ chatbots, CRMs,/ ERPs, and enterprise /systems", icon: choosenlp3 },
  { title: "Focus on accuracy, /scalability, and /security", icon: choosenlp4 },
  { title: "Global experience /across diverse /industries", icon: choosenlp5 },
];

const WhyChooseNlp = () => {
  return (
    <div className="whychoose-nlp-section py-5">
      <h2 className="text-center mb-4">Why Choose DataNovel for NLP?</h2>
      <div className="container">
        <div className="row justify-content-center g-4">
          {chooseNlpData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-8 d-flex justify-content-center">
              <div className="nlp-card text-center p-4">
                <img src={item.icon} alt="icon" className="mb-3 nlp-card-icon" />
                <h5 className="nlp-card-title">
                  {item.title.split('/').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line.trim()}
                      <br />
                    </React.Fragment>
                  ))}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNlp;
