import "./App.css";
import { Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";

import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import React from "react";
import { ListTicket } from "./components/ticket/ListTicket";


function App() {
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route path="/" element={<ListTicket />} />
        
      </Route>
    </Routes>

  );
}



export default App;
