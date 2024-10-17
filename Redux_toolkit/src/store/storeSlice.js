import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const storeSlice = createSlice({
    name : "todo",
    initialState,

    reducers : {

        addTodo : (state,action)=>{
            const newTodo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(newTodo);
        },

        deleteTodo : (state,action)=>{
            state.todos = state.todos.filter((Val)=>Val.id != action.payload)
        },

        updateTodo : (state,action)=>{
            // console.log(action.payload.todo.id)
            // console.log(action.payload.msg)
            state.todos = state.todos.map((val)=>val.id === action.payload.todo.id ? {...val,text : action.payload.msg} : val)
        }
    }
})

export const {addTodo,deleteTodo,updateTodo} = storeSlice.actions;

export default storeSlice.reducer;