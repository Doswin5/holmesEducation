import React from 'react'
import { opportunities } from '../constants'
import { arrow } from '../assets'

const Opportunity = () => {
  return (
    <div className='flex flex-col text-onSecondary items-center'>
      <h3 className="font-bold">Opportunity</h3>
      <p className='text-center font-normal w-[80%] mt-[12px] mb-[30px]'>
        A life lived around one’s truth is meaningful and satisfying. A Holmes education offers the opportunity - the place, time, academics and environment - to help you find your unique talents and passions.
      </p>
      <button className='bg-primary text-onPrimary'>Request More Information</button>
      <div className="flex justify-center gap-x-[40px] gap-y-[60px] mt-[90px] flex-wrap w-full">
        { 
          opportunities.map(opportunity => (
            <div className="flex flex-col">
              <img 
                src={opportunity.opportunityImage} alt="" 
                className='w-[350px] h-[335px]'
              />
              <div className='flex items-center gap-[8px] mt-[16px]'>
                <h5>{opportunity.opportunityName}</h5>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Opportunity