import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [Password,setPassword] = useState("")
  const passwordGenerator=useCallback(
    ()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str +="0987654321"
      if (charAllowed) str+="~!@#$%^&*(){}[]"
      for (let i=1; i<=Array.length;i++){
        let char=Math.floor(Math.random()* str.length+1)
        pass=str.charAt(char)
      }
      setPassword(pass)
    }
    ,[length,numberAllowed,charAllowed,setPassword])

  const passwordGenerator=()=>{

  }
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\'></div>
    </>
  )
}

export default App
