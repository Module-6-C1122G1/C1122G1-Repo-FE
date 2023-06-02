import React, {useEffect, useState} from "react";
import {findAll} from "../../service/ShowRoomService";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {Field, Form, Formik} from "formik";

export function ListShowRoom() {
    const [showRoomList, setShowRoomList] = useState([]);
    const [searchAndPage, setSearchAndPage] = useState({
        page: 0,
        search: "",
    });
    const [pageCount, setPageCount] = useState(0);
    const auth = localStorage.getItem("token");
    useEffect(() => {
        const list = async () => {
            const result = await findAll(searchAndPage,auth);
            console.log(result)
            try {
                setShowRoomList(result.content);
                setPageCount(result.totalPages);
            } catch {
                setShowRoomList([]);
            }
        };
        list();
    }, [searchAndPage]);

    const handlePageClick = (event) => {
        console.log(event.selected)
        setSearchAndPage((prev) => ({...prev, page: event.selected}));
    };
    return (
        <>
            <div className="row mx-0 list-cinema-room">
                <div className="container mx-auto my-5 col-8">
                    <div style={{boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)"}}>
                        <div style={{marginBottom: 20}}>
                            <h2 className="d-flex justify-content-center pt-4">
                                DANH SÁCH PHÒNG CHIẾU
                            </h2>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        {showRoomList.length === 0 ? (
                                            <p style={{color: 'black'}} >Không tìm thấy kết quả cho từ khóa <span style={{color : "red"}}>"{searchAndPage.search}"</span></p>
                                        ) : (
                                            <div className="row container-fluid">
                                                <div className="row ">
                                                    <Formik
                                                        initialValues={{search: ""}}
                                                        onSubmit={(values) => {
                                                            setSearchAndPage((prev) => {
                                                                return {...prev, ...values, page: 0};
                                                            });
                                                        }}
                                                    >
                                                        <Form style={{boxShadow: "none",padding:"0"}}>
                                                            <Field
                                                                name="search"
                                                                style={{width: "30%", display: "inline-block", float: "left"}}
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Tìm kiếm theo tên phòng chiếu..."
                                                            />
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary"
                                                                title="Tìm kiếm"
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
                                                </div>
                                                <table
                                                    className="table table-striped table-hover"
                                                >
                                                    <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Mã phòng chiếu</th>
                                                        <th>Tên phòng chiếu</th>
                                                        <th>Số lượng ghế</th>
                                                        <th>Chi tiết phòng chiếu</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {showRoomList.map((showRoom, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{showRoom.idShowRoom}</td>
                                                            <td>{showRoom.nameShowRoom}</td>
                                                            <td>{showRoom.quantitySeat}</td>
                                                            <td><button>
                                                                <Link
                                                                    to={'/admin/showroom/detail/' + showRoom.idShowRoom}

                                                                >
                                                                    Chi tiết
                                                                </Link></button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
                                                    </tbody>
                                                </table>
                                                <div className="d-grid">
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
        </>
    )
}

