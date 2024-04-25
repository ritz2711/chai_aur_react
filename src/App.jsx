import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(12)

  return (
    <>
    <h1>chai aur code {counter}</h1>
    <button onClick={()=>setCount(counter+1)}>increase</button>
    <br/>
    <button onClick={()=>setCount(counter-1)}>decrease</button>
    </>
  )
}

export default App
