import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import react from 'react'

// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Clikc me to vist google'
// }

// function NewApp(){
//   return (
//     <h2>My new function</h2>
//   )
// }

const user = "new User by aditya"

const ReactElement = react.createElement(
  'a',
  {href : "https://google.com",target : "_black"},
  "click me to visit google",
  user
)

const h1 = react.createElement(
  'h1',
  {},
  "This is omkar page",
  user
)

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Click me to vist google</a>
// ) 

// console.log(typeof anotherElement)



const root = createRoot(document.querySelector('#omkar'))
root.render(
  //anotherElement
  //<App/>
  //ReactElement
  h1
)
