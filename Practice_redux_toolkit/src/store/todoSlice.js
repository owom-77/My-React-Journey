import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [],
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,

    reducers : {

        addTodo : (state,action)=> {
            const newObj = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(newObj);
        },

        deleteTodo : (state,action)=> {
            state.todos = state.todos.filter((val)=>val.id != action.payload);
        },

        updateTodo : (state,action)=> {
            state.todos = state.todos.map((val)=>val.id === action.payload.todo.id ? {...val,text : action.payload.msg} : val)
        }
    }
})

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;

