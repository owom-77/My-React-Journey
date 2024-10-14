import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const { id } = useParams()
    console.log(id)

    return (
        <div className='bg-gray-700 text-white text-3xl p-4'>User Id : {id}</div>
    )
}
