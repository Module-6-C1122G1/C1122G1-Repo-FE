import './App.css';
import React from "react";
import {CreateCustomerAccount} from "./components/customer/Create";
import {UpdateCustomer} from "./components/customer/Update";

function App() {
    return (
        <div>
            <CreateCustomerAccount/>
            <UpdateCustomer/>
        </div>
    )
};

export default App;
