import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import sts_icon from './assets/Images/sts_icon.png'
import mc_icon from './assets/Images/mc_icon.png'
//chakra improts
import { Heading, Box, Button, Input,ChakraProvider,Flex } from '@chakra-ui/react'

//get cstom stff
import  MyButton   from './Cui.jsx'
import './App.css'

import Search from './Search.jsx'


function LandingPage({ show }) {
  return (
    <ChakraProvider>
      <div className={`landing-page ${show ? 'fade-in' : ''}`}>
        <Flex justifyContent="center">
          <a target="_blank">
            <img src={sts_icon} className="logo sts" alt="Sts Icon" style={{ width: '230px', height: '230px' }} />
          </a>
          <a target="_blank">
            <img src={mc_icon} className="logo mine" alt="MC Icon" style={{ width: '230px', height: '230px' }} />
          </a>
        </Flex>

        <Heading as="h1" fontFamily="Roboto Slab" fontWeight="bold" fontSize="125px" color="black.500">
          Welcome To ModPacker!
        </Heading>
      </div>
    </ChakraProvider>
  );
}

function MainContent({ show, toggleSearch }) {
  return (
    <ChakraProvider>
      <div className={`main-content ${show ? 'fade-in' : ''}`}>
        <Heading mb={10}>Select a Game</Heading>
        <Box p={4}>
          <Flex>
            <MyButton image={sts_icon} text="Slay The Spire" onClick={toggleSearch} />
            <MyButton image={mc_icon} text="Minecraft" onClick={toggleSearch} />
          </Flex>
        </Box>
        
      </div>
    </ChakraProvider>
  );
}

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hideLandingPage, setHideLandingPage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainContent(true);
    }, 3000);

    const hideTimeout = setTimeout(() => {
      setHideLandingPage(true);
    }, 2500);

    const fadeOutTimeout = setTimeout(() => {
      const landingPage = document.querySelector('.landing-page');
      if (landingPage) {
        landingPage.classList.add('fade-out');
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="app">
      {!hideLandingPage && <LandingPage show />}
      {showSearch ? <Search /> : <MainContent show={showMainContent} toggleSearch={toggleSearch} />}
    </div>
  );
}

export default App;