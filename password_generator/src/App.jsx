import { useState, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(false);
  const [cha, setCha] = useState(false);
  const [len, setLength] = useState(8);
  const [password, setPassword] = useState(null);

  const ref = useRef(null)

  const main = ()=>{
    let ch = "";
    let pass = "";

    if(num || cha){
      if(num) ch += "1234567890";
      if(cha) ch += "abcdefghijklmnopqrstuvwxyz";
      for(let i=0; i<len; i++){
        pass += ch.charAt(Math.floor(Math.random()*ch.length)+1);
      }
    }
    setPassword(pass);
  }

  const copy = ()=>{
    ref.current?.select();
    navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    main()
  },[num,cha,len])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={ref}
        />
        <button
          onClick={copy}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            min={8}
            max={20}
            type="range"
            value={len}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
          />
          <label>Length:{len}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            value={num}
            onChange={() => setNum(!num)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            value={cha}
            onChange={() => setCha(!cha)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
