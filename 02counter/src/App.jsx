import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)

  const addvalue = ()=>{
    if (counter == 20 || counter > 20) {
      setcounter(counter);
    }else{
      counter = counter + 1;
      setcounter(counter);
    }
  }
  const removevalue = ()=>{
    if (counter == 0 || counter < 0) {
      setcounter(counter);
    }else{
      counter = counter - 1;
      setcounter(counter);
    }
  }

  return (
    <>
      <h1>Chai with Abhay.</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
