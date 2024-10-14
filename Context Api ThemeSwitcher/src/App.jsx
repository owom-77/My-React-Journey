import { useState } from "react"
import { ThemeContextProvider } from "./context/themeContext"
import ToogleButton from "./component/ToogleButton";
import Card from "./component/Card";

function App() {

  const [mode,setMode] = useState('light');

  const darkMode = ()=>{
    setMode('dark')
  }
  const lightMode = ()=>{
    setMode('light')
  }

  return (
    <ThemeContextProvider value={{mode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ToogleButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>


  )
}

export default App
