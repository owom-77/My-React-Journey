import React,{useId} from 'react'

function Input({
    label,
    value,
    type = "text",
    setValue,
    placeholder,
    ...props
}) {

    const id = useId()

    return (
        <div className='text-center inline'>
            {label && <label className='inline-block mr-4 text-white' htmlFor={id}>{label}</label>}

            <input 
            className='bg-blue-500 text-white'
            type = {type}
            placeholder = {placeholder}
            value = {value}
            onChange={(e)=> setValue && type == "file" ? setValue(e=>e.target.files[0]) : setValue(e.target.value)}
            {...props}
            />
        </div>
    )
}

export default Input