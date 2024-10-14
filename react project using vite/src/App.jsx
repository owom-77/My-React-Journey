import NewHello from './NewHello'

export default function App() {
  const user = [1,2,3,4,5,6,7]

  const vari = "New variable"

  const obj1 = {
    id : 23,
    name : "omkar",
    email : "omkar@gmail.com"
  }
  
  return (
    <>
    <h1>Omkar with react.js {vari}</h1>
      {user.map((val)=>(
        <NewHello val = {val} obj1 = {obj1} key = {val}/>
      ))}
    </>
  )
}

