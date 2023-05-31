import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Discount from "./components/discount/List"

function App() {
  return (
    <Routes>
                <Route path='/discount'element={<Discount/>}></Route>
            
        </Routes>

  );
}



export default App;
