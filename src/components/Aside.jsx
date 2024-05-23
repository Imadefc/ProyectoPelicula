import React, { useState, useContext, useEffect } from "react";
import style from "../styles/Aside.module.css";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { ThemeContext } from "../providers/ThemeProvider";

function Aside() {

  const [control, setControl] = useState(false);
  const [controlhamburguer, setCH] = useState(false);
  const [mensajeBienvenida, setMensajeBienvenida] = useState(true);
  const [, toggleTheme] = useContext(ThemeContext);
  
  function onChangeTheme(event) {
    toggleTheme();
  }
  function mensajeBienvenidaFuncion(event) {
      setMensajeBienvenida(false);
  }

  useEffect(() => {
    mensajeBienvenidaFuncion();
  }, []);
  
  return (
    <>
      <aside className={style.contenedor}>
        {mensajeBienvenida && <div className={style.mensaje}></div>}
        <h1 className={style.titulo}>CineSearch</h1>
        <div className={style.opciones}>
          <NavLink className={style.nav} to={"/home"}>
            <h3 className={style.links}>Buscar</h3>
          </NavLink>
          <NavLink className={style.nav} to={"/popular"}>
            <h3 className={style.links}>Popular</h3>
          </NavLink>
          <NavLink className={style.nav} to={"/listas"}>
            <h3 className={style.links}>Listas</h3>
          </NavLink>
          <NavLink className={style.nav} to={"/contacto"}>
            <h3 className={style.links}>Contacto</h3>
          </NavLink>
          <button onClick={onChangeTheme} className={style.nav_theme}>
            <h3 className={style.links_theme}>Cambiar tema</h3>
          </button>
        </div>
        <GiHamburgerMenu
          onClick={() => {
            setCH(!controlhamburguer);
          }}
          className={style.hamburguer}
          display={"none"}
          size={"3rem"}
        />
      </aside>
      {controlhamburguer && (
        <div
          className={style.opcionesNavham}
          onClick={() => {
            setCH(!controlhamburguer);
          }}
        >
          <motion.div
            animate={{ y: 100 }}
            className={style.contenedorOpcionesNavHam}
          >
            <NavLink className={style.navHam} to={"/"}>
              <h3 className={style.links}>Home</h3>
            </NavLink>
            <NavLink className={style.navHam} to={"/popular"}>
              <h3 className={style.links}>Popular</h3>
            </NavLink>
            <NavLink className={style.navHam} to={"/listas"}>
              <h3 className={style.links}>Listas</h3>
            </NavLink>
            <NavLink className={style.navHam} to={"/contacto"}>
              <h3 className={style.links}>Contacto</h3>
            </NavLink>
          </motion.div>
        </div>
      )}
    </>
  );
}
export default Aside;
