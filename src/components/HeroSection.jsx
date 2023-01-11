import React from 'react'
import { heroSectionImage } from '../assets'
import { heroStats } from '../constants'

const HeroSection = () => {
  return (
    <div className='font-montserrat pt-[130px]'>
      <img 
        src={heroSectionImage} 
        alt="hero section"
        className='h-ful'
      />
      <div className="flex sm:flex-row flex-col justify-center items-center gap-[24px] sm:gap-[80px] py-[40px] sm:py-[80px] text-primary">
        {
          heroStats.map(heroStat => (
            <div className="flex flex-col items-center">
              <h2 className="font-bold">{heroStat.stat}</h2>
              <h6 className="font-bold">{heroStat.statName}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HeroSection