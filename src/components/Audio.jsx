import React, { useContext, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';
import '../style/Audio.css'

const Audio = () => {
  const { mensajeBienvenida, setAudioMensaje } = useAudio();
  const mensaje = useContext(AudioContext); 

  useEffect(() => {
    setAudioMensaje(true);
  }, [setAudioMensaje]);

  return (
    <>
      {mensaje && (
        <div className="mensaje">
          <h1>CineSearch</h1>
        </div>
      )}
    </>
  );
};

export default Audio;