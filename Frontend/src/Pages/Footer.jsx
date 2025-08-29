import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 text-center py-6 text-white px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-amber-50 mt-12 sm:mt-16 md:mt-20 h-0.5'></div>
      <p className='text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
        Copyright © 2025, Cryptlytic - All rights Reserved
      </p>
    </div>
  )
}

export default Footer