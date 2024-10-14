import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserProvider from './context/UserProvider'

function App() {

  return (
    <UserProvider>
      <h1>Context Api</h1>
    <Login/>
    <Profile/>
    </UserProvider>
  )
}

export default App
