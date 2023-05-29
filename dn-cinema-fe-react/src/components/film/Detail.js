import { useEffect, useState } from "react"
import {useParams} from "react-router";
import * as filmService from '../../service/FilmService'
import '../film/detailStyle.css';
export default function(){
    const param = useParams()
    const [movieDetail,setMovieDetail] = useState()
    useEffect(()=>{
        const detail = async()=>{
            try{
            const res = await filmService.detail(param.id)
            setMovieDetail(res)
            }catch(err){
              console.log(err)
            }
        }
      detail()
    },[param.id])
    if(!movieDetail){
      return null
    }
    return(
        <>
            <div>
            <div className="container">
            <div className="row mt-5 mx-2">
            <div>
                <i type="button" className="bi bi-house-fill text-secondary">
                <span className="fst-normal">TRANG CHỦ</span>
                </i>
            </div>
             </div>
            <div className="row mx-0">
      <div className="col-3 mt-2 col-md-6 col-sm-9">
        <div className="detail-feat-img">
          <img
            src={movieDetail?.imgFilm}
            className="loaded img-hover"
            data-was-processed="true"
          />
          <a
            href={movieDetail?.trailer}
            target="_blank"
            className="play-button"
          >
            <i className="bi bi-play-circle" />
          </a>
        </div>
        <section
          className="mt-5 text-secondary border border-2 p-3 section-movie"
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
          }}>
          <h3>NHẬN KHUYẾN MÃI</h3>
          <div className="box-promotion mt-3">
            <form style={{ fontFamily: '"Arial"' }}>
              <input
                placeholder="Nhập Email Của Bạn"
                className=" input-movie w-100 form-control"
              />
              <button className="button-movie-1 mt-2 ">Đăng Ký</button>
            </form>
          </div>
        </section>
      </div>
      <div
        className="col-6"
        style={{
          fontFamily:'"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
        }}
      >
        <div>
          <h3 className="text-secondary">{movieDetail?.nameFilm}</h3>
        </div>
        <hr className="text-movie" />
        <div className="detail-rating">
          <span className='button-age'>
            {movieDetail?.movieLabel}
          </span>
          <span className="fs-4 ms-4 text-movie">
            <i className="bi bi-clock-history me-2 ms-1" />
            {movieDetail?.timeFilm} phút
          </span>
          <div className="mt-2">
            <hr className="text-movie" />
            <table>
              <thead>
                <tr style={{ height: 45 }}>
                  <th className="text-secondary">Thể Loại :</th>
                  <td>{movieDetail?.typeFilm.nameTypeFilm}</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: 45 }}>
                  <th className="text-secondary">Quốc Gia :</th>
                  <td>{movieDetail?.nation}</td>
                </tr>
                <tr style={{ height: 45 }}>
                  <th className="text-secondary">Đạo diễn :</th>
                  <td>{movieDetail?.director}</td>
                </tr>
                <tr style={{ height: 45 }}>
                  <th className="text-secondary">Diễn viên :</th>
                  <td>{movieDetail?.actor}</td>
                </tr>
                <tr style={{ height: 45 }}>
                  <th className="text-secondary">Nhà sản xuất :</th>
                  <td>{movieDetail?.studioFilm}</td>
                </tr>
                <tr style={{ height: 46, width: 200 }}>
                  <th className="text-secondary">Ngày khởi chiếu :</th>
                  <td>{movieDetail?.dateStartFilm}</td>
                </tr>
                {/*<tr style={{ height: 45 }}>*/}
                {/*  <th className="text-secondary">Nhà sản xuất :</th>*/}
                {/*  <td>{movieDetail?.producer}</td>*/}
                {/*</tr>*/}
                <tr style={{ height: 45 }}>
                  <th className="">
                    <span type="button" className="button-movie">
                      Đặt vé
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="text-movie" />
          <div
            className="mt-4 text-secondary"
            style={{
              fontFamily:
                '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
            }}
          >
            <div>
              <h3>NỘI DUNG PHIM</h3>
            </div>
            <div>
              <p>
                {movieDetail?.describeFilm}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-3 text-secondary"
        style={{
          fontFamily:
            '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'
        }}
      >
        <div>
          <h3>PHIM ĐANG CHIẾU</h3>
        </div>
        <div className="article-movie-home">
          <img
            src="https://cdn.galaxycine.vn/media/2023/4/17/450wx300h_1681703427699.jpg"
            className="loaded"
            data-was-processed="true"
          />
          <a href="/dat-ve/lat-mat-6-tam-ve-dinh-menh">
            <div className="decription-hover overlay">
              <div className="movies-content">
                <div className="group">
                  <div className=" secondary-white">Chi tiết</div>
                </div>
              </div>
            </div>
          </a>
          <div className="mt-2">
            <div>
              <h6 className="text-secondary text-comingMovie">
                LẬT MẶT 6 : TẤM VÉ ĐỊNH MỆNH
              </h6>
            </div>
          </div>
        </div>
        <div className="article-movie-home">
          <img
            src="https://cdn.galaxycine.vn/media/2023/4/27/450x300_1682565516691.jpg"
            className="loaded"
            data-was-processed="true"
          />
          <a href="/dat-ve/lat-mat-6-tam-ve-dinh-menh">
            <div className="decription-hover overlay">
              <div className="movies-content">
                <div className="group">
                  <div className=" secondary-white">Chi tiết</div>
                </div>
              </div>
            </div>
          </a>
          <div className="mt-2">
            <div>
              <h6 className="text-secondary text-comingMovie">
                CON NHÓT MÓT CHỒNG
              </h6>
            </div>
          </div>
        </div>
        <div className="article-movie-home">
          <img
            src="https://cdn.galaxycine.vn/media/2023/4/24/450x300_1682320154561.jpg"
            className="loaded"
            data-was-processed="true"
          />
          <a href="/dat-ve/lat-mat-6-tam-ve-dinh-menh">
            <div className="decription-hover overlay">
              <div className="movies-content">
                <div className="group">
                  <div className=" secondary-white">Chi tiết</div>
                </div>
              </div>
            </div>
          </a>
          <div className="mt-2">
            <div>
              <h6 className="text-secondary text-comingMovie">
                GUARDIANS OF THE GALAXY VOL.3 (VỆ BINH DẢI NGÂN HÀ 3)
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}