import { useEffect, useState } from "react";
import CardPelicula from "./components/CardPelicula";
import Populares from "./pages/Populares";
import Aside from './components/Aside'

function App() {

  return (
    <>
      <Aside />
      <Populares/>
    </>
  );
}

export default App;
