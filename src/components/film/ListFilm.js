import {useEffect, useState} from "react";
import * as FilmService from "../../service/FilmService";
import ReactPaginate from "react-paginate";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export function ListFilm() {
    const [filmList, setFilmList] = useState([]);
    const [films, setFilms] = useState([])

    const [searchAndPage, setSearchAndPage] = useState({
        page: 0,
        search: "",
    });
    const [value, setValue] = useState("");
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const listFilm = async () => {
            const result = await FilmService.listFilm(searchAndPage);
            console.log(result)
            try {
                setFilmList(result.content);
                setPageCount(result.totalPages);
            } catch {
                setFilmList([]);
            }
        };
        listFilm();
    }, [films]);

    const handleDelete = async () => {
        await FilmService.deleteFilm(films.idFilm);
        const result = await FilmService.listFilm(searchAndPage);
        setFilms(result)
        toast("Xoá "  + films.nameFilm  + " thành công")
    }

    const getData = async (id) => {
        const data = await FilmService.getFilm(id);
        setFilms(data)
    }

    const handlePageClick = (event) => {
        console.log(event.selected)
        setSearchAndPage((prev) => ({...prev, page: event.selected}));
    };

    const handleSearch = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:8080/api/public/movie?q=${value}`)
            .then((res) => {
                setFilmList(res.data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        document.title = "Danh sách phim"
    }, [])

    return (
        <>
            <div className="row mx-0 list-cinema-room">
                <div className="container mx-auto my-5 col-8">
                    <div style={{boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)"}}>
                        <div style={{marginBottom: 20}}>
                            <h2 className="d-flex justify-content-center pt-4">
                                DANH SÁCH PHIM
                            </h2>
                        </div>
                        <div className="row ">

                            <Formik
                                initialValues={{search: ""}}
                                onSubmit={(values) => {
                                    setSearchAndPage((prev) => {
                                        return {...prev, ...values, page: 0};
                                    });
                                }}
                            >
                                <Form className="d-flex justify-content-center"
                                      style={{boxShadow: "none", padding: "0px"}}
                                      onSubmit={handleSearch}>
                                    <Field
                                        name="search"
                                        style={{width: "30%",height:"70%"}}
                                        type="text"
                                        className="form-control"
                                        placeholder="Tìm kiếm"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-outline-primary"
                                        title="Tìm kiếm"
                                        style={{height: "70%",color:"red", marginLeft: "1%"}}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </button>
                                </Form>
                            </Formik>
                            <div>
                                <Link to={`/admin/film/create`} style={{display: "inline-block", float: "right", marginRight: "2%"}}>
                                <button className="btn btn-outline-primary" style={{height: "70%",color: "red"}}>
                                    <i className="bi bi-plus-circle"></i> Thêm Mới
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row ">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        {filmList.length === 0 ? (
                                            <h1 style={{color: 'red'}}>Không tìm thấy</h1>
                                        ) : (
                                            <div className="table-responsive" style={{margin: "auto"}}>
                                                <table
                                                    className="table"
                                                    style={{width: "100%"}}
                                                >
                                                    <thead>
                                                    <tr className="text-center">
                                                        <th>STT</th>
                                                        <th>Tên phim</th>
                                                        <th>Ngày khởi chiếu</th>
                                                        <th>Hãng phim</th>
                                                        <th>Thời lượng</th>
                                                        <th>Thể loại</th>
                                                        <th>Tác vụ</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {filmList.map((film, index) => (
                                                        <tr key={index} className="text-center">
                                                            <td>{index + 1}</td>
                                                            <td>{film.nameFilm}</td>
                                                            <td>{film.dateStartFilm}</td>
                                                            <td>{film.studioFilm}</td>
                                                            <td>{film.timeFilm}</td>
                                                            <td>{film.typeFilm.nameTypeFilm}</td>
                                                            <td className="d-flex justify-content-center">
                                                                <Link to={`/admin/film/edit/${film.idFilm}`}>
                                                                    <button type="button" className="btn btn-outline-warning me-3" style={{height: "70%",color: "red"}}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="16" height="16" fill="currentColor"
                                                                             className="bi bi-pencil"
                                                                             viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                                        </svg>
                                                                    </button>
                                                                </Link>
                                                                <button type="submit" className="btn btn-danger" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"
                                                                        onClick={() => getData(film.idFilm)}
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                         height="16" fill="currentColor"
                                                                         className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                                        <path
                                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
                                                    </tbody>
                                                </table>
                                                <div className="d-flex justify-content-center">
                                                    <ReactPaginate
                                                        breakLabel="..."
                                                        nextLabel=">"
                                                        onPageChange={handlePageClick}
                                                        pageCount={pageCount}
                                                        previousLabel="< "
                                                        containerClassName="pagination"
                                                        pageLinkClassName="page-num"
                                                        nextLinkClassName="page-next"
                                                        previousLinkClassName="page-previous"
                                                        activeClassName="active"
                                                        disabledClassName="d-none"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa:</span> <span style={{color: 'red'}} className="font-monospace">{films?.nameFilm} ?</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancel
                            </button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-danger"
                                    data-bs-dismiss="modal">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}