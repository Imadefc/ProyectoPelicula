import React, { useState, useEffect, useRef } from 'react';
import audioFile from "../assets/audios/deep-strange-whoosh-183845.mp3";
import '../style/Audio.css'; 

function Audio() {
  const [mensajeBienvenida, setMensajeBienvenida] = useState(true);
  const [audioMensaje, setAudioMensaje] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (mensajeBienvenida && audioMensaje) {
      const timer = setTimeout(() => {
        setMensajeBienvenida(false);
        setAudioMensaje(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [mensajeBienvenida, audioMensaje]);

  useEffect(() => {
    if (audioMensaje) {
      audioRef.current.play();
      audioRef.current.onended = () => setAudioMensaje(false);
    }
  }, [audioMensaje]);

  return (
    <>
      {mensajeBienvenida && (
        <div className="mensaje">
          <h1>CineSearch</h1>
        </div>
      )}
      <audio ref={audioRef} src={audioFile} />
    </>
  );
}

export default Audio;