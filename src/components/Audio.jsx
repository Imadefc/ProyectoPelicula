import { useEffect } from "react";
import { useAudio } from "../context/AudioContext";
import "../style/Audio.css";

const Audio = () => {
  const { mensajeBienvenida, playAudio } = useAudio();
  useEffect(() => {
    playAudio();
  }, []);

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