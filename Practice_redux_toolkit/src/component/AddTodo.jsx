import React, { useState } from 'react'
import { addTodo } from '../store/todoSlice';
import {useDispatch} from 'react-redux';

export default function AddTodo() {

    const [msg,setMsg] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e)=> {
        e.preventDefault();

        if(!msg) return;
        dispatch(addTodo(msg))
        setMsg('')
    }
    
    return (
        <form  onSubmit={submitHandler}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
