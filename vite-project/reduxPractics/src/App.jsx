import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import HomeContainer from './containers/HomeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hellooo</h1>
          <HomeContainer/>
    </>
  )
}

export default App
