import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { holmesLogo, dropdown, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='fixed left-0 right-0 py-[16px] sm:py-[24px] sm:px-[100px] px-[16px] flex justify-between items-center bg-white'>
      <Link to='/'>
        <img 
          src={holmesLogo} 
          alt="holmes logo"
          className='w-[100px]'  
        />
      </Link>
      <div className="sm:flex hidden justify-end gap-[60px]">
        {
          navLinks.map((navLink, id) => (
            navLink.linkName === 'Study' ? <Link className='flex items-center gap-2 text-[#9C9B9B]'>{navLink.linkName} <img src={dropdown} alt="dropdown" /> </Link> : <Link>{navLink.linkName}</Link>
          ))
        }
      </div>


      <div className="flex sm:hidden items-center" >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] cursor-pointer object-cover'
          onClick={() => setToggle(prev => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center pt-6 px-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar`}
        >
          <ul
            className="list-none items-center flex flex-col gap-[24px] pb-[24px]"
          >
            {
              navLinks.map((navLink, id) => (
                navLink.linkName === 'Study' ? <Link className='flex items-center gap-2 text-[#9C9B9B]'>{navLink.linkName} <img src={dropdown} alt="dropdown" /> </Link> : <Link>{navLink.linkName}</Link>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar