import { useState } from 'react'
import './App.css'

function App() {

  const [col,setColor] = useState("olive");

  const color = ["red","orange","green","blue","pink","yellow","black"]

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : col}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          {color.map((val)=>(
              <button
              onClick={()=>setColor(val)}
              style={{backgroundColor : val}}
              key={val}
              className={`outline-none px-4 py-1 rounded-full text-white shadow-lg`}
              >{val}</button>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
