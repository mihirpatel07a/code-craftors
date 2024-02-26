import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./../pages/Login";
import SignUp from "./../pages/Register";
import Settings from "../pages/setting";
import Home from "../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../../components/pages/ThankYou";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import Temp from "../Admin/AdminHome";
import AdminTours from "../Admin/AdminTours";
import AdminUsers from "../Admin/AdminUsers";

const Routers = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <Routes>
      {user && user.email === "admin@gmail.com" ? (
        <Route path="/" element={<Navigate to="/admin/home" />} />
      ) : (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
        </>
      )}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/admin/tours" element={<AdminTours />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      

    </Routes>
  );
};

export default Routers;
