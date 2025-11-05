import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { CoinContext } from '../Context/CoinContext'
import { Settings, User, Bell, Shield, LogOut, Moon, Sun } from 'lucide-react'
import { UserContext } from '../Context/UserContext'

const Navbar = () => {
  const {currency,setCurrency}=useContext(CoinContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const {authuser}=useContext(UserContext)
  const handleCurrencyChange=(e)=>{
    switch(e.target.value){
      case "usd":{
         setCurrency({
          name:"usd",
          Symbol:"$"
        })
        break;
      }
      case "eur":{
         setCurrency({
          name:"eur",
          Symbol:"€"  
        })
        break;
      }
      case "inr":{
         setCurrency({
          name:"inr",
          Symbol:"₹"
        })
        break;
      }
      default:{
         setCurrency({
          name:"usd",
          Symbol:"$"
        })
      }
    }
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsSettingsOpen(false)
  }

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const closeSettings = () => {
    setIsSettingsOpen(false)
  }

  return (
    <div className='relative w-full'>
      <div className='flex justify-between items-center border-b border-white/10 shadow-xl text-[#ddd] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 mx-2 sm:mx-4 rounded-t-lg bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm'>
        
        {/* Logo Section */}
        <Link to="/" className='flex-shrink-0 hover:scale-105 transition-transform duration-200 z-20'>
          <img className='w-28 sm:w-32 lg:w-40 brightness-0 invert' src={logo} alt="Logo" />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex gap-8 xl:gap-12 cursor-pointer text-base font-medium font-outfit'>
            <Link to='/'> 
              <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
                Home
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
              </li>
            </Link>
            <Link to='/features'>
              <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
                Features
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
              </li>
            </Link >
          <Link to='/portfolio'>  <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
              Portfolio
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
            </li></Link>
            <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
              Blog
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
            </li>
            <Link to='/Aboutus'>
              <li className='text-white hover:text-blue-300 hover:scale-105 transition-all duration-300 relative group'>
                About us
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300'></span>
              </li>
            </Link>
          </ul>
        </div>
        
        {/* Right Section - Currency, Settings & Sign Up */}
        <div className='hidden sm:flex gap-3 lg:gap-4 items-center flex-shrink-0'>
          {/* Currency Selector */}
          <select 
            onChange={handleCurrencyChange} 
            className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg'
            style={{
              colorScheme: 'dark'
            }}
          >
            <option value="usd" className='bg-gray-800 text-white'>USD</option>
            <option value="inr" className='bg-gray-800 text-white'>INR</option>
            <option value="eur" className='bg-gray-800 text-white'>EUR</option>
          </select>

          {/* Settings Icon with Dropdown */}
          <div className='relative'>
            <button 
              onClick={toggleSettings}
              className='p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg'
            >
              <Settings className='w-5 h-5 text-white' />
            </button>

            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <>
                <div 
                  className='fixed inset-0 z-30' 
                  onClick={closeSettings}
                ></div>
                <div className='absolute right-0 mt-2 w-64 bg-[#1a0b2e]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-40 overflow-hidden'>
                  {/* Profile Section */}
                  <div className='px-4 py-3 border-b border-white/10'>
                    <p className='text-sm text-white font-semibold'>Account Settings</p>
                    <p className='text-xs text-gray-400'>Manage your preferences</p>
                  </div>

                  {/* Menu Items */}
                  <div className='py-2'>
                    <button className='w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left'>
                      <User className='w-4 h-4 text-blue-400' />
                      <span className='text-sm text-white'>Language</span>
                    </button>

                  

                    <button 
                      onClick={() => setDarkMode(!darkMode)}
                      className='w-full px-4 py-3 flex items-center justify-between hover:bg-white/10 transition-colors text-left'
                    >
                      <div className='flex items-center gap-3'>
                        {darkMode ? <Moon className='w-4 h-4 text-indigo-400' /> : <Sun className='w-4 h-4 text-yellow-400' />}
                        <span className='text-sm text-white'>Dark Mode</span>
                      </div>
                      <div className={`w-10 h-5 rounded-full transition-colors ${darkMode ? 'bg-blue-500' : 'bg-gray-600'} relative`}>
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                      </div>
                    </button>

                    <button className='w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left'>
                      <Shield className='w-4 h-4 text-green-400' />
                      <span className='text-sm text-white'>Privacy & Security</span>
                    </button>
                  </div>

                  {/* Logout */}
                  <div className='border-t border-white/10 py-2'>
                   <Link to={'/signup'}>
                    <button className='w-full px-4 py-3 flex items-center gap-3 hover:bg-red-500/20 transition-colors text-left'>
                      <LogOut className='w-4 h-4 text-red-400' />
                      <span className='text-sm text-red-400'>Logout</span>
                    </button></Link>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Sign Up Button */}
         {!authuser && (
  <Link to='/signup'> 
    <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base whitespace-nowrap'>
      Signup
      <img src={arrow_icon} alt="Arrow Icon" className='w-3 h-3 lg:w-4 lg:h-4 invert' />
    </button>
  </Link>
)}

        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='lg:hidden flex flex-col gap-1.5 z-20 p-2'
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] backdrop-blur-xl shadow-2xl z-40 transform transition-transform duration-300 ease-in-out border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full p-6 pt-20'>
          {/* Mobile Navigation Links */}
          <ul className='flex flex-col gap-6 font-medium font-outfit mb-8'>
            <Link to='/' onClick={closeMenu}> 
              <li className='text-white hover:text-blue-300 transition-all duration-300 text-lg'>
                Home
              </li>
            </Link>
            <Link to='/features' onClick={closeMenu}>
              <li className='text-white hover:text-blue-300 transition-all duration-300 text-lg'>
                Features
              </li>
            </Link>
            <li className='text-white hover:text-blue-300 transition-all duration-300 text-lg'>
              Pricing
            </li>
            <li className='text-white hover:text-blue-300 transition-all duration-300 text-lg'>
              Blog
            </li>
            <Link to='/Aboutus' onClick={closeMenu}>
              <li className='text-white hover:text-blue-300 transition-all duration-300 text-lg'>
                About us
              </li>
            </Link>
          </ul>

          {/* Mobile Settings Options */}
          <div className='flex flex-col gap-3 mb-8 pb-8 border-b border-white/10'>
            <p className='text-xs text-gray-400 uppercase tracking-wider mb-2'>Settings</p>
            
            <button className='flex items-center gap-3 text-white hover:text-blue-300 transition-colors text-sm'>
              <User className='w-4 h-4' />
              <span>Profile</span>
            </button>

            <button className='flex items-center gap-3 text-white hover:text-blue-300 transition-colors text-sm'>
              <Bell className='w-4 h-4' />
              <span>Notifications</span>
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className='flex items-center justify-between text-white hover:text-blue-300 transition-colors text-sm'
            >
              <div className='flex items-center gap-3'>
                {darkMode ? <Moon className='w-4 h-4' /> : <Sun className='w-4 h-4' />}
                <span>Dark Mode</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors ${darkMode ? 'bg-blue-500' : 'bg-gray-600'} relative`}>
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
              </div>
            </button>

            <button className='flex items-center gap-3 text-white hover:text-blue-300 transition-colors text-sm'>
              <Shield className='w-4 h-4' />
              <span>Privacy & Security</span>
            </button>
          </div>

          {/* Mobile Currency & Sign Up */}
          <div className='flex flex-col gap-4 mt-auto'>
            <select 
              onChange={handleCurrencyChange} 
              className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer'
              style={{
                colorScheme: 'dark'
              }}
            >
              <option value="usd" className='bg-gray-800 text-white'>USD</option>
              <option value="inr" className='bg-gray-800 text-white'>INR</option>
              <option value="eur" className='bg-gray-800 text-white'>EUR</option>
            </select>
            
            <Link to='/signup' onClick={closeMenu}> 
              <button className='w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
                Sign Up
                <img src={arrow_icon} alt="Arrow Icon" className='w-4 h-4 invert' />
              </button>
            </Link>

            <button className='w-full flex items-center justify-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm py-2'>
              <LogOut className='w-4 h-4' />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar