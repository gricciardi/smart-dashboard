import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [btc, setBtc] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(res => res.json())
    .then(data => setBtc(data.bitcoin.usd.toLocaleString()));
}, []);


  return (
    <div className={dark ? 'app dark' : 'app'}>
      <button onClick={() => setDark(!dark)} className="toggle">
        {dark ? '☀️' : '🌙'}
      </button>
      <h1>Smart Dashboard</h1>
      <Card title="Bitcoin Price (USD)" value={btc !== null ? `$${btc}` : 'Loading...'} />
    </div>
  );
};

export default App;
