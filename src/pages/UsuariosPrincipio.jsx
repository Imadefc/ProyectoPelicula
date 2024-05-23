import React, { useState } from 'react';
import ImagenEntrada from '../components/ImagenEntrada';
import style from "../styles/Principio.module.css";
import AñadirFotoEntrada from '../components/AñadirFotoEntrada';
import Audio from '../components/Audio';
import { useNavigate } from 'react-router-dom';

function UsuariosPrincipio() {
  const [control, setControl] = useState(false);
  const [mostrarAudio, setMostrarAudio] = useState(false);
  const navigate = useNavigate();

  const handleImagenClick = () => {
    setMostrarAudio(true);
    navigate('/home');
  };

  return (
    <>
      <main className={style.contenedorPrincipal}>
        <ImagenEntrada 
          imagen="https://ik.imagekit.io/storybird/images/9482cd33-d230-47a6-9dac-41bb43c9dc06/1_123261633.png" 
          onClick={handleImagenClick}
        />
        <ImagenEntrada 
          imagen="https://i.pinimg.com/236x/9f/1b/3d/9f1b3d5310f404f2322d87eab2ef472f.jpg" 
          onClick={handleImagenClick}
        />
        <AñadirFotoEntrada control={control} setControl={setControl} />

        {control && <div className={style.divContenedorFormulario} onClick={() => setControl(!control)}>
        </div>}

        {control && <article className={style.fondoContenedorFormulario} >
          <section className={style.contenedorFormularioPrincipio}>
            <div className={style.contenedorCerrar}>
              <img className={style.imgCerrar} onClick={() => setControl(!control)} src='https://i.ibb.co/GJVcntQ/cerrar.png'>
              </img>
            </div>
            <form>
              <div className={style.contenedorParametro}>
                <label htmlFor='nombre' >
                  Nombre:
                </label>
                <input id='nombre' type='text'>
                </input>
              </div>
              <div className={style.contenedorParametro}>
                <label htmlFor='icono'>
                  Icono:
                </label>
                <input id='icono' type='file'>
                </input>
              </div>
              <div className={style.contenedorParametro}>
                <label htmlFor='adult'>
                  Contenido adulto:
                </label>
                <input id='adult' type='checkbox'></input>
              </div>
              <div className={style.contenedorParametro}>
                <label htmlFor='idioma'>
                  Idioma:
                </label>
                <select id='idioma'>
                  <option>Español</option>
                  <option>Inglés</option>
                  <option>Francés</option>
                  <option>Alemán</option>
                  <option>Ruso</option>
                </select>
              </div>
              <button className={style.botonEnviar} type='submit'>Crear</button>
            </form>
          </section>
        </article>}
        
        {mostrarAudio && <Audio />}
      </main>
    </>
  );
}

export default UsuariosPrincipio;