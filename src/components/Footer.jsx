import { opcionesI } from '../services/opcionesI'
import { opciones } from '../services/opciones'
import OpcionesI from './OpcionesI'
import Opciones from './Opciones'
import style from "../style/Footer.module.css"


function Footer() {
  return (
    <footer>
      <div className={style.contenedor}>
        <div className={style.contenedorInterior1}>
          {opcionesI.map((opcionI, index) => (
            <OpcionesI key={index} {...opcionI} />
          ))}
        </div>
       
       <div className={style.contenedorInterior2}>
        {opciones.map((opcion, index) => (
          <Opciones key={index} {...opcion} />
        ))}
       </div>
      </div>
    </footer>
  )
}

export default Footer