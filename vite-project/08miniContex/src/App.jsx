import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  
  return (
    <>
    <UserContextProvider>
      <h1>helloooo</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
     
    </>
  )
}

export default App
