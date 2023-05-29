import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login";
import {ListShowRoom} from "./components/show_room/ListShowRoom";
import React from "react";
import DetailShowRoom from "./components/show_room/DetailShowRoom";


function App() {
    return (
        <Routes>
            <Route path='' element={<CommonLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/api/admin/showroom/list' element={<ListShowRoom/>}/>
                <Route path='/api/admin/showroom/detail/:id' element={<DetailShowRoom/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
};

export default App;
