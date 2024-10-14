import React, { useState, useContext } from 'react'
import userContext from '../context/userContext'

export default function Login() {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const { setUser } = useContext(userContext);

    const submitHandler = (e) => {
        e.preventDefault()
        setUser({ name, pass })
    }

    return (
        <div>
            <input
                type='text'
                placeholder='user name'
                onChange={(e) => setName(e.target.value)}
            />
            {" "}
            <input
                type='password'
                placeholder='password'
                onChange={(e) => setPass(e.target.value)}
            />
            {" "}
            <button
                type='submit'
                onClick={submitHandler}
            >Submit</button>
        </div>
    )
}
