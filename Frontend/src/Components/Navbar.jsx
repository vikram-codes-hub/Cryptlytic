import React from 'react'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b border-[#3c3c3c] shadow-xl text-[#ddd] px-8 py-6 mx-4 rounded-t-lg bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm'>
      
      {/* Logo Section */}
      <Link to="/" className='flex-shrink-0 hover:scale-105 transition-transform duration-200'>
        <img className='w-40 brightness-0 invert' src={logo} alt="Logo" />
      </Link>
      
      {/* Navigation Links */}
      <div className='flex-1 flex justify-center'>
        <ul className='flex gap-12 cursor-pointer text-base font-medium font-outfit'>
         <Link to='/'> <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
            Home
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
          </li></Link>
          <Link to='/features'><li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
            Features
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
          </li></Link>
          <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
            Pricing
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
          </li>
          <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
            Blog
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
          </li>
        </ul>
      </div>
      
      {/* Right Section - Currency & Sign Up */}
      <div className='flex gap-6 items-center flex-shrink-0'>
        
        {/* Currency Selector */}
        <select className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg'>
          <option value="USD" className='text-gray-800 bg-white'>USD</option>
          <option value="INR" className='text-gray-800 bg-white'>INR</option>
          <option value="EUR" className='text-gray-800 bg-white'>EUR</option>
        </select>
        
        {/* Sign Up Button */}
        <button className='flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-md hover:shadow-lg group border border-[#3b82f6]/20'>
          <span>Sign up</span>
          <img 
            src={arrow_icon} 
            alt="Arrow" 
            className='h-4 w-4 brightness-0 invert group-hover:translate-x-1 transition-transform duration-300' 
          />
        </button>
        
      </div>
    </div>
  )
}

export default Navbar