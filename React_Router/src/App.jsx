import './App.css'
import Footer from './conponent/Footer'
import Header from './conponent/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
