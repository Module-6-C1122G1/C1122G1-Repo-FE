import { Outlet, Link } from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
const CommonLayout = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
