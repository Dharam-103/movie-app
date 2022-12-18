import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Components/Home';
import Login from '../Components/Login';
import Pricing from '../Components/Pricing';
import PrivateRoute from '../Components/PrivateRoute';
import Register from '../Components/Register';
import Trending from '../Components/Trending';
import TvShow from '../Components/TvShow';
import SingleMoviePage from '../Pages/SingleMoviePage';
import SingleTvPage from "../Pages/SingleTvPage";

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route  path="/login"  element={<Login />} />
            <Route  path="/register"  element={<Register />} />
            <Route  path="/tvshows"  element={<PrivateRoute><TvShow /></PrivateRoute>} />
            <Route  path="/trending"  element={<PrivateRoute><Trending /></PrivateRoute>} />
            <Route  path="/pricing"  element={<PrivateRoute><Pricing /></PrivateRoute>} />
            <Route path="/movie/:id" element={<PrivateRoute><SingleMoviePage /></PrivateRoute>} />
            <Route path="/tv/:id"  element={<PrivateRoute><SingleTvPage /></PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoutes;