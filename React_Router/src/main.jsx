import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import {User,Home,Contact,About,GitHub} from "./index.js"
import { gitHubApi } from './conponent/GitHub.jsx'

// const Allroutes = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path : '/user/:id',
//         element : <User/>
//       },
//       {
//         path : '/contact',
//         element : <Contact/>
//       },
//       {
//         path : '/github',
//         element : <GitHub/>
//       }
//     ]
//   }
// ])

const Allroutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about'element = {<About/>}/>
      <Route path='/user/:id' element = {<User/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route 
      path='/github' 
      element = {<GitHub/>}
      loader = {gitHubApi}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Allroutes}/>
  </StrictMode>,
)
