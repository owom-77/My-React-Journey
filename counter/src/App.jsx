import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0);

  const addCounter = ()=>{
    setCount((prev)=>prev + 1);
    setCount((prev)=>prev + 1);
    setCount(prev => prev + 1);         // New way to write this
  }

  const subCounter = ()=>{
    setCount((prev)=>prev - 1)
    setCount(prev => prev -1)
    setCount(prev => prev - 1)
  }

  return (
    <>
      <h1>Welcome omkar greeting from React + Vite</h1>
      <h3>Counter value is : {count}</h3>

      {/* <button
      onClick={()=> count < 20 ? setCount(count + 1) : count}
      >Add  {count}</button>
      {" "} {" "}
      <button
      onClick={()=>count > 0 ? setCount(count - 1) : count}
      >Sub {count}</button> */}

      <button
      onClick={addCounter}
      >Add</button>
      {"  "}
      <button
      onClick={subCounter}
      >Sub</button>
    </>
  )
}

export default App
