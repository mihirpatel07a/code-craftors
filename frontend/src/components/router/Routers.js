import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './../pages/Login';
import SignUp from './../pages/Register';
import Settings from '../pages/setting';
import Home from "../pages/Home";
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';
import ThankYou from '../../components/pages/ThankYou';
// import About from '../pages/About';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/register' element={<Signup/>} /> */}
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/settings' element={<Settings/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
        <Route path='/tours/search' element={<SearchResultList/>} />
        {/* <Route path='/about' element={<About/>} /> */}
    </Routes>
  )
}

export default Routers
