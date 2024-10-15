import React, { useState } from 'react'
import useTodo from '../context/todoContext';

export default function TodoItem({todo}) {

    const {updateMsg,deleteMsg,todoCheck} = useTodo();

    const [isTodoEditable,setTodoEditable] = useState(false);
    const [msg,setMsg] = useState(todo.msg);

    const edit = ()=>{
        updateMsg(todo.id,msg)
        setTodoEditable(false)
    }   

   const TCheck = ()=>{
        todoCheck(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.check ? "bg-[#c6e9a7] line-through" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked = {todo.check}
                onChange={TCheck}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                readOnly = {!isTodoEditable}
            />  
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{

                    if(isTodoEditable){
                        edit(todo.id)
                    }else{
                        setTodoEditable((prev)=>!prev);
                    }
                }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={()=>deleteMsg(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}
