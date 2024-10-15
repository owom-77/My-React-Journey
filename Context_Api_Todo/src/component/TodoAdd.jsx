import React, { useState } from 'react'
import useTodo from '../context/todoContext';

export default function TodoAdd() {

    const {addMsg} = useTodo();

    const [msg,setMsg] = useState('');

    const Add = (e)=>{
        e.preventDefault();
        if(!msg) return 
        addMsg({msg,check : false})
        setMsg("");
    }

    return (
        <form onSubmit={Add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
