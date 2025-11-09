import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoList from './components/CryptoList';
import Pagination from './components/Pagination';

import './App.css';


function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false
          }
        });
        setCoinsData(response.data);
      }
      catch (error) {
        console.error("Error fetching coin data: ", error);
      }

      finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App">
      <h1>Crypto Gallery</h1>
      {loading ? <p>Loading...</p> : null}
      <CryptoList coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />

    </div>
  );
}

export default App;
