import "./App.css";
import {Route, Routes} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import CreateDiscount from "./components/discount/CreateDiscount";
import UpdateDiscount from "./components/discount/UpdateDiscount";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";
import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import {TickBookingList} from "./components/customer/detail-customer/customer_ticket";
import {CustomerPointHistory} from "./components/customer/detail-customer/customer_point_history";
import BookingTicket from "./pages/Booking/BookingTicket";
import {DetailDiscount} from "./components/discount/DetailDiscount";
import ListDiscount from "./components/discount/ListDiscount";
import {CreateEmployee} from "./components/employee/Create";
import {UpdateEmployee} from "./components/employee/Update";

export default function App() {
    return (
        <Routes>
            <Route path="" element={<CommonLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/film/create" element={<CreateFilm/>}></Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/confirm-ticket' element={<ConfirmTicket/>}/>
                <Route path='/ticket-customer' element={<TickBookingList/>}/>
                <Route path='/ticket-customer/history' element={<CustomerPointHistory/>}>
                </Route>
                <Route path='/booking-ticket' element={<BookingTicket/>}/>
                <Route path="/admin/film/create" element={<CreateFilm/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/discount-list' element={<ListDiscount/>}/>
                <Route path='/discount-create' element={<CreateDiscount/>}/>
                <Route path='/discount-update/:id' element={<UpdateDiscount/>}/>
                <Route path='/detail-discount/:id' element={<DetailDiscount/>}/>
                <Route path='/create-employee' element={<CreateEmployee/>}/>
                <Route path='/update-employee/:id' element={<UpdateEmployee/>}/>
            </Route>
        </Routes>
    )
}