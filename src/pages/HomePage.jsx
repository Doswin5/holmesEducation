import React from 'react'
import { HeroSection, Opportunity, Education, Success } from '../components'

const HomePage = () => {
  return (
    <div className='sm:px-[100px] px-[16px]'>
      <HeroSection />
      <Opportunity />
      <Education />
      <Success />
    </div>
  )
}

export default HomePage