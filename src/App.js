
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";

import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import List from "./components/film/List";
import {TickBookingList} from "./components/customer/detail-customer/customer_ticket";
import {CustomerPointHistory} from "./components/customer/detail-customer/customer_point_history";
import BookingTicket from "./pages/Booking/BookingTicket";


function App() {
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin/film/create" element={<CreateFilm/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/confirm-ticket' element={<ConfirmTicket/>}/>
              <Route path='/ticket-customer' element={<TickBookingList/>} />
        <Route path='/ticket-customer/history' element={<CustomerPointHistory />} ></Route>
          <Route path='/booking-ticket' element={<BookingTicket />} />
      </Route>
    </Routes>

  );
}
export default App;
