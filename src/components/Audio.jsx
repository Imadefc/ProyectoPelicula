import React from 'react';
import { useAudio } from '../context/AudioContext';

const Audio = () => {
  const { mensajeBienvenida } = useAudio();

  return (
    <>
      {mensajeBienvenida && (
        <div className="mensaje">
          <h1>CineSearch</h1>
        </div>
      )}
    </>
  );
};

export default Audio;