import { useState } from 'react'
import './App.css'
import useCurrency from './hooks/useCurrency'
import BoxInput from './component/BoxInput'

function App() {

  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('usd')
  const [amount, setAmount] = useState(null);
  const [convert, setConvert] = useState(0);

  const showCurrency = useCurrency(from);
  console.log(showCurrency)

  const options = Object.keys(showCurrency);

  const convertAmount = () => {
    setConvert(amount * showCurrency[to])
  }

  const swap = ()=>{
      setFrom(to)
      setTo(from)
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convertAmount()
          }}
          >
            <div className="w-full mb-1">

              <BoxInput
              label="From"
              value = {amount}
              setValue={(amount)=>setAmount(amount)}
              options={options}
              setCurrency={from}
              currencyChange={(currency)=>setFrom(currency)}
              />

            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">

              <BoxInput
              label='To'
              value={convert}
              options={options}
              setCurrency={to}
              currencyChange={(currency)=>setTo(currency)}
              amountDisable
              /> 

            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
