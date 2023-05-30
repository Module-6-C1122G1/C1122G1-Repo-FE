import React from "react";

export function ListFilm() {
  return (
    <div>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle">Hot hiện nay</p>
              <h2 className="h2 section-title">Phim đang chiếu</h2>
            </div>
            <ul className="filter-list">
              <li>
                <button className="filter-btn">Hành động</button>
              </li>
              <li>
                <button className="filter-btn">Hài kịch</button>
              </li>
              <li>
                <button className="filter-btn">Cuộc sống</button>
              </li>
            </ul>
          </div>
          <ul className="movies-list  has-scrollbar">
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/fast_x_700x1000px.jpg"
                      alt="The Northman movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">FAST AND FURIOUS X (C16)</h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">3D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT137M">140 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>10.0</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/339082728_762916032238008_8555442761793095442_n.jpg"
                      alt="Doctor Strange in the Multiverse of Madness movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      LẬT MẶT 6 - TẤM VÉ ĐỊNH MỆNH (C16)
                    </h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">2D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT126M">135 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://tuiriviu.com/wp-content/uploads/2023/05/review-guardian-of-the-galaxy-3-tuiriviu-1-819x1024.webp"
                      alt="Memory movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">VỆ BINH DẢI NGÂN HÀ 3 (C13)</h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">3D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="">150 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/1_1681877154581.jpg"
                      alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      CHUYỆN XÓM TUI - CON NHÓT MÓT CHỒNG (C16)
                    </h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">2D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT107M">112 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container" style={{ marginTop: 100 }}>
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <h2 className="h2 section-title">Phim sắp khởi chiếu</h2>
            </div>
            <ul className="filter-list">
              <li>
                <button className="filter-btn">Hành động</button>
              </li>
              <li>
                <button className="filter-btn">Hài kịch</button>
              </li>
              <li>
                <button className="filter-btn">Cuộc sống</button>
              </li>
            </ul>
          </div>
          <ul className="movies-list  has-scrollbar">
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/fast_x_700x1000px.jpg"
                      alt="The Northman movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">FAST AND FURIOUS X (C16)</h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">3D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT137M">140 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>10.0</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/339082728_762916032238008_8555442761793095442_n.jpg"
                      alt="Doctor Strange in the Multiverse of Madness movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      LẬT MẶT 6 - TẤM VÉ ĐỊNH MỆNH (C16)
                    </h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">2D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT126M">135 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://tuiriviu.com/wp-content/uploads/2023/05/review-guardian-of-the-galaxy-3-tuiriviu-1-819x1024.webp"
                      alt="Memory movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">VỆ BINH DẢI NGÂN HÀ 3 (C13)</h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">3D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="">150 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="movie-card">
                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img
                      src="https://metiz.vn/media/poster_film/1_1681877154581.jpg"
                      alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                  </figure>
                </a>
                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">
                      CHUYỆN XÓM TUI - CON NHÓT MÓT CHỒNG (C16)
                    </h3>
                  </a>
                  <time dateTime={2023}>2023</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">2D</div>
                  <div className="duration">
                    <ion-icon name="time-outline" />
                    <time dateTime="PT107M">112 phút</time>
                  </div>
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>NR</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ListFilm;
