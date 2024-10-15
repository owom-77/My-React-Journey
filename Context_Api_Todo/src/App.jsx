import { useEffect, useState } from "react"
import { TodoProvider } from "./context/todoContext"
import TodoAdd from "./component/TodoAdd"
import TodoItem from "./component/TodoItem"

function App() {

  const [todos, setTodos] = useState([])

  const addMsg = (msg) => {
    setTodos((prev) => [{ id: Date.now(), ...msg }, ...prev])
  }

  const deleteMsg = (id) => {
    setTodos((prev) => prev.filter((val) => val.id !== id))
  }

  const updateMsg = (id, msg) => {
    setTodos((prev) => prev.map((val) => val.id == id ? { ...val,msg : msg } : val))
  }

  const todoCheck = (id) => {
    setTodos((prev) => prev.map((val) => val.id === id ? {...val,check : !val.check } : val))
  }
  console.log(todos)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addMsg, deleteMsg, updateMsg, todoCheck }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo Using Context Api</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoAdd />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
