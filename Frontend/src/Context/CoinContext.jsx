import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allcoins, setAllcoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: "$"
    });

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

    useEffect(() => {
        fetchCoins();
    }, [currency])

    const value = {
        allcoins,
        currency,
        setCurrency
    }

    return (
        <CoinContext.Provider value={value}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;