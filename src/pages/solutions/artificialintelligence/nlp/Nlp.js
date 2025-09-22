import React from 'react'
import NlpFaq from './NlpFaq';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import NlpBanner from './NlpBanner';
import WhatisNlp from './WhatisNlp';
import NlpSolutions from './NlpSolutions';
import NlpBusinessBenefits from './NlpBusinessBenefits';
import WhyChooseNlp from './WhyChooseNlp';
import NlpCTA from './NlpCTA';

const Nlp = () => {
  return (
    <div>
      <NlpBanner/>
      <WhatisNlp/>
      <NlpSolutions/>
      <NlpBusinessBenefits/>
      <WhyChooseNlp/>
      <NlpCTA/>
      <LatestBlogs/>
      <NlpFaq />
    </div>
  )
}

export default Nlp;