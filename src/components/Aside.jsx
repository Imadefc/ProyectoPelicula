import React, { useState } from "react";
import style from "../style/Aside.module.css";

function Aside() {
    const [control, setControl] = useState(false);
    function handleDropdown(){
        setControl(!control);
    }

  return (
    <div>
      <aside className={style.aside}>
        <img
          className={style.img}
          width={"180px"}
          src="https://i.ibb.co/rvjSfS9/8786c7cf-7114-4946-9b34-e4b1555e2495.jpg"
        />
        <ul className={style.ul}>
          <li>Home</li>
          <li>Buscar</li>
          <li>Popular</li>
          <li>Listas</li>
          <li>Contacto</li>
        </ul>
      </aside>
      <aside className={style.asideMovil}>
            <img onClick={handleDropdown} src={"https://i.ibb.co/6tRgBKQ/1123247-200.png"}></img>
            <h3>CINESEARCH</h3>
            
      </aside>
      {control && <div className={style.dropdown}>
                <ul className={style.contenedor}>
                    <li>HOME</li>
                    <li>LISTAS</li>
                    <li>BUSCAR</li>
                    <li>POPULAR</li>
                    <li>CONTACTO</li>
                </ul>
            </div>}
    </div>
  );
}

export default Aside;
