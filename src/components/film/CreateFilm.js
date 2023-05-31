import './CreateFilm.css'
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import * as TypeFilmService from "../../service/TypeFilmService";
import * as Yup from "yup";
import * as FilmService from "../../service/FilmService";
import {Field, Form, Formik} from "formik";
import {ColorRing} from "react-loader-spinner";
import {storage} from "../../config/firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import {v4} from "uuid";

export function CreateFilm() {
    const navigate = useNavigate();
    const [listTypeFilm, setListTypeFilm] = useState([]);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        const listTypeFilm = async () => {
            const result = await TypeFilmService.listTypeFilm();
            setListTypeFilm(result)
            console.log(result)
        }
        listTypeFilm();
    }, [])

    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (imageUpload == null)
            return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })

        });
    };
    useEffect(() => {
        setImageList([]);
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev.filter(item => item != url), url]);
                })
            })
        })
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    imgFilm: "",
                    nameFilm: "",
                    nation: "",
                    dateStartFilm: "",
                    dateEndFilm: "",
                    actor: "",
                    studioFilm: "",
                    director: "",
                    timeFilm: "",
                    movieLabel: "",
                    trailer: "",
                    idTypeFilm: "",
                    normalSeatPrice: "",
                    vipSeatPrice: "",
                    describeFilm: ""

                }}
                validationSchema={Yup.object({
                    imgFilm: Yup.string()
                        .required("Nhập ảnh phim"),
                    nameFilm: Yup.string()
                        .required("Nhập tên phim"),
                    nation: Yup.string()
                        .required("Nhập quốc gia"),
                    dateStartFilm: Yup.date()
                        .required("Nhập ngày khởi chiếu"),
                    dateEndFilm: Yup.date()
                        .required("Nhập ngày kết thúc"),
                    actor: Yup.string()
                        .required("Nhập diễn viên"),
                    studioFilm: Yup.string()
                        .required("Nhập hãng phim"),
                    director: Yup.string()
                        .required("Nhập đạo diễn"),
                    timeFilm: Yup.number().integer()
                        .required("Nhập thời lượng phim"),
                    movieLabel: Yup.string()
                        .required("Nhập nhãn phim"),
                    trailer: Yup.string()
                        .required("Nhập trailer phim"),
                    idTypeFilm: Yup.number().integer()
                        .required("Nhập loại phim"),
                    normalSeatPrice: Yup.number()
                        .required("Nhập giá ghế thường"),
                    vipSeatPrice: Yup.number()
                        .required("Nhập giá ghế vip"),
                    describeFilm: Yup.string()
                        .required("Nhập nội dung phim")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    const create = async () => {
                        await FilmService.createFilm(values)
                        setSubmitting(false)
                        alert("Thêm mới thành công")
                        navigate('/')
                    }
                    create()
                }
                }>
                {
                    ({isSubmitting}) => (
                        <div className="row mx-0" style={{marginTop: "30%"}}>
                            <div className="container mx-auto my-5 col-8">
                                <div className="form-edit-movie">
                                    <h1 style={{textAlign: "center", marginBottom: "5%"}}>
                                        Thêm mới phim
                                    </h1>
                                    <Form>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-3" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                                    Ảnh phim <span className="warning">(*)</span>
                                                </label>
                                            </div>
                                            <div className="col-3">
                                                <input type="file" name="imgFilm" onChange={(event) => {
                                                    setImageUpload(event.target.files[0]);
                                                    uploadImage();
                                                }}
                                                       style={{width: "100%"}}/>
                                                <button type="button" className="btn btn-primary" onClick={uploadImage}>Tải ảnh lên</button>
                                            </div>
                                            <div className="col-3">
                                                <img src={imageList[imageList.length - 1]} style={{height: "100%", width: "100%"}}/>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-3" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                                    Tên phim <span className="warning">(*)</span>
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="text"
                                                    style={{width: "100%"}}
                                                    name="nameFilm"

                                                />
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-3" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                                    Quốc gia <span className="warning">(*)</span>
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="text"
                                                    style={{width: "100%"}}
                                                    name="nation"
                                                />
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-3" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                                    Từ ngày <span className="warning">(*)</span>
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="date"
                                                    style={{width: "100%"}}
                                                    name="dateStartFilm"

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
                                                    name="dateEndFilm"

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
                                                    name="studioFilm"

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
                                                    name="director"

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
                                                    name="timeFilm"
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
                                                    name="movieLabel"

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

                                                />
                                            </div>
                                        </div>
                                        <div className="row kind-movie" style={{marginBottom: "2%"}}>
                                            <div className="title-kind col-3" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                                    Thể loại <span className="warning">(*)</span>
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field as='select' name="idTypeFilm">
                                                    {listTypeFilm.map((listType, index) => (
                                                        <option
                                                            value={listType.idTypeFilm}>{listType.nameTypeFilm}</option>
                                                    ))}
                                                </Field>
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
                                                    name="normalSeatPrice"

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
                                                    name="vipSeatPrice"

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
                                                <textarea name="describeFilm" rows={4} cols={86}
                                                          placeholder="Nội dung phim"
                                                          style={{maxWidth: "100%"}}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-3" style={{textAlign: "right"}}>
                                                <input type="hidden"/>
                                            </div>
                                            <div className="col-8">
                                                {
                                                    isSubmitting ?
                                                        <ColorRing
                                                            visible={true}
                                                            height="80"
                                                            width="80"
                                                            ariaLabel="blocks-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass="blocks-wrapper"
                                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                                        />
                                                        :
                                                        <button type="submit"
                                                                className="btn btn-primary">Thêm mới phim</button>
                                                }
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }
            < /Formik>

        </>
    )
}