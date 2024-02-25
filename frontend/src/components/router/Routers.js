import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './../pages/Login';
import SignUp from './../pages/Register';
import Settings from '../pages/setting';
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/register' element={<Signup/>} /> */}
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/settings' element={<Settings/>} />
    </Routes>
  )
}

export default Routers
