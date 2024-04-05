import { useState } from 'react'
import Aside from './components/Aside';
import { Route, Routes } from 'react-router';
import Listas from '../src/pages/Listas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/listas' element={<Listas/>}/>
      </Routes>

    </>
  )
}

export default App
