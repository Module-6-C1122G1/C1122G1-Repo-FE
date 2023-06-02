import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import List from "./components/film/List";
import CreateDiscount from "./components/discount/CreateDiscount";
import UpdateDiscount from "./components/discount/UpdateDiscount";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";
// import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
// import BookingTicket from "./pages/Booking/BookingTicket";

import {DetailDiscount} from "./components/discount/DetailDiscount";
import ListDiscount from "./components/discount/ListDiscount";
import DetailShowRoom from "./components/show_room/DetailShowRoom";
import {ListShowRoom} from "./components/show_room/ListShowRoom";
import Home from "./pages/Home";


function App() {

    return (
        <Routes>

            <Route path='' element={<CommonLayout/>}>
                {/*<Route path='' element={<Home/>}/>*/}
                <Route path='/admin/showroom/list' element={<ListShowRoom/>}/>
                <Route path='/admin/showroom/detail/:id' element={<DetailShowRoom/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/film/create" element={<CreateFilm/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/discount-list' element={<ListDiscount/>}/>
                <Route path='/discount/create' element={<CreateDiscount/>}/>
                <Route path='/discount/update/:id' element={<UpdateDiscount/>}/>
                <Route path='/detail-discount/:id' element={<DetailDiscount/>}/>
            </Route>
        </Routes>

    );
}


export default App;
