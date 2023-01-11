import React from 'react'
import { successImage } from '../assets'

const Success = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center justify-between gap-[40px] my-[100px]'>
      <img src={successImage} alt="" />
      <div>
        <h1 className="font-medium">
          Set Yourself Up for Success
        </h1>
        <h5 className="font-normal mt-[24px] mb-[40px] w-[90%]">
          Holmes is a valuable option regardless
          of your family’s incomes, and a
          promising path to making a difference.
        </h5>
        <button className='bg-primary text-white'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Success