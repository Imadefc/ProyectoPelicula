import "./App.css";
import { opciones } from "./data/opciones";
import { opcionesI } from "./data/opcionesI";
import Opciones from "./Components/Opciones";
import OpcionesI from "./Components/OpcionesI";  
import OpcionesView from "./views/OpcionesView";
import OpcionesIviews from "./views/OpcionesIviews";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes> 
      <Route path="*"  element= {<Home />} />
      {opciones.map((opcion, index) => (
        <Route key={index} path={"/" + opcion.name.toLowerCase()} element={<OpcionesView {...opcion} />} />
      ))}
      {opcionesI.map((opcionI, indexI) => (
        <Route key={indexI} path={"/" + opcionI.nameI.toLowerCase()} element={<OpcionesIviews {...opcionI} />} />
      ))}
    </Routes>
    </>
  );
}


function Home() {
  return (
    <div>
      <div className="footerContainer">
        <div className="opcionesImagenes_footer">
          {opcionesI.map((opcionI, index) => (
            <OpcionesI key={index} {...opcionI} />
          ))}
        </div>
       
       <div className="opcionesTexto_footer">
        {opciones.map((opcion, index) => (
          <Opciones key={index} {...opcion} />
        ))}
       </div>
       
      </div>
    </div>
  );
}



export default App;
