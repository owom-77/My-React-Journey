import { createContext,useContext } from "react";

const todoContext = createContext({
    todos : [],
    addTodo : (msg)=>{},
    updateTodo : (id,msg)=>{},
    deleteTodo : (id)=>{},
    checkTodo : (id)=>{},
})

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
    return useContext(todoContext)
}