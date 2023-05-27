import * as customerService from '../../../service/CustomerService';
import {useEffect, useState} from "react";
import '../detail-customer/style.css';

export function TickBookingList() {
    const [ticketBooking, setTicketBooking] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAllTicketBooking();
            console.log(result)
            setTicketBooking(result.content);
        }
        fetchApi();
    }, [])

    return (
        <>
            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
                    ×
                </a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <div className="container">
                <div className="row">
                    <i className="bi bi-list menu d-none" onclick="openNav()"/>
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
                        <div style={{boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)"}}>
                            <div style={{marginBottom: 20}}>
                                <h2
                                    className="d-flex justify-content-center"
                                    style={{padding: 16}}
                                >
                                    Vé đã đặt
                                </h2>
                            </div>
                            <div style={{marginTop: 20}}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div>
                                            <div className="table-responsive px-5 py-3  d-flex justify-content-center">
                                                <table className="table table-striped table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Tên Phim</th>
                                                        <th>Ngày Tạo</th>
                                                        <th>Tổng Tiền (Vnd)</th>
                                                        <th>Trạng Thái</th>
                                                        <th>Xoá</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        ticketBooking.map((ticketBookings, index) => (
                                                            <tr key={index}>
                                                                <td scope={"row"}>{ticketBookings?.nameFilm}</td>
                                                                <td>{ticketBookings?.dateBooking}</td>
                                                                <td>{ticketBookings.priceAfterDiscount}</td>
                                                                <td>{ticketBookings.statusTicket}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Harry Potter và bảo bối tử thần</td>
                                                        <td>22/02/2022</td>
                                                        <td>120.000</td>
                                                        <td>Đợi nhận vé</td>
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
                                                                    className="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path
                                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                                    <path
                                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Nhà Bà Nữ</td>
                                                        <td>19/03/2023</td>
                                                        <td>140.000</td>
                                                        <td>Đã nhận vé</td>
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
                                                                    className="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path
                                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                                    <path
                                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Doraemon</td>
                                                        <td>17/04/2024</td>
                                                        <td>160.000</td>
                                                        <td>Đang đợi vé</td>
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
                                                                    className="bi bi-trash"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path
                                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                                    <path
                                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                        <div className="modal-body">Bạn có chắc chắn muốn xóa này không?</div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal">
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}