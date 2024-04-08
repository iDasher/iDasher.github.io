import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import sts_icon from './assets/Images/sts_icon.png'
import mc_icon from './assets/Images/mc_icon.png'

//import { sts_icon, mc_icon } from './assets/Images' //this shold add images 

import './App.css'



function LandingPage({show}) {

  return (
    <>
      <div className={`landing-page ${show ? 'fade-in' : ''}`}>
        <a target="_blank">
          <img src={sts_icon} className="logo sts" alt="Sts Icon" />
        </a>
        <a target="_blank">
          <img src={mc_icon} className="logo mine" alt="MC Icon" />
        </a>
      
        <h1>ModPacker!</h1>
        <p>
          This will pack your mods, select a game to start
        </p>
        </div>
        
    </>
  )
}

function MainContent({ show }) {
  return (
    <div className={`main-content ${show ? 'fade-in' : ''}`}>
      <h1>Main Content</h1>
      {/* Add your main content here */}
    </div>
  );
}

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Simulate a delay before showing the main content
    const timeout = setTimeout(() => {
      setShowMainContent(true);
    }, 3000); // 3000 milliseconds (3 seconds) delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      <div className="background-gradient"></div> {/* Animated background gradient */}
      <LandingPage show={!showMainContent} />
      <MainContent show={showMainContent} />
    </div>
  );
}

export default App
