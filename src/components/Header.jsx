import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 pt-24 p-20  flex items-center justify-end'>
      <button className='bg-black border-2 text-xl hover:bg-gray-800 hover:text-white px-4 py-2 rounded-full '>Hire me</button>
      <i className="ri-more-2-fill text-2xl ml-3 "></i>
    </div>
  )
}

export default Header
