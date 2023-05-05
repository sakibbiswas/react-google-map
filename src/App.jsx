import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mylocation from './components/Mylocation'
import Direction from './components/Direction'

function App() {
  const [origin, setorigin] = useState('')
  const [destination, setdestination] = useState('')
  const displayDirection = (event) => {
    event.prevantDefalt();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setorigin(start)
    setdestination(end)
  }
  return (
    <div className='App'>
      <form onSubmit={displayDirection} >
        <input type="text" name='origin' required />
        <br />
        <input type="text" name='destination' required />
        <br />
        <input type="submit" value="show Direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
      {/* <Mylocation></Mylocation> */}
    </div>
  )
}

export default App
