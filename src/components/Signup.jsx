import React, {  useState } from 'react'
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export const Signup = () => {
const Navigate=useNavigate()
 const arr=JSON.parse(localStorage.getItem("user"))||[]
    const[log,setLog]=useState({
      name:"",
      email:"",
      phone:"",
      password:"",
    })
    console.log(log)

    const saveData =(e)=>{
        e.preventDefault()
     let logData=arr.filter((el)=>{
       return el.email===log.email||el.phone===log.phone
     })
     if(logData.length>=1){
        swal("All ready register")
     }else{
        arr.push(log);
        localStorage.setItem("user",JSON.stringify(arr))

        swal("Registration Successfully")
        Navigate("/login")
     
     }
    }
    console.log(arr)


  return (
    <div className='body'>
    <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form onSubmit={saveData}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" id="name"name="name"value={log.name} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" id="email" name="email"value={log.email} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" name="phone"value={log.phone} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password"id="password" name="password"value={log.password} required onChange={(e)=>setLog({...log, [e.target.name]:e.target.value})} />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required id="conform-password"/>
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Trans-gender</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register"id="register"/>
        </div>
      </form>
      Already a member? <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
    </div>
  </div>
  </div>
  )
}

