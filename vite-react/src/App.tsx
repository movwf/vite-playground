import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash-es'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([1,2,3,4]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button 
            onClick={() => {
              setCount((count) => count + 1);
              setData([data[0]+1,data[1]+1,data[2]+1,data[3]+1]);
            }}>
            count is: {count}
          </button>
        </p>
        {_.chunk(data,2).map(part=>{
            return JSON.stringify(part);
          })
        }
      </header>
    </div>
  )
}

export default App
