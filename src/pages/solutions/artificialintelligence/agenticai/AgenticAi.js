import React from 'react'
import AgenticAiFaq from './AgenticAiFaq';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import AgenticBanner from './AgenticBanner';
import AgenticBeneficial from './AgenticBeneficial';
import AgenticaiSolutions from './AgenticaiSolutions';
import DevelopmentProcess from './DevelopmentProcess';
import WhyChooseagenticai from './WhyChooseagenticai';
import HowAgenticAIWorks from './HowAgenticAIWorks';

const AgenticAi = () => {
  return (
    <div>
      <AgenticBanner/>
      <AgenticBeneficial/>
      <AgenticaiSolutions/>
      <DevelopmentProcess/>
      <WhyChooseagenticai/>
      <HowAgenticAIWorks/>
      <LatestBlogs/>
      <AgenticAiFaq/>
    </div>
  )
}

export default AgenticAi;