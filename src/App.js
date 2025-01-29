import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

const insta=axios.create({
  baseURL:"http://192.168.101.76:3001"
})

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data using Axios
    insta
      .get('/data') // Example API
      .then((response) => {
        setData(response.data); // Store response data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
console.log(data)
  return (
    <div className="App">
      {data.map((e)=>
      <header className="App-header">
        <img src={e.image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
    )}
    </div>
  );
}

export default App;
