import "./index.css";

const Header = () => {
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.style.backgroundColor = 'hsl(207, 19%, 11%)';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
  return (
    <>
      <header className="header" data-header="">
        <div className="container">
          <div className="overlay" data-overlay="" />
          <a href="./index.html" className="logo">
            <img
              src="assets\img\home\logo.png"
              alt="Filmlane logo"
              style={{ height: 80, width: 150 }}
            />
          </a>
          <div className="header-actions">
            <div className="search-box">
              <button className="btn-search">
                <i className="fas fa-search" />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Tìm kiếm phim..."
              />
            </div>
            {/* <div className="lang-wrapper">
              <label htmlFor="language">
                <ion-icon name="globe-outline" />
              </label>
              <select name="language" id="language">
                <option value="vn">VN</option>
                <option value="en">EN</option>
              </select>
            </div> */}
            <button className="btn btn-primary">Đăng nhập</button>
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
                <a href="./index.html" className="navbar-link">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Phim
                </a>
              </li>
              {/* <li>
      <a href="#" class="navbar-link">Góc điện ảnh</a>
    </li> */}
              <li>
                <a href="#" className="navbar-link">
                  Sự kiện
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Rạp giá vé
                </a>
              </li>
              {/* <li>
      <a href="#" class="navbar-link">Hỗ trợ</a>
    </li> */}
            </ul>
            <ul className="navbar-social-list">
              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-pinterest" />
                </a>
              </li>
              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-youtube" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
