import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import DiscountList from "./components/discount/ListDiscount"

function App() {
  return (
    <Routes>
                <Route path='/discount'element={<DiscountList/>}></Route>
            
        </Routes>

  );
}



export default App;
