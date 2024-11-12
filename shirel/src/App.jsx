import { useState } from 'react'
import Todos from './conpponents/Todos'
import './App.css'

fetch('')
      .then(response => response.json())
      .then(json => console.log(json))

function App() {

  return (
    <>
      <Todos />

    </>
  )
}

export default App
