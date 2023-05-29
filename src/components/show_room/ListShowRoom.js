import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as showRoomService from "../../service/ShowRoomService";

export function ListShowRoom() {
    const [showRoomList, setShowRoomList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApi = async () => {
            const result = await showRoomService.findAll()
            console.log(result.content)
            setShowRoomList(result.content)
        }
        fetchApi()

    }, [])

    const [paginationShowRoom, setPaginationShowRoom] = useState([]);
    const PAGE_SIZE = 3;

    useEffect(() => {
        const pagination = async () => {
            const result = await showRoomService.findAll();
            setPaginationShowRoom(result.content.slice(0, 3));
        };
        pagination();
    }, []);

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
                        <div className="row">
                            <div className="col-md-4">
                                <button
                                    style={{marginLeft: 70}}
                                    className="btn btn-outline-primary"
                                >
                                    <i className="bi bi-plus"/>
                                    Thêm Mới
                                </button>
                            </div>
                            <div className="row col-md-8">
                                <div className="col-md-9">
                                    <input
                                        style={{width: "90%", marginLeft: 100}}
                                        className="form-control float-start"
                                        type="text"
                                        placeholder="Tìm kiếm theo tên phòng chiếu...."
                                    />
                                </div>
                                <div className="col-md-3">
                                    <button
                                        style={{marginLeft: 50}}
                                        className="btn btn-outline-success"
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
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <table
                                            className="table table-striped table-hover"
                                            style={{width: "85%"}}
                                        >
                                            <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Mã phòng chiếu</th>
                                                <th>Tên phòng chiếu</th>
                                                <th>Số lượng ghế</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {showRoomList.map((showRoom, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{showRoom.idShowRoom}</td>
                                                    <td>{showRoom.nameShowRoom}</td>
                                                    <td>{showRoom.quantitySeat}</td>
                                                </tr>
                                            ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
