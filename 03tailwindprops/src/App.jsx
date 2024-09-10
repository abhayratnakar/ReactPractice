import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  const myObj = {
    username: "Abhay",
    age: 20,
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black'>Tailwind test</h1>
      <Card username='chai with Abhay.' btnTxt="Click me"/>
      <Card username="coffee with Abhay" btnTxt="Visit me"/>
    </>
  )
}

export default App
