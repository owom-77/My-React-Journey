import { createContext, useContext } from "react";

const todoContext = createContext({
    todos : [{}],
    addMsg : (msg)=>{},
    deleteMsg : (msg)=>{},
    updateMsg : (msg)=>{},
    todoCheck : (check)=>{},
})

export const TodoProvider = todoContext.Provider;

export default function useTodo(){
    return useContext(todoContext);
}

