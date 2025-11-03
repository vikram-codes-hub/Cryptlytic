import React, { useState, useContext } from 'react'
import { Plus, TrendingUp, TrendingDown, Trash2, Edit2, PieChart, DollarSign, Wallet, ArrowUpRight, ArrowDownRight, X, Search } from 'lucide-react'
import { CoinContext } from '../Context/CoinContext'

const Portfolio = () => {
  const { currency } = useContext(CoinContext)
  const [holdings, setHoldings] = useState([
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      quantity: 0.5,
      avgBuyPrice: 45000,
      currentPrice: 52000,
      img: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      quantity: 2.5,
      avgBuyPrice: 2800,
      currentPrice: 3200,
      img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png'
    },
    {
      id: 3,
      name: 'Cardano',
      symbol: 'ADA',
      quantity: 1000,
      avgBuyPrice: 0.45,
      currentPrice: 0.38,
      img: 'https://assets.coingecko.com/coins/images/975/small/cardano.png'
    }
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    quantity: '',
    avgBuyPrice: '',
    currentPrice: ''
  })

  const getTotalStats = () => {
    let invested = 0
    let current = 0
    
    holdings.forEach(coin => {
      invested += coin.quantity * coin.avgBuyPrice
      current += coin.quantity * coin.currentPrice
    })

    const pnl = current - invested
    const pnlPercent = invested > 0 ? (pnl / invested) * 100 : 0

    return { invested, current, pnl, pnlPercent }
  }

  const stats = getTotalStats()

  const addCoin = () => {
    if (formData.name && formData.symbol && formData.quantity && formData.avgBuyPrice) {
      const newCoin = {
        id: Date.now(),
        name: formData.name,
        symbol: formData.symbol.toUpperCase(),
        quantity: parseFloat(formData.quantity),
        avgBuyPrice: parseFloat(formData.avgBuyPrice),
        currentPrice: parseFloat(formData.currentPrice || formData.avgBuyPrice),
        img: 'https://via.placeholder.com/32'
      }
      setHoldings([...holdings, newCoin])
      setFormData({ name: '', symbol: '', quantity: '', avgBuyPrice: '', currentPrice: '' })
      setShowAddModal(false)
    }
  }

  const removeCoin = (id) => {
    setHoldings(holdings.filter(coin => coin.id !== id))
  }

  return (
    <div className='min-h-screen text-white py-6 px-4 sm:px-6'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Header */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-bold mb-1'>Portfolio</h1>
            <p className='text-gray-400 text-sm'>Track your crypto holdings</p>
          </div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors'
          >
            <Plus size={18} />
            Add Coin
          </button>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
            <div className='flex items-center gap-2 mb-1.5'>
              <Wallet size={16} className='text-blue-400' />
              <p className='text-xs text-gray-400'>Portfolio Value</p>
            </div>
            <p className='text-xl font-bold'>
              {currency.Symbol}{stats.current.toFixed(2)}
            </p>
          </div>

          <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
            <div className='flex items-center gap-2 mb-1.5'>
              <DollarSign size={16} className='text-purple-400' />
              <p className='text-xs text-gray-400'>Total Invested</p>
            </div>
            <p className='text-xl font-bold'>
              {currency.Symbol}{stats.invested.toFixed(2)}
            </p>
          </div>

          <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
            <div className='flex items-center gap-2 mb-1.5'>
              {stats.pnl >= 0 ? 
                <TrendingUp size={16} className='text-green-400' /> : 
                <TrendingDown size={16} className='text-red-400' />
              }
              <p className='text-xs text-gray-400'>Profit/Loss</p>
            </div>
            <p className={`text-xl font-bold ${stats.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stats.pnl >= 0 ? '+' : ''}{currency.Symbol}{stats.pnl.toFixed(2)}
            </p>
          </div>

          <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
            <div className='flex items-center gap-2 mb-1.5'>
              <PieChart size={16} className='text-pink-400' />
              <p className='text-xs text-gray-400'>Returns</p>
            </div>
            <p className={`text-xl font-bold ${stats.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stats.pnlPercent >= 0 ? '+' : ''}{stats.pnlPercent.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Holdings Table */}
        <div className='bg-white/5 rounded-xl border border-white/10 overflow-hidden'>
          {/* Desktop Header */}
          <div className='hidden md:grid grid-cols-7 gap-4 px-6 py-4 border-b border-white/10 text-sm text-gray-400'>
            <div className='col-span-2'>Coin</div>
            <div className='text-right'>Quantity</div>
            <div className='text-right'>Avg Buy Price</div>
            <div className='text-right'>Current Price</div>
            <div className='text-right'>P/L</div>
            <div className='text-center'>Action</div>
          </div>

          {/* Coins List */}
          {holdings.length === 0 ? (
            <div className='flex flex-col items-center py-16'>
              <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-3'>
                <Wallet size={28} className='text-purple-400' />
              </div>
              <p className='text-gray-400 mb-1'>No coins added yet</p>
              <p className='text-gray-500 text-sm mb-4'>Start tracking your portfolio</p>
              <button 
                onClick={() => setShowAddModal(true)}
                className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors'
              >
                <Plus size={16} />
                Add First Coin
              </button>
            </div>
          ) : (
            <div>
              {holdings.map((coin) => {
                const pl = (coin.currentPrice - coin.avgBuyPrice) * coin.quantity
                const plPercent = ((coin.currentPrice - coin.avgBuyPrice) / coin.avgBuyPrice) * 100
                const value = coin.quantity * coin.currentPrice

                return (
                  <div key={coin.id} className='px-4 md:px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/10 last:border-0'>
                    {/* Mobile View */}
                    <div className='md:hidden'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-3'>
                          <img src={coin.img} alt={coin.name} className='w-9 h-9 rounded-full' />
                          <div>
                            <p className='font-semibold'>{coin.name}</p>
                            <p className='text-xs text-gray-400'>{coin.symbol}</p>
                          </div>
                        </div>
                        <div className='text-right'>
                          <p className='font-semibold'>{currency.Symbol}{value.toFixed(2)}</p>
                          <div className={`flex items-center gap-0.5 justify-end text-xs ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {pl >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {plPercent.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                      
                      <div className='grid grid-cols-2 gap-3 text-xs mb-3'>
                        <div>
                          <p className='text-gray-400'>Quantity</p>
                          <p className='font-medium'>{coin.quantity} {coin.symbol}</p>
                        </div>
                        <div>
                          <p className='text-gray-400'>Avg Buy</p>
                          <p className='font-medium'>{currency.Symbol}{coin.avgBuyPrice.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className='text-gray-400'>Current</p>
                          <p className='font-medium'>{currency.Symbol}{coin.currentPrice.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className='text-gray-400'>P/L</p>
                          <p className={`font-medium ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {pl >= 0 ? '+' : ''}{currency.Symbol}{pl.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-2'>
                        <button className='flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-xs font-medium transition-colors'>
                          Edit
                        </button>
                        <button 
                          onClick={() => removeCoin(coin.id)}
                          className='flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 py-2 rounded-lg text-xs font-medium transition-colors'
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Desktop View */}
                    <div className='hidden md:grid grid-cols-7 gap-4 items-center text-sm'>
                      <div className='col-span-2 flex items-center gap-3'>
                        <img src={coin.img} alt={coin.name} className='w-9 h-9 rounded-full' />
                        <div>
                          <p className='font-semibold'>{coin.name}</p>
                          <p className='text-xs text-gray-400'>{coin.symbol}</p>
                        </div>
                      </div>
                      
                      <div className='text-right'>
                        <p>{coin.quantity} {coin.symbol}</p>
                        <p className='text-xs text-gray-400'>{currency.Symbol}{value.toFixed(2)}</p>
                      </div>
                      
                      <div className='text-right'>
                        {currency.Symbol}{coin.avgBuyPrice.toFixed(2)}
                      </div>
                      
                      <div className='text-right'>
                        {currency.Symbol}{coin.currentPrice.toFixed(2)}
                      </div>
                      
                      <div className='text-right'>
                        <p className={`font-semibold ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {pl >= 0 ? '+' : ''}{currency.Symbol}{pl.toFixed(2)}
                        </p>
                        <div className={`flex items-center gap-0.5 justify-end text-xs ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {pl >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                          {plPercent.toFixed(2)}%
                        </div>
                      </div>
                      
                      <div className='flex justify-center gap-2'>
                        <button className='p-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors'>
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => removeCoin(coin.id)}
                          className='p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors'
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
            <div className='bg-[#1a0b2e] rounded-xl p-6 max-w-md w-full border border-white/20'>
              <div className='flex items-center justify-between mb-5'>
                <h2 className='text-xl font-bold'>Add Coin</h2>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className='p-1 hover:bg-white/10 rounded-lg transition-colors'
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className='space-y-3.5'>
                <div>
                  <label className='block text-sm text-gray-400 mb-1.5'>Coin Name</label>
                  <input
                    type='text'
                    placeholder='Bitcoin'
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm text-gray-400 mb-1.5'>Symbol</label>
                  <input
                    type='text'
                    placeholder='BTC'
                    value={formData.symbol}
                    onChange={(e) => setFormData({...formData, symbol: e.target.value})}
                    className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm text-gray-400 mb-1.5'>Quantity</label>
                  <input
                    type='number'
                    step='0.00000001'
                    placeholder='0.5'
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm text-gray-400 mb-1.5'>Avg Buy Price</label>
                  <input
                    type='number'
                    step='0.01'
                    placeholder='45000'
                    value={formData.avgBuyPrice}
                    onChange={(e) => setFormData({...formData, avgBuyPrice: e.target.value})}
                    className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-sm text-gray-400 mb-1.5'>Current Price (optional)</label>
                  <input
                    type='number'
                    step='0.01'
                    placeholder='52000'
                    value={formData.currentPrice}
                    onChange={(e) => setFormData({...formData, currentPrice: e.target.value})}
                    className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                  />
                </div>
              </div>

              <div className='flex gap-3 mt-5'>
                <button
                  onClick={() => setShowAddModal(false)}
                  className='flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={addCoin}
                  className='flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors'
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio