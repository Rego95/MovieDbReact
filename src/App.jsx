import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ruta from "./routers/routes"

function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <header>
      <h1 className='title'>Películas</h1>
    </header>
    <Ruta/>
    </div>
  )
}


export default App
