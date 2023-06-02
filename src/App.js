import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";

import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import React from "react";
import {CreateCustomerAccount} from "./components/customer/Create";
import {UpdateCustomer} from "./components/customer/Update";


function App() {
    return (
        <Routes>

            <Route path="/update/:id" element={<UpdateCustomer/>}/>
            <Route path="/create" element={<CreateCustomerAccount/>}/>
        </Routes>

    );
}


export default App;
