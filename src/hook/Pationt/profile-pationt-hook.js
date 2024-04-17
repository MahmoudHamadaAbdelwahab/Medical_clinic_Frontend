import React, { useEffect, useState } from 'react'

export default function ProfilePationtHook() {
  const [user , setUser] = useState('');
  useEffect(()=>{
     if(localStorage.getItem("login") != null){
       setUser(JSON.parse(localStorage.getItem("login")));
     }
  },[]);
return[user];
}
