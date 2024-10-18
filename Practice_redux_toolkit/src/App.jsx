import AddTodo from "./component/AddTodo"
import {useSelector,useDispatch} from "react-redux"
import ListTodo from "./component/ListTodo";
import { useEffect } from "react";
import { addTodo } from "./store/todoSlice";

function App() {

  const todos = useSelector((state)=>state.todos);
  const dispatch = useDispatch();

  console.log(todos)

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos.length > 0){
      for(let i=0;i<todos.length;i++){
        dispatch(addTodo(todos[i].text))
      }
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo With Redux and Local Storage</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((val)=>(
              <div key={val.id}
              className="w-full"
              >
                <ListTodo todo = {val}/>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default App
