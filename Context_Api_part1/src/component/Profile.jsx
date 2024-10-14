import React,{useContext} from 'react'
import userContext from '../context/userContext'

export default function Profile() {
    const {user} = useContext(userContext);
    
  if(!user){
    return <>Please Login first</>
  }else{
    return <>UserName : {user.name} {" "} Password : {user.pass}</>
  }
}
