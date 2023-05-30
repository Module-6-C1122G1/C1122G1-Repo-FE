import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login";
// import BookingTicket from "./pages/Booking/BookingTicket";
import List from "./components/customer/List";
import Update from "./components/customer/Update";

function App() {
    return (
        <Routes>
            {/*<Route path='' element={<CommonLayout/>}>*/}
                <Route path='' element={<Home/>}/>
                <Route path="/customer" element={<List/>}/>
            <Route path='/edit/:id' element={<Update />}> </Route>
                {/*<Route path='/booking-ticket' element={<BookingTicket/>}/>*/}
            {/*</Route>*/}
            {/*<Route path="/login" element={<Login/>}/>*/}
        </Routes>
    )
};

export default App;
