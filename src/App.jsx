import React, { useEffect, useState } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const mySound = new Audio('/6339936.wav');
    setAudio(mySound);

    const playSound = async () => {
      try {
        await mySound.play();
        setIsPlaying(true);
        console.log('Audio playback started successfully');
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };

    playSound();

    mySound.onended = () => {
      setIsPlaying(false);
    };
  }, []);

  const handleButtonClick = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      } else {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Error playing sound:', error);
        });
      }
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
      <button 
        onClick={handleButtonClick} 
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
        {isPlaying ? 'Stop Sound' : 'Play Sound'}
      </button>
    </>
  );
};

export default App;
