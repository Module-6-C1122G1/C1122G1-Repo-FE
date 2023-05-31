import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";

import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import React from "react";
import {CreateFilm} from "./components/film/CreateFilm";
import List from "./components/film/List";
import {UpdateFilm} from "./components/film/UpdateFilm";
import {ListFilm} from "./components/film/ListFilm";


function App() {
    return (
        <Routes>
            <Route path="" element={<CommonLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/film/list" element={<ListFilm/>}></Route>
                <Route path="/admin/film/create" element={<CreateFilm/>}></Route>
                <Route path="/admin/film/edit/{id}" element={<UpdateFilm/>}></Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/confirm-ticket' element={<ConfirmTicket/>}/>
            </Route>
        </Routes>

    );
}


export default App;
