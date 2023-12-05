import React, { createContext, useEffect, useState } from 'react';

export const CryptoContext = createContext({});

export default function CryptoProvider({ children }) {
  const [cryptoData, setCryptoData] = useState();

  const getCryptoData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      )
        .then((res) => res.json())
        .then((json) => json);

      setCryptoData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // getCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData }}>
      {children}
    </CryptoContext.Provider>
  );
}
