import './App.css'
import Card from './Card';

function App() {

  const arr = [1, 2, 3, 4];

  const obj1 = {
    id: 334,
    name: "omkar",
    age: 23,
  }

  return (
    <>
      <Card name="omkar" obj1={obj1} btnText="About Me" />
      <Card name="aditya" obj1={obj1} />
    </>
  )
}

export default App
