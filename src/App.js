import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import List from "./components/film/List";

import CreateDiscount from "./components/discount/CreateDiscount";
import UpdateDiscount from "./components/discount/UpdateDiscount";


function App() {
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin/film/create" element={<CreateFilm/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/confirm-ticket' element={<ConfirmTicket/>}/>
<Route path='/discount/create' element={<CreateDiscount/>} />
        <Route path='/discount/update/:id' element={<UpdateDiscount/>} />
      </Routes>


    );
}


export default App;
