import React, { useState } from "react";
import style from "../styles/Aside.module.css";
import {Link, NavLink} from 'react-router-dom'

function Aside() {
  const [control, setControl] = useState(false);

  return (
    <aside className={style.contenedor}>
      <h1 className={style.titulo}>CineSearch</h1>
      <div className={style.opciones}>
        <NavLink className={style.nav}  to={"/"}><h3 className={style.links}>Home</h3></NavLink>
        <NavLink className={style.nav} to={"/popular"}><h3 className={style.links}>Popular</h3></NavLink>
        <NavLink className={style.nav} to={"/listas"}><h3 className={style.links}>Listas</h3></NavLink>
        <NavLink className={style.nav} to={"/ajustes"}><h3 className={style.links}>Ajustes</h3></NavLink>
        <NavLink className={style.nav} to={"/contacto"}><h3 className={style.links}>Contacto</h3></NavLink>
      </div>
    </aside>
  );
}
export default Aside;
