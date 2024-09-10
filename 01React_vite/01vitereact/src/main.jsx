import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

/*
const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: "_blank",
  },
  children: "Click me to visit google"
}*/

const anotherElement = (
  <a href="https://google.com" target='_blank' >Visite google</a>
)

const anotheruser = "chaiaurreact"

const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click to visit Google",
  anotheruser
)

createRoot(document.getElementById('root')).render(
  reactElement
  // <App />
)
