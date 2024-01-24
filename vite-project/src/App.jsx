import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] =useState(15)


  const addValue=()=>{
    console.log("value added",counter);
    counter=counter+1
    setcounter(counter)
 
  }
  
  return (
    <>
     <h1>hello hoo ks</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button>Remove Value</button>
    </>
  )
}

export default App
