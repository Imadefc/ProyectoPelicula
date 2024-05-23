import React, { useState } from "react";
import ImagenEntrada from "../components/ImagenEntrada";
import style from "../styles/Principio.module.css";
import AñadirFotoEntrada from "../components/AñadirFotoEntrada";

function UsuariosPrincipio() {
  const [control, setControl] = useState(false);
  const [mostrarAudio, setMostrarAudio] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    icono: "",
    adult: false,
    idioma: "Español",
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaImagen = {
      nombre: formData.nombre,
      icono: formData.icono,
      adult: formData.adult,
      idioma: formData.idioma,
    };
    setImagenes([...imagenes, nuevaImagen]);
    setFormData({ nombre: "", icono: "", adult: false, idioma: "Español" }); // Limpia el formulario
    setControl(false);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      icono: URL.createObjectURL(e.target.files[0]),
    });
  };

  const toggleControl = () => {
    setFormData({ nombre: "", icono: "", adult: false, idioma: "Español" }); // Limpia el formulario
    setControl(!control);
  };

  return (
    <>
      <main className={style.contenedorPrincipal}>
        <ImagenEntrada
          imagen="https://i.pinimg.com/736x/65/c5/fa/65c5fa28eb1fdd0d92e9c370362f8ccb.jpg"
          nombre="Perfil Ejemplo"
        />
        {imagenes.map((imagen, index) => (
          <ImagenEntrada
            key={index}
            imagen={imagen.icono}
            nombre={imagen.nombre}
          />
        ))}

        <AñadirFotoEntrada control={control} setControl={toggleControl} />

        {control && (
          <div
            className={style.divContenedorFormulario}
            onClick={toggleControl}
          ></div>
        )}

        {control && (
          <article className={style.fondoContenedorFormulario}>
            <section className={style.contenedorFormularioPrincipio}>
              <div className={style.contenedorCerrar}>
                <img
                  className={style.imgCerrar}
                  onClick={toggleControl}
                  src="https://i.ibb.co/GJVcntQ/cerrar.png"
                ></img>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={style.contenedorParametro}>
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{
                      borderRadius: "10px",
                      alignItems: "center",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      height: "35px",
                      width: "300px",
                    }}
                  />
                </div>
                <div className={style.contenedorParametro}>
                  <label htmlFor="icono" style={{ display: "flex" }}>
                    Icono:
                  </label>
                  <input
                    id="icono"
                    type="file"
                    onChange={handleFileChange}
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                </div>
                <div className={style.contenedorParametro}>
                  <label htmlFor="adult">Contenido adulto:</label>
                  <input
                    id="adult"
                    type="checkbox"
                    checked={formData.adult}
                    onChange={handleChange}
                    style={{ height: "35px" }}
                  />
                </div>
                <div className={style.contenedorParametro}>
                  <label htmlFor="idioma">Idioma:</label>
                  <select
                    id="idioma"
                    value={formData.idioma}
                    onChange={handleChange}
                    style={{
                      borderRadius: "10px",
                      alignItems: "center",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      height: "35px",
                    }}
                  >
                    <option>Español</option>
                    <option>Inglés</option>
                    <option>Francés</option>
                    <option>Alemán</option>
                    <option>Ruso</option>
                  </select>
                </div>
                <button className={style.botonEnviar} type="submit">
                  Crear
                </button>
              </form>
            </section>
          </article>
        )}
      </main>
    </>
  );
}

export default UsuariosPrincipio;
