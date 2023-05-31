import './App.css';
import {UpdateEmployee} from "./components/employee/Update";
import {Route, Routes} from "react-router-dom";
import {CreateEmployee} from "./components/employee/Create";

function App() {
    return (
        <Routes>
            <Route path='/create' element={<CreateEmployee/>}/>
            <Route path='/update/:id' element={<UpdateEmployee/>}/>
        </Routes>
    )
}

export default App;
