import react from 'react';

export default function NewHello({val,obj1}){
    
    return (
        <>
        <h2>This is new component {val}</h2>
        <p>{obj1.name.toUpperCase()}</p>
        </>
    )
}