import './UpdateFilm.css'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import * as FilmService from "../../service/FilmService";
import * as TypeFilmService from "../../service/TypeFilmService";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {ColorRing} from "react-loader-spinner";
import {storage} from "../../config/firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from "uuid";

export function UpdateFilm() {
    const navigate = useNavigate();
    const [films, setFilms] = useState();
    const [listTypeFilm, setListTypeFilm] = useState([]);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])
    const params = useParams();

    useEffect(() => {
        const search = async () => {
            const film = await FilmService.findFilmById(params.idFilm);
            setFilms(film)
            console.log(film)
        }
        search();
    }, [params.idFilm])

    useEffect(() => {
        const listTypeFilm = async () => {
            const result = await TypeFilmService.listTypeFilm();
            setListTypeFilm(result)
            console.log(result)
        }
        listTypeFilm();
    }, [])

    useEffect(() => {
        document.title = "Chỉnh sửa phim"
    }, [])
    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (imageUpload == null)
            return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=> {
                setImageList((prev) => [...prev,url])
            })

        });
    };
    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    },[])

    if (!films) {
        return null;
    }

    return (<>

        {films && <Formik
            initialValues={{
                idFilm: films?.idFilm,
                imgFilm: films.imgFilm,
                nameFilm: films.nameFilm,
                nation: films.nation,
                dateStartFilm: films.dateStartFilm,
                dateEndFilm: films.dateEndFilm,
                actor: films.actor,
                studioFilm: films.studioFilm,
                director: films.director,
                timeFilm: films.timeFilm,
                movieLabel: films.movieLabel,
                trailer: films.trailer,
                idTypeFilm: films.typeFilm.idTypeFilm,
                normalSeatPrice: films.normalSeatPrice,
                vipSeatPrice: films.vipSeatPrice,
                describeFilm: films.describeFilm

            }}
            validationSchema={Yup.object({
                imgFilm: Yup.string()
                    .required("Nhập ảnh phim"), nameFilm: Yup.string()
                    .required("Nhập tên phim"), nation: Yup.string()
                    .required("Nhập quốc gia"), dateStartFilm: Yup.date()
                    .required("Nhập ngày khởi chiếu"), dateEndFilm: Yup.date()
                    .required("Nhập ngày kết thúc"), actor: Yup.string()
                    .required("Nhập diễn viên"), studioFilm: Yup.string()
                    .required("Nhập hãng phim"), director: Yup.string()
                    .required("Nhập đạo diễn"), timeFilm: Yup.number().integer()
                    .required("Nhập thời lượng phim"), movieLabel: Yup.string()
                    .required("Nhập nhãn phim"), trailer: Yup.string()
                    .required("Nhập trailer phim"), idTypeFilm: Yup.number().integer()
                    .required("Nhập loại phim"), normalSeatPrice: Yup.number()
                    .required("Nhập giá ghế thường"), vipSeatPrice: Yup.number()
                    .required("Nhập giá ghế vip"), describeFilm: Yup.string()
                    .required("Nhập nội dung phim")
            })}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                const edit = async () => {
                    await FilmService.updateFilm(values)
                    setSubmitting(false)
                    alert("Chỉnh sửa thành công")
                    navigate('/')
                }
                edit()
            }}>
            {({isSubmitting}) => (<div className="row mx-0">
                <div className="container mx-auto my-5 col-8">
                    <div className="form-edit-movie">
                        <h1 style={{textAlign: "center", marginBottom: "5%"}}>
                            Chỉnh sửa phim
                        </h1>
                        <Form action="">
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Ảnh phim <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <input type="file" onChange={(event) => {
                                        setImageUpload(event.target.files[0])
                                    }}
                                           style={{width: "100%"}}/>
                                    <button onClick={uploadImage}>Tải ảnh lên</button>
                                </div>
                                <div className="col-3">

                                    {imageList.map((url) =>{
                                        return <img src={url} style={{height:"100%", width: "100%"}}/>
                                    } )}
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Tên phim{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name="movieName"
                                        defaultValue="The Clone Wars"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Quốc gia{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name="nation"
                                        defaultValue="Mỹ"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Từ ngày{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="date"
                                        style={{width: "100%"}}
                                        name="dateForm"
                                        defaultValue="2017-02-28"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Đến ngày <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="date"
                                        style={{width: "100%"}}
                                        name="dateTo"
                                        defaultValue="2017-03-04"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Diễn viên <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name="actor"
                                        defaultValue="Long"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Hãng phim <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue="Disney"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Đạo diễn <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue="Danh"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Thời lượng <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue={231}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Nhãn phim <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue="16+"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Trailer <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        name="trailer"
                                        defaultValue="Trailer phim"
                                    />
                                </div>
                            </div>
                            <div className="row kind-movie" style={{marginBottom: "2%"}}>
                                <div className="title-kind col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Thể loại <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Hành động</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Viễn tưởng</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Hoạt hình</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Võ thuật</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden"/>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Hài hước</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Chiến tranh</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Kinh dị</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Kinh điển</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden"/>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Lãng mạn</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Kiếm hiệp</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Phiêu lưu</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Tâm lý</span>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <input type="hidden"/>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Tình cảm</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="checkbox"/>
                                        <span style={{marginRight: "5%"}}>Âm nhạc</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Giá ghế thường <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue="50000VNĐ"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Giá ghế vip <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{width: "100%"}}
                                        name=""
                                        defaultValue="70000VNĐ"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Nội dung <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
            <textarea
                name="content"
                rows={4}
                cols={86}
                placeholder="Nội dung phim"
                style={{maxWidth: "100%"}}
                defaultValue={""}
            />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-3" style={{textAlign: "right"}}>
                                    <input type="hidden"/>
                                </div>
                                <div className="col-8">
                                    {isSubmitting ? <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    /> : <button type="submit"
                                                 className="btn btn-primary">Submit</button>}
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>)}
        < /Formik>}

        }
    </>)
}