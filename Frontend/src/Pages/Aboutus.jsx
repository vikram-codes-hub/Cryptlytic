import React from 'react'

const AboutUs = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white font-outfit'>
      
      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center px-4 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            About Us
          </h1>
          
          <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
            A passionate college project bringing cryptocurrency data to your fingertips
          </p>
          
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 pb-20'>
        
        {/* Project Overview */}
        <div className='mb-20'>
          <div className='bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent'>
              Our Project
            </h2>
            
            <p className='text-lg text-gray-300 leading-relaxed text-center mb-8'>
              This cryptocurrency marketplace was developed as a college project to demonstrate our skills in modern web development. 
              We've created a comprehensive platform that provides real-time cryptocurrency data, market trends, and an intuitive 
              user experience for crypto enthusiasts and investors.
            </p>
            
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10'>
                <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📊</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Real-time Data</h3>
                <p className='text-gray-400 text-sm'>Live cryptocurrency prices and market information</p>
              </div>
              
              <div className='text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10'>
                <div className='w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🔍</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Smart Search</h3>
                <p className='text-gray-400 text-sm'>Intuitive search functionality with live filtering</p>
              </div>
              
              <div className='text-center p-6 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl border border-white/10'>
                <div className='w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💱</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Multi-Currency</h3>
                <p className='text-gray-400 text-sm'>Support for USD, EUR, and INR currencies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent'>
            Meet The Team
          </h2>
          
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            
            {/* Team Member 1 */}
            <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold group-hover:scale-110 transition-transform duration-300'>
                  VS
                </div>
                
                <h3 className='text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors'>
                  Vikram Singh Gangwar
                </h3>
                
                <p className='text-blue-300 font-semibold mb-4'>Frontend Developer</p>
                
                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                  Passionate about creating beautiful and functional user interfaces. 
                  Specialized in React, modern CSS, and responsive design principles.
                </p>
                
                <div className='flex justify-center space-x-4'>
                  <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer'>
                    <span className='text-sm'>🐙</span>
                  </div>
                  <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer'>
                    <span className='text-sm'>💼</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold group-hover:scale-110 transition-transform duration-300'>
                  BP
                </div>
                
                <h3 className='text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors'>
                  Bhayam Puri
                </h3>
                
                <p className='text-purple-300 font-semibold mb-4'>Backend Developer</p>
                
                <p className='text-gray-300 text-sm leading-relaxed mb-6'>
                  Expert in API integration and data management. 
                  Focused on creating efficient backend solutions and seamless data flow.
                </p>
                
                <div className='flex justify-center space-x-4'>
                  <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer'>
                    <span className='text-sm'>🐙</span>
                  </div>
                  <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors cursor-pointer'>
                    <span className='text-sm'>💼</span>
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
              <div key={index} className='text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300'>
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
          <div className='inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-emerald-500/30'>
            <div className='flex items-center justify-center space-x-3'>
              <span className='text-2xl'>🎓</span>
              <div>
                <p className='text-emerald-300 font-semibold text-lg'>College Project</p>
                <p className='text-gray-400 text-sm'>Built with passion and dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs