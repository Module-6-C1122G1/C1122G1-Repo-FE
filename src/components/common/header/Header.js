import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Avatar } from "@mui/material";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [username, setUsername] = useState(null);
  const name = useSelector((state) => state.api.account);
  const location = useLocation();

  useEffect(() => {
    if (name) {
      setUsername(name);
    } else {
      setUsername(null);
    }
  }, [name]);
  useEffect(() => {
    if (location.pathname !== "/") {
      let header = document.querySelector(".header");
      header.style.padding = "0px";
      header.style.backgroundColor = "hsl(207, 19%, 11%)";
    } else {
      window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        header.style.padding = "0px";
        if (window.scrollY > 0) {
          header.style.backgroundColor = "hsl(207, 19%, 11%)";
        } else {
          header.style.backgroundColor = "transparent";
        }
      });
    }
  }, [location]);
  return (
    <>
      <header className="header" data-header="">
        <div className="container">
          <div className="overlay" data-overlay="" />
          <a href="./index.html" className="logo">
            <img
              src="assets\img\home\logo.png"
              alt="Filmlane logo"
              style={{ height: 60, width: 150 }}
            />
          </a>
          <div className="header-actions">
            <div className="search-box">
              <button className="btn-search d-flex">
                <FaSearch />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Tìm kiếm phim..."
              />
            </div>
            {username ? (
              <Avatar>H</Avatar>
            ) : (
              <Link to="/login" className="login-btn text-decoration-none">
                ĐĂNG NHẬP
              </Link>
            )}
          </div>
          <button className="menu-open-btn" data-menu-open-btn="">
            <ion-icon name="reorder-two" />
          </button>
          <nav className="navbar" data-navbar="">
            <div className="navbar-top">
              <a href="./index.html" className="logo">
                <img src="assets\img\home\logo.png" alt="Filmlane logo" />
              </a>
              <button className="menu-close-btn" data-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link text-decoration-none">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/film" className="navbar-link text-decoration-none">
                  Phim
                </Link>
              </li>
              <li>
                <Link
                  to="/booking-ticket"
                  className="navbar-link text-decoration-none"
                >
                  Đặt vé
                </Link>
              </li>
              <li>
                <Link
                  to="/discount"
                  className="navbar-link text-decoration-none"
                >
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link
                  to="/show-time"
                  className="navbar-link  text-decoration-none"
                >
                  Lịch chiếu
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
