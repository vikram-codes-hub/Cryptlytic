import React, { useContext, useEffect } from 'react'
import { CoinContext } from '../Context/CoinContext'

const Home = () => {

  const {allcoins,currency}=useContext(CoinContext)
  const [displaycoins,setdisplaycoins]=React.useState([])
  const [SearchInput,setSearchInput]=React.useState("")

  useEffect(()=>{
    setdisplaycoins(allcoins)
  },[allcoins])

useEffect(() => {
    if(!SearchInput || SearchInput.trim() === "") {
      setdisplaycoins(allcoins)
      return
    }

    const filteredcoins = allcoins.filter((coin) => {
      return coin.name.toLowerCase().includes(SearchInput.toLowerCase()) || 
             coin.symbol.toLowerCase().includes(SearchInput.toLowerCase())
    })
    setdisplaycoins(filteredcoins)
  }, [SearchInput, allcoins])

  const Onsubmithandeller=(e)=>{
    e.preventDefault();
    
  }
 const handlePopularSearch = (cryptoName) => {
    setSearchInput(cryptoName) 
  }


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
          <form className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl' onSubmit={Onsubmithandeller}>
            <div className='flex-1 relative group'>
              <input 
                type="text"
                placeholder='Search crypto..'
                value={SearchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
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
                onClick={() => handlePopularSearch(crypto)}
                className='px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white/80 hover:text-white text-sm transition-all duration-200 hover:scale-105'
              >
                {crypto}
              </button>
            ))}
          </div>
        </div>
        
        {/* Crypto Table */}
        <div className='max-w-[800px] w-full m-auto bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-[15px] backdrop-blur-sm border border-white/10'>
          
          {/* Table Header */}
          <div className="grid grid-cols-[0.7fr_1.3fr_1fr_1fr_1.5fr] gap-4 text-white/70 text-sm md:text-base font-semibold px-2 md:px-6 py-4 border-b border-white/10">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className='text-center'>24h Change</p>
            <p className="text-right">Market Cap</p>
          </div>

          {/* Table Body */}
          <div className='divide-y divide-white/5'>
            {displaycoins && displaycoins.length > 0 ? (
              displaycoins.slice(0,10).map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="grid grid-cols-[0.7fr_1.3fr_1fr_1fr_1.5fr] gap-4 items-center px-2 md:px-6 py-4 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                >
                  {/* Rank */}
                  <p className='text-white/80 font-medium'>
                    {item.market_cap_rank || index + 1}
                  </p>

                  {/* Coin Info */}
                  <div className='flex items-center gap-3'>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className='w-8 h-8 rounded-full'
                    />
                    <div className='text-left'>
                      <p className='text-white font-medium text-sm md:text-base'>
                        {item.name}
                      </p>
                      <p className='text-white/50 text-xs uppercase'>
                        {item.symbol}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className='text-white font-medium'>
                    {currency.Symbol}{item.current_price?.toLocaleString() || 'N/A'}
                  </p>

                  {/* 24h Change */}
                  <p className={`text-center font-medium ${
                    item.price_change_percentage_24h > 0 
                      ? 'text-green-400' 
                      : 'text-red-400'
                  }`}>
                    {item.price_change_percentage_24h?.toFixed(2) || '0.00'}%
                  </p>

                  {/* Market Cap */}
                  <p className='text-right text-white/80'>
                    {currency.Symbol}{item.market_cap?.toLocaleString() || 'N/A'}
                  </p>
                </div>
              ))
            ) : (
              <div className='px-6 py-8 text-center text-white/60'>
                {allcoins ? 'No coins to display' : 'Loading coins...'}
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home