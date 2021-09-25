import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [fileNames, setFileNames] = useState([])

  useEffect(() => {
    getFileNames()
  }, [])

  const getFileNames = async () => {
    const res = await axios.get('/images')
    setFileNames(res.data)
    console.log(res.data)
  }

  return (
    <div className="App">      
      {fileNames.map((name, index)=>(
        <h3 key={index}>{name}</h3>
      ))}      
    </div>
  );
}

export default App;
