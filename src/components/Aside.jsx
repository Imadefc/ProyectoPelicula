import React, { useState } from "react";
import style from "../style/Aside.module.css";

function Aside() {
  const [control, setControl] = useState(false);
  function handleDropdown() {
    setControl(!control);
  }

  return (
    <aside className={style.contenedor}>
      <h1 className={style.titulo}>CineSearch</h1>
      <div className={style.opciones}>
        <h3>Home</h3>
        <h3>Popular</h3>
        <h3>Listas</h3>
        <h3>Ajustes</h3>
        <h3>Contacto</h3>
      </div>
    </aside>
  );
}

export default Aside;
