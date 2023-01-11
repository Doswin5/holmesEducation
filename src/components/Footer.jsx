import React from 'react'

const Footer = () => {
  return (
    <div className='sm:px-[100px] px-[16px] bg-white pt-[20px]'>
      <h5 className="font-normal">
        Holmes education group
      </h5>
      <div className="flex flex-col mt-[30px] mb-[80px] text-[#737373]">
        <h6 className="font-light">Ralph Allen Drive</h6>
        <h6 className="font-light">Warri</h6>
        <h6 className="font-light">Nigeria</h6>
        <h6 className="font-light">+2345959483838</h6>
        <h6 className="font-light">into@homleseducation.com</h6>
      </div>
      <div className="flex items-center gap-[24px] sm:gap-[50px]">
        <h6 className="font-normal">School polices</h6>
        <h6 className="font-normal">Privacy Policy</h6>
        <h6 className="font-normal">Map and Directions</h6>
        <h6 className="font-normal">Cookies</h6>
        <h6 className="font-normal">Accessibilty</h6>
        
      </div>
    </div>
  )
}

export default Footer