import { useState } from 'react'
import Aside from './components/Aside'
import Listas from './pages/Listas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Aside/> 
     <Listas/>
    </>
  )
}

export default App
