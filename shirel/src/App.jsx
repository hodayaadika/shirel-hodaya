import { useState } from 'react'
import './App.css'

fetch('')
      .then(response => response.json())
      .then(json => console.log(json))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    </>
  )
}

export default App
