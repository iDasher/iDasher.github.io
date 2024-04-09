import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import sts_icon from './assets/Images/sts_icon.png'
import mc_icon from './assets/Images/mc_icon.png'
//chakra improts
import { Heading, Box, Button, Input } from '@chakra-ui/react';

//get cstom stff
import  MyButton   from './Cui.jsx'
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

      
        <Heading as = 'h1' fontFamily="Roboto Slab" fontWeight="bold" size="5xl" color="blue.500" _hover={{ color: 'green.500' }}>
          Welcome To ModPacker!
        </Heading>
      
       </div> 
        
    </>
  )
}

function MainContent({ show }) {
  return (
    <div className={`main-content ${show ? 'fade-in' : ''}`}>
      <h1>Main Content</h1>
      <Box p={4}>
        <Heading mb={4}>Select A Game</Heading>
        <MyButton image={sts_icon} text="Slay The Spire" />
        <MyButton image={mc_icon} text="Minecraft" />
      </Box>
    </div>
  );
}

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [hideLandingPage, setHideLandingPage] = useState(false);

  useEffect(() => {
    // Simulate a delay before showing the main content
    const timeout = setTimeout(() => {
      setShowMainContent(true);
    }, 3000); // 3000 milliseconds (3 seconds) delay

    // After the delay, hide the landing page
    const hideTimeout = setTimeout(() => {
      setHideLandingPage(true);
    }, 2500); // 2500 milliseconds (2.5 second) delay

    const fadeOutTimeout = setTimeout(() => {
      const landingPage = document.querySelector('.landing-page');
      if (landingPage) {
        landingPage.classList.add('fade-out');
      }
    }, 2000); // 2000 milliseconds (2 second) delay


    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
      clearTimeout(fadeOutTimeout)
    };
  }, []);


  return (
    <div className="app">
      <div className="background-gradient"></div> {/* Animated background gradient */}
      {!hideLandingPage && <LandingPage show />}
      <MainContent show={showMainContent} />
    </div>
  );
}

export default App
