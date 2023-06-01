import React from "react";
import './customer.css'

export function UpdateCustomer() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 style={{fontSize: 24}}>Quản lý tài khoản</h2>
                        <p className="text-center">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0517/9188/8542/products/neon-luffy.jpg?v=1665766157"
                                className="rounded-circle avatar"
                                style={{width: 200}}
                                height="200px"
                            />
                        </p>
                        <h3 style={{textAlign: "center"}}>Truong NN</h3>
                        <div className="mt-3" style={{textAlign: "center"}}>
                            <i className="bi bi-bookmark-star-fill"/>
                            Điểm tích lũy : 120
                        </div>
                        <div className="mt-3" style={{textAlign: "center"}}>
                            <button type="button" className="log-out btn btn-outline-danger">
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
                        <div className="border-form">
                            <h5 style={{textAlign: "center"}}>Thông tin đăng nhập</h5>
                            <br/>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Thẻ thành viên:{" "}
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        disabled=""
                                        defaultValue="TV00001"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Tài khoản:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        disabled=""
                                        defaultValue="TruongNN"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Mật khẩu cũ <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input type="password" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Mật khẩu mới <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input type="password" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Xác nhận mật khẩu mới <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input type="password" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <input type="hidden"/>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{background: "#f26b38"}}
                                    >
                                        Đổi mật khẩu
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="border-form">
                            <h5 style={{textAlign: "center"}}>Thông tin tài khoản</h5>
                            <br/>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Họ tên <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        style={{width: "100%"}}
                                        defaultValue="Ngô Ngọc Trường"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Ngày sinh <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input style={{width: "100%"}} defaultValue="10/09/1998"/>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Giới tính <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="radio"
                                        id="nam"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    &nbsp; <label htmlFor="nam">Nam</label>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="radio"
                                        id="nữ"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    &nbsp; <label htmlFor="nữ">Nữ</label>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Email <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="type"
                                        style={{width: "100%"}}
                                        defaultValue="ngongoctruong1111ts@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        CMND <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="type"
                                        style={{width: "100%"}}
                                        defaultValue={197366689}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label
                                        className="fw-bold"
                                        htmlFor="address"
                                        style={{marginRight: "2%"}}
                                    >
                                        Địa chỉ<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
            <textarea
                name="address"
                id="address"
                rows={2}
                cols={37}
                style={{maxWidth: "100%"}}
                defaultValue={
                    "15/11 Bắc Đẩu, Q.Hải Châu, TP.Đà Nẵng\n            "
                }
            />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Số điện thoại <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="type"
                                        style={{width: "100%"}}
                                        defaultValue={378730129}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Hình ảnh <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="type"
                                        style={{width: "100%"}}
                                        defaultValue="https://cdn.shopify.com/s/files/1/0517/9188/8542/products/neon-luffy.jpg?v=1665766157"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <input type="hidden"/>
                                </div>
                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{background: "#f26b38"}}
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}