import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import audioFile from "../assets/audios/deep-strange-whoosh-183845.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [mensajeBienvenida, setMensajeBienvenida] = useState(true);
  const [audioMensaje, setAudioMensaje] = useState(false)
  const audioRef = useRef(new Audio(audioFile)); 

  useEffect(() => {
    if (audioMensaje) {
      audioRef.current.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
      });
      audioRef.current.onended = () => setAudioMensaje(false);
    }
  }, [audioMensaje]);

  return (
    <AudioContext.Provider value={{ mensajeBienvenida, setAudioMensaje }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);