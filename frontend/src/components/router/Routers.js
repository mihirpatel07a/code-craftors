import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './../pages/Login';
import SignUp from './../pages/Register';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
      
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
       
    </Routes>
  )
}

export default Routers
