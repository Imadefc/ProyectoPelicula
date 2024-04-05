import { useState } from 'react'
import Aside from './components/Aside'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aside/>
    </>
  )
}

export default App
