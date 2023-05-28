import React from "react";
import "./index.css";
import ListFilm from "../../components/film/List";
const Home = () => {
  return (
    <>
      <main>
        <article>
          <section className="hero">
            <div className="container">
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
            </div>
          </section>
          <ListFilm />
        </article>
      </main>
    </>
  );
};
export default Home;
