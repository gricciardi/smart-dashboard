import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [btc, setBtc] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
      .then(res => res.json())
      .then(data => setBtc(data.bpi.USD.rate));
  }, []);

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <button onClick={() => setDark(!dark)} className="toggle">
        {dark ? '☀️' : '🌙'}
      </button>
      <h1>Smart Dashboard</h1>
      <Card title="Bitcoin Price (USD)" value={btc ? `$${btc}` : 'Loading...'} />
    </div>
  );
};

export default App;
