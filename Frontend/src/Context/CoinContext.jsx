import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const CoinContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;


const CoinContextProvider = (props) => {
const {authuser,token}=useContext(UserContext)

    const [allcoins, setAllcoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: "$"
    });
     const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



    const fetchCoins = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-PQcv1SXXLXqbxSvpi9PU8GcG' // Removed extra tab character
            }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
            const data = await response.json();
            
           
            setAllcoins(data);
            
        } catch (error) {
            console.error('Error fetching coins:', error);
        }
    }

  //  Fetch user's portfolio
  const getPortfolio = async () => {
    if (!authuser?._id) return;
    try {
      setLoading(true);
      const res = await axios.get(`/api/portfolio/${authuser._id}`);
      if (res.data.success) {
        setHoldings(res.data.coins);
      } else {
        toast.error("Failed to load portfolio");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching portfolio");
    } finally {
      setLoading(false);
    }
  };

  //  Add a new coin
  const addCoin = async (coinData) => {
    if (!authuser?._id) {
      toast.error("Please login first");
      return;
    }
    try {
      setLoading(true);
      const body = { ...coinData, userId: authuser._id };
      const res = await axios.post("/api/portfolio/add", body);
      if (res.data.success) {
        setHoldings((prev) => [...prev, res.data.coin]);
        toast.success("Coin added successfully");
      } else {
        toast.error("Failed to add coin");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding coin");
    } finally {
      setLoading(false);
    }
  };

  // Delete coin
  const deleteCoin = async (coinId) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/portfolio/${coinId}`);
      if (res.data.success) {
        setHoldings((prev) => prev.filter((coin) => coin._id !== coinId));
        toast.success("Coin removed");
      } else {
        toast.error("Failed to remove coin");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting coin");
    } finally {
      setLoading(false);
    }
  };

  //  Auto-load portfolio when logged in
  useEffect(() => {
    if (authuser && token) {
      axios.defaults.headers.common["Authorization"] = token;
      getPortfolio();
    } else {
      setHoldings([]);
    }
  }, [authuser, token]);


    useEffect(() => {
        fetchCoins();
    }, [currency])

    const value = {
        allcoins,
        currency,
        setCurrency,
        holdings,
        addCoin,
        deleteCoin,
        loading,
        error,
        fetchCoins,
        getPortfolio
    }

    return (
        <CoinContext.Provider value={value}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;