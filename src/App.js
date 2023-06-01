import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import CreateDiscount from "./components/discount/CreateDiscount";
import UpdateDiscount from "./components/discount/UpdateDiscount";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";
import BookingTicket from "./pages/Booking/BookingTicket";
import {DetailDiscount} from "./components/discount/DetailDiscount";


function App() {
    return (
        <Routes>
            <Route path="" element={<CommonLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/film/create" element={<CreateFilm/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/booking-ticket' element={<BookingTicket/>}/>
                <Route path='/discount/create' element={<CreateDiscount/>}/>
                <Route path='/discount/update/:id' element={<UpdateDiscount/>}/>
                <Route path='/detail-discount/:id' element={<DetailDiscount/>}/>
            </Route>
        </Routes>

    );
}

export default App;
