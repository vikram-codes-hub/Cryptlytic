import React from 'react'

const AboutUs = () => {
  return (
    <div className='min-h-screen  text-white font-outfit'>
      
      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='text-white'>About</span>{' '}
            <span className='bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent'>
              Us
            </span>
          </h1>
          
          <p className='text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto'>
            Welcome to the world's largest cryptocurrency marketplace.
            <br className='hidden md:block' />
            A passionate college project bringing crypto data to your fingertips.
          </p>
          
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        
        {/* Project Overview */}
        <div className='mb-20'>
          <div className='bg-[#2a1f4a]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-white'>
              Our Project
            </h2>
            
            <p className='text-base md:text-lg text-gray-300 leading-relaxed text-center mb-12 max-w-4xl mx-auto'>
              This cryptocurrency marketplace was developed as a college project to demonstrate our skills in modern web development. 
              We've created a comprehensive platform that provides real-time cryptocurrency data, market trends, and an intuitive 
              user experience for crypto enthusiasts and investors.
            </p>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              <div className='text-center p-6 md:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300'>
                <div className='w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-3xl'>📊</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-white'>Real-time Data</h3>
                <p className='text-gray-400 text-sm'>Live cryptocurrency prices and market information</p>
              </div>
              
              <div className='text-center p-6 md:p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300'>
                <div className='w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-3xl'>🔍</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-white'>Smart Search</h3>
                <p className='text-gray-400 text-sm'>Intuitive search functionality with live filtering</p>
              </div>
              
              <div className='text-center p-6 md:p-8 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1'>
                <div className='w-16 h-16 bg-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-3xl'>💱</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-white'>Multi-Currency</h3>
                <p className='text-gray-400 text-sm'>Support for USD, EUR, and INR currencies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='mb-20'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white'>
            Meet The Team
          </h2>
          
          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            
            {/* Team Member 1 */}
            <div className='bg-[#2a1f4a]/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold group-hover:scale-110 transition-transform duration-300'>
                  VS
                </div>
                
                <h3 className='text-2xl font-bold mb-2 text-white'>
                  Vikram Singh Gangwar
                </h3>
                
                <p className='text-[#60a5fa] font-semibold mb-4'>Full Stack Developer</p>
                
                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                  Passionate about creating beautiful and functional user interfaces. 
                  Specialized in React, modern CSS, and responsive design principles.
                </p>
                
                <div className='flex justify-center space-x-4'>
                  <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3b82f6] transition-colors cursor-pointer'>
                    <span className='text-lg'>🐙</span>
                  </div>
                  <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3b82f6] transition-colors cursor-pointer'>
                    <span className='text-lg'>💼</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className='bg-[#2a1f4a]/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold group-hover:scale-110 transition-transform duration-300'>
                  BP
                </div>
                
                <h3 className='text-2xl font-bold mb-2 text-white'>
                  Bhayam Puri
                </h3>
                
                <p className='text-[#a78bfa] font-semibold mb-4'>Frontend Developer</p>
                
                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                  Expert in API integration and data management. 
                  Focused on creating efficient backend solutions and seamless data flow.
                </p>
                
                <div className='flex justify-center space-x-4'>
                  <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-colors cursor-pointer'>
                    <span className='text-lg'>🐙</span>
                  </div>
                  <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-colors cursor-pointer'>
                    <span className='text-lg'>💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-white'>
            Technologies Used
          </h2>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
              { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-400 to-cyan-500' },
              { name: 'CoinGecko API', icon: '🪙', color: 'from-green-400 to-emerald-500' }
            ].map((tech, index) => (
              <div key={index} className='text-center p-6 bg-[#2a1f4a]/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300'>
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {tech.icon}
                </div>
                <h3 className='font-semibold text-white'>{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* College Project Badge */}
        <div className='text-center'>
          <div className='inline-block bg-[#2a1f4a]/40 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20'>
            <div className='flex items-center justify-center space-x-3'>
              <span className='text-3xl'>🎓</span>
              <div>
                <p className='text-white font-semibold text-lg'>College Project</p>
                <p className='text-gray-400 text-sm'>Built with ❤️ and passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs