import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";
import EmployeeList from "./components/employee/List";


function App() {
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/employee' element={<EmployeeList />} />
      </Route>
    </Routes>
  );
}


export default App;
