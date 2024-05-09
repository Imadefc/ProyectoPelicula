import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audioReproducido, setAudioReproducido] = useState(false);

  return (
    <AudioContext.Provider value={{ audioReproducido, setAudioReproducido }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioContext debe usarse dentro de un AudioProvider');
  }
  return context;
};