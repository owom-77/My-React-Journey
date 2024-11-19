import { createContext, useContext } from "react";

const context = createContext({
    todos : [],
    addTodo : ()=>{},
    deleteTodo : ()=>{},
    updateTodo : ()=>{}
})

export const ContextProvider = context.Provider;

export default  function useTodo() {
    return useContext(context)
}