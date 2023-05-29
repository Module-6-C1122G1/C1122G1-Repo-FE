import {useEffect, useRef, useState} from "react";
import {Chart,Line} from "react-chartjs-2"

export function StatisticalMember(){
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/admin/member');
                const data = await response.json();
                setChartData(data);
                console.log(chartData)
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    return(
        <>
            <h1 style={{ textAlign: "center" }}>Thống kê điểm tích lũy</h1>
            <div className="card chart-container">
                <canvas id="chart" />
            </div>
            <div className="row mx-0">
                <div className="container mx-auto my-5 col-8" style={{ width: "80%" }}>
                    <div style={{ boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)" }}>
                        <div style={{ marginBottom: 20 }}>
                            <h2
                                className="d-flex justify-content-center"
                                style={{ padding: 16, backgroundColor: "orangered", color: "#fff" }}
                            >
                                DANH SÁCH THÀNH VIÊN
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="row col-md-8">
                                <div className="col-md-9">
                                    <label>
                                        <input
                                            style={{ width: "90%", marginLeft: 180 }}
                                            className="form-control float-start"
                                            type="text"
                                            placeholder="Tìm kiếm theo mã vé, tên phim..."
                                        />
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        style={{ marginLeft: 50 }}
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
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <table
                                            className="table table-striped table-hover"
                                            style={{ width: "85%" }}
                                        >
                                            <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Mã thành viên</th>
                                                <th>Tên thành viên</th>
                                                <th>Số lượng vé</th>
                                                <th>Tổng tiền</th>
                                                <th>Điểm tích lũy</th>
                                                <th />
                                                <th />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>TV001</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>31</td>
                                                <td>74000000</td>
                                                <td>65000000</td>
                                                <td>
                                                    <button className="btn btn-outline-success css_button">
                                                        <p>Nhận vé</p>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteCustomer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-trash3"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>TV002</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>31</td>
                                                <td>74000000</td>
                                                <td>65000000</td>
                                                <td>
                                                    <button className="btn btn-outline-success css_button">
                                                        <p>Nhận vé</p>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteCustomer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-trash3"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>TV002</td>
                                                <td>Nguyễn Văn A</td>
                                                <td>31</td>
                                                <td>74000000</td>
                                                <td>65000000</td>
                                                <td>
                                                    <button className="btn btn-outline-success css_button">
                                                        <p>Nhận vé</p>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteCustomer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-trash3"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        className="d-flex justify-content-center"
                                        style={{ marginTop: 18 }}
                                    >
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item ">
                                                    <a className="page-link" href="#">
                                                        Trước
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item ">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        Sau
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal xoá*/}
            <div
                className="modal fade"
                id="deleteCustomer"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Xóa Phim
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn huỷ vé phim
                            <span className="text-danger fw-bold">Harry Potter</span> không?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Hủy
                            </button>
                            <button className="btn btn-danger" data-bs-dismiss="modal">
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Line data={chart}></Line>
        </>
    )
}