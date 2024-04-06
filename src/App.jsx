import { useState } from 'react'
import Aside from './components/Aside';
import { Route, Routes } from 'react-router';
import Listas from '../src/pages/Listas'
import Buscar from './pages/Buscar';
import Popular from './pages/Popular';
import Ajustes from './pages/Ajustes';
function App() {

  return (
    <>

      <Routes>
        <Route path='listas' element={<Listas/>}/>
        <Route path='popular' element={<Popular/>}/>
        <Route path='ajustes' element={<Ajustes/>}/>
        <Route path='/' element={<Buscar/>}/>
        
      </Routes>

    </>
  );
}

export default App;
