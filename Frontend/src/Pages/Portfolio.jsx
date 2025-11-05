import React, { useState, useContext, useEffect } from 'react'
import { Plus, TrendingUp, TrendingDown, Trash2, Edit2, PieChart, DollarSign, Wallet, ArrowUpRight, ArrowDownRight, X } from 'lucide-react'
import { CoinContext } from '../Context/CoinContext'


const Portfolio = () => {
  const { currency, holdings, addCoin, deleteCoin, loading, getPortfolio } = useContext(CoinContext)
  const [showAddModal, setShowAddModal] = useState(false)
  const [open,setopen]=useState(true);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    quantity: '',
    avgBuyPrice: '',
    currentPrice: ''
  })

  useEffect(() => {
    getPortfolio()
  }, [])



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

  const handleAddCoin = async () => {
    if (formData.name && formData.symbol && formData.quantity && formData.avgBuyPrice) {
      const newCoin = {
        coinName: formData.name,
        symbol: formData.symbol.toUpperCase(),
        quantity: parseFloat(formData.quantity),
        avgBuyPrice: parseFloat(formData.avgBuyPrice),
        currentPrice: parseFloat(formData.currentPrice || formData.avgBuyPrice)
      }
      await addCoin(newCoin)
      setFormData({ name: '', symbol: '', quantity: '', avgBuyPrice: '', currentPrice: '' })
      setShowAddModal(false)
    }
  }
    const openhandel=()=>{
    setopen(!open);
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
            <Plus size={18} /> Add Coin
          </button>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <StatCard icon={<Wallet size={16} className='text-blue-400' />} title='Portfolio Value' value={`${currency.Symbol}${stats.current.toFixed(2)}`} />
          <StatCard icon={<DollarSign size={16} className='text-purple-400' />} title='Total Invested' value={`${currency.Symbol}${stats.invested.toFixed(2)}`} />
          <StatCard
            icon={stats.pnl >= 0 ? <TrendingUp size={16} className='text-green-400' /> : <TrendingDown size={16} className='text-red-400' />}
            title='Profit/Loss'
            value={`${stats.pnl >= 0 ? '+' : ''}${currency.Symbol}${stats.pnl.toFixed(2)}`}
            color={stats.pnl >= 0 ? 'text-green-400' : 'text-red-400'}
          />
          <StatCard
            icon={<PieChart size={16} className='text-pink-400' />}
            title='Returns'
            value={`${stats.pnlPercent >= 0 ? '+' : ''}${stats.pnlPercent.toFixed(2)}%`}
            color={stats.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'}
          />
        </div>

        {/* Holdings Table */}
        <div className='bg-white/5 rounded-xl border border-white/10 overflow-hidden'>
          {loading ? (
            <p className='text-center py-8 text-gray-400'>Loading portfolio...</p>
          ) : holdings.length === 0 ? (
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
                <Plus size={16} /> Add First Coin
              </button>
            </div>
          ) : (
            holdings.map((coin) => {
              const pl = (coin.currentPrice - coin.avgBuyPrice) * coin.quantity
              const plPercent = ((coin.currentPrice - coin.avgBuyPrice) / coin.avgBuyPrice) * 100
              const value = coin.quantity * coin.currentPrice
              return (
                <div key={coin._id} className='px-4 md:px-6 py-4 hover:bg-white/5 border-b border-white/10 last:border-0'>
                  <div className='hidden md:grid grid-cols-7 gap-4 items-center text-sm'>
                    <div className='col-span-2 flex items-center gap-3'>
                      {/* <img src={coin.img || 'https://via.placeholder.com/32'} alt={coin.coinName} className='w-9 h-9 rounded-full' /> */}
                      <div>
                        <p className='font-semibold'>{coin.coinName}</p>
                        <p className='text-xs text-gray-400'>{coin.symbol}</p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p>{coin.quantity} {coin.symbol}</p>
                      <p className='text-xs text-gray-400'>{currency.Symbol}{value.toFixed(2)}</p>
                    </div>
                    <div className='text-right'>{currency.Symbol}{coin.avgBuyPrice.toFixed(2)}</div>
                    <div className='text-right'>{currency.Symbol}{coin.currentPrice.toFixed(2)}</div>
                    <div className='text-right'>
                      <p className={`font-semibold ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {pl >= 0 ? '+' : ''}{currency.Symbol}{pl.toFixed(2)}
                      </p>
                      <div className={`flex items-center gap-0.5 justify-end text-xs ${pl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {pl >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {plPercent.toFixed(2)}%
                      </div>
                    </div>
                    <div className='flex justify-center gap-2'>
                      <button
                        onClick={() => deleteCoin(coin._id)}
                        className='p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors'
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div onClick={()=>setShowAddModal(false)} className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
            <div className='bg-[#1a0b2e] rounded-xl p-6 max-w-md w-full border border-white/20'>
              <div className='flex items-center justify-between mb-5'>
                <h2 className='text-xl font-bold'>Add Coin</h2>
                <button onClick={() => setShowAddModal(false)} className='p-1 hover:bg-white/10 rounded-lg transition-colors'>
                  <X size={20} />
                </button>
              </div>
              <div className='space-y-3.5'>
                {['name', 'symbol', 'quantity', 'avgBuyPrice', 'currentPrice'].map((field) => (
                  <div key={field}>
                    <label className='block text-sm text-gray-400 mb-1.5 capitalize'>
                      {field === 'avgBuyPrice' ? 'Avg Buy Price' : field === 'currentPrice' ? 'Current Price (optional)' : field}
                    </label>
                    <input
                      type={field === 'quantity' || field.includes('Price') ? 'number' : 'text'}
                      step={field.includes('Price') ? '0.01' : '0.00000001'}
                      placeholder={field === 'name' ? 'Bitcoin' : field === 'symbol' ? 'BTC' : ''}
                      value={formData[field] || ''}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className='w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors'
                    />
                  </div>
                ))}
              </div>
              <div className='flex gap-3 mt-5'>
                <button onClick={() => setShowAddModal(false)} className='flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors'>
                  Cancel
                </button>
                <button onClick={handleAddCoin} className='flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors'>
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

const StatCard = ({ icon, title, value, color }) => (
  <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
    <div className='flex items-center gap-2 mb-1.5'>{icon}<p className='text-xs text-gray-400'>{title}</p></div>
    <p className={`text-xl font-bold ${color || ''}`}>{value}</p>
  </div>
)

export default Portfolio
