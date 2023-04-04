import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  
  return (
    <>
      CryptoBright App
    </>
  );
}

export default App;
