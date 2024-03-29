import { useEffect, useState } from "react";
import CardPelicula from "./components/CardPelicula";
import Aside from './components/Aside'
import Buscar from "./pages/Buscar";

function App() {

  return (
    <>
      <Aside />
      <Buscar/>
    </>
  );
}

export default App;
