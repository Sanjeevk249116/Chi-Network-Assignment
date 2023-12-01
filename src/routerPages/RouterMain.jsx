import React from 'react'
import { Routes, Route } from "react-router-dom";
import Movies from '../components/Movies';
import { Signup } from '../components/Signup';
import { Login } from '../components/Login';
import MoviesDetails from '../components/MoviesDetails';
import Favorite from '../components/Favorite';
import MoviesData from '../components/MoviesData';
import NotFound from '../components/NotFound';
import PrivateRoutes from '../components/PrivateRoutes';



function RouterMain() {
  return (
    <Routes>
      <Route path='/'element ={<Movies/>}/>
      <Route path='/signup'element ={<Signup/>}/>
      <Route path='/login'element ={<Login/>}/>
      <Route path='/details'element ={<MoviesDetails/>}/>
      {/* <Route path='/favorites'element ={<Favorite/>}/> */}
      <Route path='/movies'element ={<MoviesData/>}/>
      <Route path='*'element={<NotFound/>}/>
     <Route path='favorites' element={
       <PrivateRoutes>
       <Favorite/>
       </PrivateRoutes>
     }/>
      
     
    </Routes>
  )
}

export default RouterMain
