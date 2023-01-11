import React from 'react'
import { educationIcon1, educationIcon2, educationIcon3, educationIcon4, dash, whiteDash } from '../assets'
// import { educationItems } from '../constants'

const Education = () => {
  return (
    <div className='text-onSecondary my-[90px]'>
      <h6 className='font-bold text-primary'>Practice Advice</h6>
      <h3 className='font-bold'>Get Quality Education</h3>
      <h6 className='text-[#737373] sm:w-[35%] w-[100%]'>
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
      </h6>
      <div className="flex sm:flex-row flex-col mt-[72px] sm:justify-between items-center gap-[40px]">
        <div className="flex flex-col p-[40px] bg-white w-[245px] sm:mb-[50px]">
          <img src={educationIcon1} alt="" className='w-[50px] h-[50px]' />
          <h6 className='font-bold my-[16px]'>
            Training Courses
          </h6>
          <img src={dash} alt="dash" className='w-[50px]' />
          <h6 className='font-normal text-[#737373] mt-[24px]'>
            The gradual accumulation of information about 
          </h6>
        </div>
        <div className="flex flex-col p-[40px] bg-white w-[245px] sm:mt-[50px]">
          <img src={educationIcon2} alt="" className='w-[50px] h-[50px]' />
          <h6 className='font-bold my-[16px]'>
            Expert Instruction
          </h6>
          <img src={dash} alt="dash" className='w-[50px]' />
          <h6 className='font-normal text-[#737373] mt-[24px]'>
            The gradual accumulation of information about 
          </h6>
        </div>
        <div className="flex flex-col p-[40px] bg-primary text-white w-[245px] sm:mb-[50px]">
          <img src={educationIcon3} alt="" className='w-[50px] h-[50px]' />
          <h6 className='font-bold my-[16px]'>
            Book Library
          </h6>
          <img src={whiteDash} alt="dash" className='w-[50px]' />
          <h6 className='font-normal text-white mt-[24px]'>
            The gradual accumulation of information about 
          </h6>
        </div>
        <div className="flex flex-col p-[40px] bg-white w-[245px] sm:mt-[50px]">
          <img src={educationIcon4} alt="" className='w-[50px] h-[50px]' />
          <h6 className='font-bold my-[16px]'>
            Lifetime Access
          </h6>
          <img src={dash} alt="dash" className='w-[50px]' />
          <h6 className='font-normal text-[#737373] mt-[24px]'>
            The gradual accumulation of information about 
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Education