import React, { useContext, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Calendar, Globe, Github, MessageCircle, Users, Activity, DollarSign, BarChart3, Info } from 'lucide-react';
import { useParams } from 'react-router-dom';
import LineChart from '../Components/LineChart'

// Mock CoinContext for demonstration
const CoinContext = React.createContext({
  currency: { name: 'usd', symbol: '$' }
});

const Coin = () => {
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  // Sample data for fallback
  const setSampleData = () => {
    const sampleData = {
      id: coinId,
      name: coinId.charAt(0).toUpperCase() + coinId.slice(1),
      symbol: coinId.slice(0, 3).toUpperCase(),
      image: {
        large: 'https://via.placeholder.com/128'
      },
      market_data: {
        current_price: { usd: 1234.56 },
        price_change_percentage_24h: 2.34,
        market_cap: { usd: 45000000000 },
        total_volume: { usd: 2500000000 },
        circulating_supply: 19000000,
        max_supply: 21000000,
        ath: { usd: 68789.63 },
        atl: { usd: 67.81 },
        market_cap_rank: 1,
        price_change_percentage_1h_in_currency: { usd: 0.12 },
        price_change_percentage_24h: 2.34,
        price_change_percentage_7d: -3.45,
        price_change_percentage_14d: 12.56,
        price_change_percentage_30d: 23.78,
        price_change_percentage_1y: 156.89,
        ath_change_percentage: { usd: -82.1 }
      },
      categories: ['Cryptocurrency', 'PoW'],
      description: {
        en: 'A sample cryptocurrency description would go here, explaining what this digital asset is and its purpose in the ecosystem.'
      },
      links: {
        homepage: ['https://example.com'],
        whitepaper: 'https://example.com/whitepaper',
        repos_url: {
          github: ['https://github.com/example']
        },
        subreddit_url: 'https://reddit.com/r/example'
      }
    };
    setCoinData(sampleData);
    
    // Sample historical data for demo
    const sampleHistoricalData = {
      prices: Array.from({ length: 30 }, (_, i) => [
        Date.now() - (29 - i) * 24 * 60 * 60 * 1000,
        1000 + Math.random() * 500
      ])
    };
    setHistoricalData(sampleHistoricalData);
  };

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      setError(null);
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?dex_pair_format=contract_address`, options);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
      // For demo purposes, use sample data if API fails
      setSampleData();
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=30&interval=daily`, 
        options
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch historical data: ${response.status}`);
      }
      
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error('Error fetching historical data:', err);
      // Fallback to sample data for demo
      const sampleHistoricalData = {
        prices: Array.from({ length: 30 }, (_, i) => [
          Date.now() - (29 - i) * 24 * 60 * 60 * 1000,
          1000 + Math.random() * 500
        ])
      };
      setHistoricalData(sampleHistoricalData);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency, coinId]);

  useEffect(() => {
    if (coinData) {
      fetchHistoricalData();
    }
  }, [coinData, currency]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error && !coinData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error loading data</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <button 
            onClick={fetchCoinData}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Coin not found</h2>
          <p className="text-gray-600 dark:text-gray-400">Please try again later.</p>
        </div>
      </div>
    );
  }

  const currentPrice = coinData.market_data?.current_price?.[currency.name] || 0;
  const priceChange24h = coinData.market_data?.price_change_percentage_24h || 0;
  const marketCap = coinData.market_data?.market_cap?.[currency.name] || 0;
  const volume24h = coinData.market_data?.total_volume?.[currency.name] || 0;
  const circulatingSupply = coinData.market_data?.circulating_supply || 0;
  const maxSupply = coinData.market_data?.max_supply || 0;
  const ath = coinData.market_data?.ath?.[currency.name] || 0;
  const atl = coinData.market_data?.atl?.[currency.name] || 0;

  const formatNumber = (num) => {
    if (!num && num !== 0) return 'N/A';
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toLocaleString();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.name.toUpperCase(),
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={coinData.image?.large}
                alt={coinData.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {coinData.name}
                  <span className="text-lg text-gray-500 dark:text-gray-400 uppercase">
                    ({coinData.symbol})
                  </span>
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-600 dark:text-gray-400">
                    Rank #{coinData.market_data?.market_cap_rank || 'N/A'}
                  </span>
                  <div className="flex gap-2">
                    {coinData.categories?.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {formatPrice(currentPrice)}
              </div>
              <div className={`flex items-center gap-1 text-lg font-medium ${
                priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {priceChange24h >= 0 ? (
                  <TrendingUp className="w-5 h-5" />
                ) : (
                  <TrendingDown className="w-5 h-5" />
                )}
                {Math.abs(priceChange24h).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Price Chart (30 Days)
          </h2>
          <div className="h-96">
            {historicalData ? (
              <LineChart 
                historicalData={historicalData}
                currency={currency}
                coinName={coinData.name}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Market Cap</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {currency.symbol}{formatNumber(marketCap)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">24h Volume</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {currency.symbol}{formatNumber(volume24h)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">All-Time High</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPrice(ath)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {coinData.market_data?.ath_change_percentage?.[currency.name]?.toFixed(1)}% from ATH
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-orange-600" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Circulating Supply</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(circulatingSupply)} {coinData.symbol?.toUpperCase()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Max: {maxSupply ? formatNumber(maxSupply) : 'N/A'}
            </p>
          </div>
        </div>

        {/* Price Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Price Performance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: '1H', value: coinData.market_data?.price_change_percentage_1h_in_currency?.[currency.name] },
              { label: '24H', value: coinData.market_data?.price_change_percentage_24h },
              { label: '7D', value: coinData.market_data?.price_change_percentage_7d },
              { label: '14D', value: coinData.market_data?.price_change_percentage_14d },
              { label: '30D', value: coinData.market_data?.price_change_percentage_30d },
              { label: '1Y', value: coinData.market_data?.price_change_percentage_1y }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.label}</p>
                <p className={`text-lg font-semibold ${
                  (item.value || 0) >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.value ? `${item.value >= 0 ? '+' : ''}${item.value.toFixed(2)}%` : 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            About {coinData.name}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {coinData.description?.en || 'No description available.'}
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coinData.links?.homepage?.[0] && (
              <a
                href={coinData.links.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900 dark:text-white">Official Website</span>
              </a>
            )}
            
            {coinData.links?.whitepaper && (
              <a
                href={coinData.links.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-gray-900 dark:text-white">Whitepaper</span>
              </a>
            )}
            
            {coinData.links?.repos_url?.github?.[0] && (
              <a
                href={coinData.links.repos_url.github[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                <span className="text-gray-900 dark:text-white">GitHub Repository</span>
              </a>
            )}
            
            {coinData.links?.subreddit_url && (
              <a
                href={coinData.links.subreddit_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-orange-600" />
                <span className="text-gray-900 dark:text-white">Reddit Community</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;