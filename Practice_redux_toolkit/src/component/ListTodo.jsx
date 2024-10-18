import React, { useState } from 'react'
import { updateTodo,deleteTodo } from '../store/todoSlice';
import { useDispatch } from 'react-redux';

export default function ListTodo({todo}) {

    const [msg,setMsg] = useState(todo.text);
    const [isTodoEditable,setIsEditable] = useState(false);
    const dispatch = useDispatch();

    const edit = ()=>{
        dispatch(updateTodo({todo,msg}))
        setIsEditable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-white `}
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                readOnly = {!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    isTodoEditable ? edit() : setIsEditable((prev)=>!prev)
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={()=>dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
}
