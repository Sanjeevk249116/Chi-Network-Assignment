import React from 'react'
import { Routes, Route } from "react-router-dom";
import Movies from '../components/Movies';
import { Signup } from '../components/Signup';
import { Login } from '../components/Login';



function RouterMain() {
  return (
    <Routes>
      <Route path='/'element ={<Movies/>}/>
      <Route path='/signup'element ={<Signup/>}/>
      <Route path='/login'element ={<Login/>}/>
     
    </Routes>
  )
}

export default RouterMain
