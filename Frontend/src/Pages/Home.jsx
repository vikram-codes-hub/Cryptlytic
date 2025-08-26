import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 text-center min-h-[80vh] px-4 py-12 font-outfit'>
     
     <div className='flex flex-col gap-8 max-w-4xl w-full'>
       
       {/* Hero Title */}
       <div className='flex flex-col gap-4 items-center'>
         <h1 className='font-bold text-[max(4vw,42px)] leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent text-center'>
           Largest <br />
           <span className='text-blue-400'>Crypto Marketplace</span>
         </h1>
         
         <p className='text-[#e3e3e3] text-lg leading-relaxed max-w-2xl mx-auto opacity-90 text-center'>
           Welcome to the world's largest cryptocurrency marketplace.<br/> Sign up to explore more about cryptos and start your trading journey today.
         </p>
       </div>
         
       {/* Search Form */}
       <div className='flex flex-col gap-6 items-center mt-8'>
         <form className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl'>
           <div className='flex-1 relative group'>
             <input 
               type="text" 
               placeholder='Search crypto..' 
               className='w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:bg-white/15 transition-all duration-300 text-lg shadow-lg'
             />
             <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
           </div>
           
           <button 
             type='submit'
             className='px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap'
           >
             🔍 Search
           </button>
         </form>
         
         {/* Popular Searches */}
         <div className='flex flex-wrap gap-3 items-center justify-center mt-4'>
           <span className='text-white/60 text-sm'>Popular:</span>
           {['Bitcoin', 'Ethereum', 'Solana', 'Cardano'].map((crypto) => (
             <button
               key={crypto}
               className='px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white/80 hover:text-white text-sm transition-all duration-200 hover:scale-105'
             >
               {crypto}
             </button>
           ))}
         </div>
       </div>
       
       {/* Stats Section */}
       
       
     </div>
    </div>
  )
}

export default Home