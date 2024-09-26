import React, { useEffect, useState } from 'react';
import './CryptoList.css';  // This imports the CSS styles

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCryptoData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await response.json();
      setCryptos(data);
    };
    fetchCryptoData();
  }, []);

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-container">
      <h1>Cryptocurrency Prices</h1>
      <input
        type="text"
        placeholder="Search for a coin"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="crypto-list">
        {filteredCryptos.map(crypto => (
          <div key={crypto.id} className="crypto-item">
            <img src={crypto.image} alt={crypto.name} />
            <h2>{crypto.name}</h2>
            <p>${crypto.current_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;