import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login";
// import BookingTicket from "./pages/Booking/BookingTicket";
import React from "react";
import {TickBookingList} from "./components/customer/detail-customer/customer_ticket";
import {CustomerPointHistory} from "./components/customer/detail-customer/customer_point_history";

// import {Demo} from "./components/booking-ticket/Demo";


function App() {
    return (
        <Routes>
            <Route path='' element={<CommonLayout/>}>
                {/*<Route path='customer_ticket' element={<TickBookingList />} />*/}
                <Route path='' element={<TickBookingList/>}/>
                {/*<Route path='' element={<CustomerPointHistory/>}/>*/}
                {/*<Route path='/booking-ticket' element={<BookingTicket/>}/>*/}
            </Route>
            {/*<Route path="/login" element={<Login/>}/>*/}
        </Routes>
    )
};

export default App;
