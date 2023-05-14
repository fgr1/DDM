import { useState, useEffect } from 'react';
import axios from 'axios';

function useMoedasData() {
  const [loading, setLoading] = useState(false);
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    const fetchMoedasData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0');
        const { data } = response;
        if (data) {
          setMoedas(data.coins);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoedasData();
  }, []);

  return { loading, moedas };
}

export default useMoedasData;
