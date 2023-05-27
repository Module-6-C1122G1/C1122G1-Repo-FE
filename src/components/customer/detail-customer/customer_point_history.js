import * as customerService from '../../../service/CustomerService';
import {useEffect, useState} from "react";

export function CustomerPointHistory() {
    const [pointHistory, setPointHistory] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAllTicketBookingPoint();
            setPointHistory(result.content);
        }
        fetchApi();
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <i className="bi bi-list menu d-none" onClick="openNav()"/>
                    <div className="col-3 side-bar">
                        <h2 style={{fontSize: 24}} className="text-center mt-3">
                            Quản lý tài khoản
                        </h2>
                        <p className="text-center">
                            <img
                                src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                                className="rounded-circle"
                                style={{width: 100}}
                                height="100px"
                            />
                        </p>
                        <p style={{fontSize: 14}} className="text-center mt-3">
                            Dong PV
                        </p>
                        <div className="mt-3 text-center">
                            <i className="bi bi-bookmark-star-fill"/>
                            Điểm tích lũy : 120
                        </div>
                        <div className="mt-3">
                            <button
                                type="button"
                                className="log-out btn btn-outline-danger"
                                style={{display: "block"}}
                            >
                                <i className="bi bi-arrow-right-circle"/>
                                Đăng xuất
                            </button>
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <link href="" style={{fontSize: 14}}/>
                            <i className="bi bi-person-bounding-box"/>
                            Thông tin tài khoản
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <link href="" style={{fontSize: 14}}/>
                            <i className="bi bi-calculator"/>
                            Lịch sử
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <link href="" style={{fontSize: 14}}/>
                            <i className="bi bi-ticket-detailed"/>
                            Vé đã đặt
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <link href="" style={{fontSize: 14}}/>
                            <i className="bi bi-ticket"/>
                            Vé đã hủy
                        </div>
                    </div>
                    <div className=" container mx-auto my-5 col-9">
                        <div style={{marginBottom: 20}}>
                            <h2 className="d-flex justify-content-center" style={{padding: 16}}>
                                Lịch Sử
                            </h2>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <form>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <th style={{float: "right", background: "white"}}>
                                                        <p style={{fontSize: 14}}>
                                                            Từ Ngày : <span style={{color: "red"}}>(*)</span>
                                                        </p>
                                                    </th>
                                                    <th style={{background: "white"}}>
                                                        <input style={{width: 300}} type="date"/>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style={{float: "right", background: "white"}}>
                                                        <p style={{fontSize: 14}}>
                                                            Đến Ngày : <span style={{color: "red"}}>(*)</span>
                                                        </p>
                                                    </th>
                                                    <th style={{background: "white"}}>
                                                        <input style={{width: 300}} type="date"/>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style={{background: "right"}}/>
                                                    <th style={{background: "right"}}>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault1"
                                                        >
                                                            Lịch sử cộng điểm
                                                        </label>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style={{background: "right"}}/>
                                                    <th style={{background: "right"}}>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault2"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexRadioDefault2"
                                                        >
                                                            Lịch sử sử dụng điểm
                                                        </label>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className="mt-3 text-center">
                                                <button
                                                    type="button"
                                                    className="log-out btn btn-outline-danger"
                                                >
                                                    Xem điểm
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-3" style={{width: "100%"}}>
                                            <div className=" table-responsive px-5 py-3 d-flex justify-content-center">
                                                <table className="table table-striped table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Ngày Tạo</th>
                                                        <th>Dịch Vụ Đã Sử Dụng</th>
                                                        <th>Tổng Điểm</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        pointHistory?.map((pointHistorys, index) => (
                                                            <tr key={index}>
                                                                <td>{pointHistorys.dateBooking}</td>
                                                                <td>{pointHistorys.nameFilm}</td>
                                                                <td>{pointHistorys.pointCustomer}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                    <tr>
                                                        <td>1</td>
                                                        <td>22/02/2022</td>
                                                        <td>Đã Mua Pepsi</td>
                                                        <td>7500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>19/03/2023</td>
                                                        <td>Đã Mua Bắp</td>
                                                        <td>8000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>17/04/2024</td>
                                                        <td>Đã Mua Khoai Tây Chiên</td>
                                                        <td>9000</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div
                                            className="d-flex justify-content-center"
                                            style={{marginTop: 18}}
                                        >
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            Trước
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
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
            </div>

        </>
    )
}