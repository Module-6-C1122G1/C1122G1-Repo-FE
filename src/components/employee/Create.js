import {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase";
import * as Yup from "yup";
import * as employeeService from "../../service/employee/employeeService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Oval} from "react-loader-spinner";
import * as Swal from "sweetalert2";
import {useNavigate} from "react-router";

export function CreateEmployee() {
    let navigate = useNavigate();
    const [addEmployee, setAddEmployee] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmitAsync = async () => {
        return new Promise((resolve, reject) => {
            const file = selectedFile;
            if (!file) return reject("No file selected");
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgresspercent(progress);
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImg(downloadURL);
                    resolve(downloadURL);
                }
            );
        });
    };
    return (
        <>
            <Formik initialValues={{
                imgEmployee: "",
                nameAccount: "",
                passwordAccount: "",
                nameEmployee: "",
                dateOfBirth: "",
                gender: "",
                email: "",
                identityCard: "",
                phone: "",
                address: ""
            }}
                    onSubmit={(values, {resetForm}) => {
                        const create = async () => {
                            await employeeService.saveEmployee();
                        }
                        create();
                    }}
            >
                <div>
                    <div className="row mx-0">
                        <div className="container mx-auto my-5 col-8">
                            <div className="form-employee">
                                <h1 style={{textAlign: "center", marginBottom: "5%"}}>
                                    THÊM MỚI NHÂN VIÊN
                                </h1>
                                <Form>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                                Ảnh <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                            <Field name="imgEmployee" type="file" style={{width: "100%"}}/>
                                        </div>
                                        <ErrorMessage name="imgEmployee" component='span'
                                                      className='form-err'/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="account"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Tài khoản{" "}
                                                <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                style={{width: "100%"}}
                                                name="nameAccount"
                                                id="nameAccount"
                                            />
                                        </div>
                                        <ErrorMessage name="accountUser" component='span'
                                                      className='form-err'/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="password"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Mật khẩu{" "}
                                                <span className="warning">
                <span className="warning">(*)</span>
              </span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="password"
                                                style={{width: "100%"}}
                                                name="passwordAccount"
                                                id="passwordAccount"
                                            />
                                        </div>
                                        <ErrorMessage name="password" component='span'
                                                      className='form-err'/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="againPassword"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Nhập lại mật khẩu <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <input
                                                type="password"
                                                style={{width: "100%"}}
                                                name="againPassword"
                                                id="againPassword"
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="name"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Họ tên <span className="warning">(*)</span>
                                            </label>

                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                style={{width: "100%"}}
                                                name="nameEmployee"
                                                id="nameEmployee"
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="dateOfBirth"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Ngày sinh <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="date"
                                                style={{width: "100%"}}
                                                name="dateOfBirth"
                                                id="dateOfBirth"
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                                Giới tính <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8 row">
                                            <div className="col-3">
                                                <Field type="radio" name="gender"/>
                                                <span style={{marginRight: "5%"}}>Nam</span>
                                            </div>
                                            <div className="col-3">
                                                <Field type="radio" name="gender"/>
                                                <span style={{marginRight: "5%"}}>Nữ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="email"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Email <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="email"
                                                style={{width: "100%"}}
                                                name="email"
                                                id="email"
                                            />
                                        </div>
                                        <div id="emailValid"/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="identityCard"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                CCCD <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <input
                                                type="number"
                                                style={{width: "100%"}}
                                                name="identityCard"
                                                id="identityCard"
                                            />
                                        </div>
                                        <div id="identityCardValid"/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="phone"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Số điện thoại <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="number"
                                                style={{width: "100%"}}
                                                name="phone"
                                                id="phone"
                                            />
                                        </div>
                                        <div id="phoneNumberValid"/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="address"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Địa chỉ <span className="warning">(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                name="address"
                                                id="address"
                                                style={{width: "100%"}}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div id="addressValid"/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <span className="warning">(*)</span>
                                            <span>: Bắt buộc nhập</span>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <input type="hidden"/>
                                        </div>
                                        <div className="col-8">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{background: "#f26b38"}}
                                            >
                                                Thêm mới
                                            </button>
                                            <button
                                                type="reset"
                                                className="btn btn-primary"
                                                style={{background: "black", color: "white"}}
                                            >
                                                Quay lại
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}