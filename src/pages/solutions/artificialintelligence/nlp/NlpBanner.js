import React from 'react';
import './NlpBanner.css';

const NlpBanner = () => {
  return (
    <section className='nlp-banner-section'>
      <div className='nlp-banner-content'>
        <h1 className='nlp-banner-title'>
          Unlock the Power of <br /> Language with NLP Solutions
        </h1>
        <p className='nlp-banner-text'>
          Transform text into actionable insights and improve decision-making.
        </p>
        <button className='nlp-banner-button'>Request a Demo</button>
      </div>
    </section>
  );
};

export default NlpBanner;
