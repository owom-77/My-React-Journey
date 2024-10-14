import React,{useState} from 'react'
import userContext from './userContext';

export default function UserProvider({children}) {

    const [user,setUser] = useState('');
    
  return (
    <userContext.Provider value={{user,setUser}}>
    {children}
    </userContext.Provider>
  )
}
