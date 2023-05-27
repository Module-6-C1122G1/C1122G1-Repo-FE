import {useEffect, useState} from "react";
import * as EmployeeService from "../../service/EmployeeService";

export function CreateEmployee(){
    const [employeeList , setEmployeeList] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await EmployeeService.findAll();
            setEmployeeList(result)
        }
    },[])
    return(
        <>
            <div className="row mx-0">
                <div className="container mx-auto my-5 col-8">
                    <div className="form-employee">
                        <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
                            THÊM MỚI NHÂN VIÊN
                        </h1>
                        <form action="">
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Ảnh <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                    <input type="file" style={{ width: "100%" }} />
                                </div>
                                <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">No image</div>
                                <div id="imageValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="account"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Tài khoản{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name="account"
                                        id="account"
                                    />
                                </div>
                                <div id="accountValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="password"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Mật khẩu{" "}
                                        <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="password"
                                        style={{ width: "100%" }}
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <div id="passwordValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="againPassword"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Nhập lại mật khẩu <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="password"
                                        style={{ width: "100%" }}
                                        name="againPassword"
                                        id="againPassword"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="name"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Họ tên <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        style={{ width: "100%" }}
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div id="nameValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="dateOfBirth"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Ngày sinh <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="date"
                                        style={{ width: "100%" }}
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                    />
                                </div>
                                <div id="dateOfBirthValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label className="fw-bold" style={{ marginRight: "2%" }}>
                                        Giới tính <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8 row">
                                    <div className="col-3">
                                        <input type="radio" name="gender" />
                                        <span style={{ marginRight: "5%" }}>Nam</span>
                                    </div>
                                    <div className="col-3">
                                        <input type="radio" name="gender" />
                                        <span style={{ marginRight: "5%" }}>Nữ</span>
                                    </div>
                                </div>
                                <div id="genderValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="email"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Email <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="email"
                                        style={{ width: "100%" }}
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div id="emailValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="identityCard"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        CCCD <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{ width: "100%" }}
                                        name="identityCard"
                                        id="identityCard"
                                    />
                                </div>
                                <div id="identityCardValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Số điện thoại <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="number"
                                        style={{ width: "100%" }}
                                        name="phoneNumber"
                                        id="phoneNumber"
                                    />
                                </div>
                                <div id="phoneNumberValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <label
                                        htmlFor="address"
                                        className="fw-bold"
                                        style={{ marginRight: "2%" }}
                                    >
                                        Địa chỉ <span className="warning">(*)</span>
                                    </label>
                                </div>
                                <div className="col-8">
            <textarea
                name="address"
                id="address"
                style={{ width: "100%" }}
                defaultValue={""}
            />
                                </div>
                                <div id="addressValid" />
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <span className="warning">(*)</span>
                                    <span>: Bắt buộc nhập</span>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: "2%" }}>
                                <div className="col-3" style={{ textAlign: "right" }}>
                                    <input type="hidden" />
                                </div>
                                <div className="col-8">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ background: "#f26b38" }}
                                    >
                                        Thêm mới
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-primary"
                                        style={{ background: "black", color: "white" }}
                                    >
                                        Quay lại
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}