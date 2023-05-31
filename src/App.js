import "./App.css";
import {Routes, Route} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import React from "react";
import {ListShowRoom} from "./components/show_room/ListShowRoom";
import DetailShowRoom from "./components/show_room/DetailShowRoom";

function App() {
    return (
        <Routes>
            <Route path='' element={<CommonLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/admin/showroom/list' element={<ListShowRoom/>}/>
                <Route path='/admin/showroom/detail/:id' element={<DetailShowRoom/>}/>
            </Route>
        </Routes>
    );
}

export default App;
