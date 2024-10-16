import React, { useState } from 'react'
import useTodo from '../context/todocontext';

export default function List_Item({
    todo,
}) {

    const {updateTodo,checkTodo,deleteTodo} = useTodo()

    const [msg,setMsg] = useState(todo.msg);
    const [isTodoEditable,setIsTodoEditable] = useState(false)

    const edit = ()=>{
        updateTodo(todo.id,msg);
        setIsTodoEditable(false)
    }

    const checkT = ()=>{
        checkTodo(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.check ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                //checked = {todo.check}
                onChange={checkT}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.check ? "line-through" : ""}`}
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                readOnly = {!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    isTodoEditable ? edit() : setIsTodoEditable((prev)=>!prev)
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
               onClick={()=>deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}
