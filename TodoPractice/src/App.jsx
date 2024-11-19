import { useState } from "react";
import Input from "./component/Input";
import ListTodo from "./component/ListTodo";
import { ContextProvider } from "./context/context";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [{ id: Date.now(), text: todoInput }, ...prev]);
    setTodoInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, msg) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: msg } : todo))
    );
  };

  return (
    <ContextProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-8">
        <form onSubmit={addTodo} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-white text-center mb-4">
            Todo List
          </h1>
          <Input
            label="Add Todo"
            value={todoInput}
            setValue={setTodoInput}
            placeholder="Enter a new task"
            className="w-full p-3 bg-gray-700 text-white rounded mb-4"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        <div className="w-full max-w-lg mt-8">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <ListTodo post={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
