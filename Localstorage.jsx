import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Localstorages() {

    const [user,setUser]=useState({})
    let nav=useNavigate()

    const Handlechange=(e)=>{
          setUser({...user,[e.target.name]:e.target.value})
    }
    console.log(user);

    const Handlesubmit=()=>{
        let user_id=101
        let old=localStorage.getItem("Users")
        old=JSON.parse(old) ||[]
        if(old){
            if(old.length==0||old.length==null){
                user_id=101
            }
            else{
                user_id=old[old.length-1].user_id+1
            }
        }

        let newuser={
            user_id:user_id,
            name:user.name,
            phone:user.phone,
            email:user.email

        }
        const alldata=[...old,newuser]
        localStorage.setItem("Users",JSON.stringify(alldata))
        nav('/View')
    }
  return ( 
    <div>
        <h1 style={{backgroundColor:"red",color:"black"}}>LocalStorage</h1>
        <h3>Insert</h3>
        <input type="text" onChange={Handlechange} name="name" placeholder='Enter Your Name'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="number" onChange={Handlechange} name="phone" placeholder='Enter Your Phone'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="email" onChange={Handlechange} name="email"  placeholder='Enter Your Email'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={Handlesubmit}>Insert</button>
    </div>
  )
}