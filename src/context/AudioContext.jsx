import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import audioFile from "../assets/audios/deep-strange-whoosh-183845.mp3";
import '../style/Audio.css'; 

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [mensajeBienvenida, setMensajeBienvenida] = useState(true);
  const [audioMensaje, setAudioMensaje] = useState(true);
  const audioRef = useRef(new Audio(audioFile)); // Crear el objeto Audio correctamente

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensajeBienvenida(false);
      setAudioMensaje(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioMensaje) {
      audioRef.current.play();
      audioRef.current.onended = () => setAudioMensaje(false);
    }
  }, [audioMensaje]);

  return (
    <AudioContext.Provider value={{ mensajeBienvenida }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);