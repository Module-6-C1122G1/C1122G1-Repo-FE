import { Outlet, Link } from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
const CommonLayout = () => {
    return (
        <>
            <Header/>
            <div  className="page-container" >
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
};

export default CommonLayout;

