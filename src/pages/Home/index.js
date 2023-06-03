import React from "react";
import "./index.css";
import ListFilm from "../../components/film/List";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const product ={
    id: 2,
  }

  return (
    <>
      <main>
        <article>
          <section>
            {/* <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">ĐN Cinema</p>
                <h1 className="h1 hero-title">
                  Không giới hạn <strong>Phim </strong> Chương trình TV
                </h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 18</div>
                    <div className="badge badge-outline">3D</div>
                  </div>
                  <div className="ganre-wrapper">
                    <a href="#">Fast X,</a>
                    <a href="#">Furious 10</a>
                  </div>
                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline" />
                      <time dateTime={2023}>2023</time>
                    </div>
                    <div>
                      <ion-icon name="time-outline" />
                      <time dateTime="PT128M">141 phút</time>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">
                  <ion-icon name="play" />
                  <span>Xem ngay</span>
                </button>
              </div>
            </div> */}
            <Slider {...settings}>
              <div>
                <img
                  src="https://i.imgur.com//gr9KBOV.jpg"
                  alt="slide1"
                  width={"100%"}
                  height={"800px"}
                />
                <Link to={`/booking-ticket/${product.id}`} className="btn btn-info">Update</Link>
              </div>
              <div>
                <img
                  src="https://kenh14cdn.com/203336854389633024/2023/4/21/photo-18-16820856866501445796753.png"
                  alt="slide2"
                  width={"100%"}
                  height={"800px"}
                />
              </div>
              <div>
                <img
                  src="https://i.ytimg.com/vi/iauQFDZhHBc/maxresdefault.jpg"
                  alt="slide3"
                  height={"800px"}
                  width={"100%"}
                />
              </div>
            </Slider>
          </section>
          <ListFilm />
        </article>
      </main>
    </>
  );
};
export default Home;
