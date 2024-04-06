import { useState } from 'react'
import Aside from './components/Aside';
import { Route, Routes } from 'react-router';
import Listas from '../src/pages/Listas'
import Buscar from './pages/Buscar';
function App() {

  return (
    <>

      <Routes>
        <Route path='listas' element={<Listas/>}/>
        <Route path='buscar' element={<Buscar/>}/>
      </Routes>

    </>
  );
}

export default App;
