import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import sts_icon from './assets/Images/sts_icon.png'
import mc_icon from './assets/Images/mc_icon.png'

//import { sts_icon, mc_icon } from './assets/Images' //this shold add images 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={sts_icon} className="logo" alt="Sts Icon" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={mc_icon} className="logo react" alt="MC Icon" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button> 
      </div>
      <p className="read-the-docs">
        Welcome to my website
      </p>
    </>
  )
}

export default App
