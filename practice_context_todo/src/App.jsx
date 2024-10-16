import { useEffect, useState } from "react";
import { TodoProvider } from "./context/todocontext"
import AddItem from "./component/AddItem";
import List_Item from "./component/List_Item";

function App() {

    const [todos,setTodos] = useState([]);

    const addTodo = (msg)=>{
      setTodos((prev)=>[{id : Date.now(),...msg},...prev])
    }

    const updateTodo = (id,msg)=>{
      setTodos((prev)=>prev.map((val)=>val.id === id ? {...val,msg : msg} : val))
    }

    const deleteTodo = (id)=>{
      setTodos((prev)=>prev.filter((val)=>val.id !== id))
    }

    const checkTodo = (id)=>{
      setTodos((prev)=>prev.map((val)=>val.id === id ? {...val,check : !val.check} : val))
    }

    console.log(todos)

    useEffect(()=>{
      const todo = JSON.parse(localStorage.getItem('todos'));

      if(todo.length > 0){
        setTodos(todo);
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

  return (

    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,checkTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Practice of Context Api Todo</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddItem/>

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((val)=>(
              <div key = {val.id} className='w-full'>
                  <List_Item todo = {val}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
