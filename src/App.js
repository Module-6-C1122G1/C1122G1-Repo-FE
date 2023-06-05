
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
// import ResetPassword from "./pages/Login/ResetPassword";
import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import { CreateFilm } from "./components/film/CreateFilm";
import CreateDiscount from "./components/discount/CreateDiscount";
import UpdateDiscount from "./components/discount/UpdateDiscount";
// import Login from "./pages/Login/Login";
// import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";
import EmployeeList from "./components/employee/List";
import {DetailDiscount} from "./components/discount/DetailDiscount";
import ListDiscount from "./components/discount/ListDiscount";
import { ListTicket } from "./components/ticket/ListTicket";
import BookingTicket from "./pages/Booking/BookingTicket";
import DiscountList from "./components/discount/ListDiscount";
import DiscountListPublic from "./components/discount/DiscountList";
import {ListFilm} from "./components/film/ListFilm";
import {CreateEmployee} from "./components/employee/Create";
import {UpdateEmployee} from "./components/employee/Update";
import {UpdateFilm} from "./components/film/UpdateFilm";
import {TickBookingList} from "./components/customer/detail-customer/customer_ticket";
import {CustomerPointHistory} from "./components/customer/detail-customer/customer_point_history";
import {ListShowTime} from "./components/show_time/ListShowTime";



function App() {
    return (
        <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        {/*<Route path="/film" element={<ListAllFilm />} />*/}
        <Route path="/admin/film/create" element={<CreateFilm />} />
        <Route path="/admin/film/edit/:id" element={<UpdateFilm />} />
        <Route path="/admin/film/list" element={<ListFilm />} />
        <Route path="/admin/showtime/list" element={<ListShowTime />} />
        <Route path="/booking-ticket" element={<BookingTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/discount" element={<DiscountListPublic />} />
        <Route path="/discount/create" element={<CreateDiscount />} />
        <Route path="/discount/update/:id" element={<UpdateDiscount />} />
        <Route path="/detail-discount/:id" element={<DetailDiscount />} />
        <Route path='/create-employee' element={<CreateEmployee/>}/>
        <Route path='/update-employee/:id' element={<UpdateEmployee/>}/>
        <Route path='/employee' element={<EmployeeList/>}/>
        <Route path='/discount/list' element={<ListDiscount/>}/>
        <Route path='/ticket-customer' element={<TickBookingList />} />
        <Route path='/ticket-customer/history' element={<CustomerPointHistory />} />
      </Route>
    </Routes>
  );

}



export default App;

