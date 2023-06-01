import React, {useEffect, useState} from "react";
import '../customer/Customer.css'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../customerFirebase";
import * as customerService from "../../service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {findAllCustomerType} from "../../service/CustomerService";

export function CreateCustomerAccount() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState(null);
    const [progress, setProgress] = useState(0);
    const [typeCustomer, setTypeCustomer] = useState([]);

    useEffect(() => {
        const list = async () => {
            setTypeCustomer(await findAllCustomerType())
        }
        list()
    }, [])

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmitAsync = async () => {
        return new Promise((resolve, reject) => {
            const file = selectedFile;
            if (!file) return reject("Chưa có file ảnh nào được chọn");
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
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
                accountUser: {nameAccount: "", passwordAccount: ""},
                confirmNewPassword: "",
                nameCustomer: "",
                dateOfBirth: "",
                pointCustomer: "",
                gender: "",
                phone: "",
                address: "",
                email: "",
                identityCard: "",
                imgCustomer: "",
                typeCustomer: {
                    idTypeCustomer: 1
                }
            }}
                    validationSchema={Yup.object({
                        accountUser: Yup.object().shape({
                            nameAccount: Yup.string().required('Vui lòng nhập tên tài khoản')
                                .test('check-username', 'Tài khoản đã tồn tại', async function (value) {
                                    try {
                                        if (!value) {
                                            return true;
                                        }
                                        const isUsernameExists = await customerService.checkUsernameExists(value);
                                        console.log(isUsernameExists)
                                        return !isUsernameExists;
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }),
                            passwordAccount: Yup.string().required('Vui lòng nhập mật khẩu tài khoản'),
                            againPasswordAccount: Yup.string().required('Vui lòng nhập lại mật khẩu')
                                .oneOf([Yup.ref("passwordAccount")], "Mật khẩu không khớp")
                        }),

                        nameCustomer: Yup.string().required("Không được bỏ trống"),
                        dateOfBirth: Yup.date().required("Không được bỏ trống"),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại')
                            .test('check-phone', 'Số điện thoại đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await customerService.checkPhoneExists(value);
                                return !isUsernameExists;
                            }),
                        address: Yup.string().required("không được để trống"),
                        gender: Yup.string().required('Vui lòng chọn giới tính'),
                        email: Yup.string().required('Vui lòng nhập địa chỉ email')
                            .test('check-email', 'Email đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await customerService.checkEmailExists(value);
                                return !isUsernameExists;
                            }),
                        identityCard: Yup.string().required('Vui lòng nhập số CMND')
                            .test('check-identityCard', 'CCCD đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await customerService.checkIdentityCardExists(value);
                                return !isUsernameExists;
                            }),
                    })
                    }

                    onSubmit={(values, {resetForm}) => {
                        const create = async () => {
                            const newValue = {
                                ...values,
                                imgCustomer: firebaseImg,
                                customerType: parseInt(values.customerType)
                            };
                            newValue.imgEmployee = await handleSubmitAsync();
                            await customerService.saveCustomer(newValue);
                            console.log(newValue)
                            alert("thêm thành công!")
                            resetForm();
                        }
                        create();
                    }}
            >
                <div className=" container mx-auto my-5 col-9">
                    <div className="border-form">
                        <h5 style={{textAlign: "center"}}>Đăng ký tài khoản</h5>
                        <br/>
                        <Form>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Tài khoản <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="accountUser.nameAccount" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="accountUser.nameAccount" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Mật khẩu <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="accountUser.passwordAccount" type="password" style={{width: "100%"}}/>
                                    <ErrorMessage name="accountUser.passwordAccount" className="error"
                                                  component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Xác nhận mật khẩu <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="accountUser.againPasswordAccount" type="password"
                                           style={{width: "100%"}}/>
                                    <ErrorMessage name="accountUser.againPasswordAccount" className="error"
                                                  component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Họ tên <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="nameCustomer" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="nameCustomer" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Ngày sinh<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="dateOfBirth" type="date" style={{width: "100%"}}/>
                                    <ErrorMessage name="dateOfBirth" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Giới tính <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-1">
                                    <Field type="radio" name="gender" value='nam' id="inlineRadio1"
                                    />
                                    <label htmlFor='inlineRadio1' style={{marginRight: "5%"}}>Nam</label>
                                </div>
                                <div className="col-2">
                                    <Field type="radio" name="gender" value='nữ' id="inlineRadio2"
                                    />
                                    <label htmlFor='inlineRadio2' style={{marginRight: "5%"}}>Nữ</label>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        CMND <span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="identityCard" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="identityCard" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Email<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="email" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="email" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" htmlFor="address" style={{marginRight: "2%"}}>
                                        Địa chỉ<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="address" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="address" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Số điện thoại<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field name="phone" type="text" style={{width: "100%"}}/>
                                    <ErrorMessage name="phone" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{marginRight: "2%"}}>
                                        Hình ảnh<span className="color-span">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field type="file" onChange={(e) => handleFileSelect(e)}
                                           id="imgCustomer" name="imgCustomer"
                                           className="form-control-plaintext d-none "
                                    />
                                    <p>
                                        <label htmlFor="imgCustomer" style={{
                                            display: "inline-block", padding: "6px 12px",
                                            border: "1px solid", borderRadius: "4px"
                                        }}>
                                            Chọn hình ảnh
                                        </label></p>
                                    {!selectedFile && (
                                        <span className={"mt-2 text-danger"}>Chưa có hình ảnh được chọn</span>
                                    )}
                                    {selectedFile && (
                                        <img className={"mt-2"} src={URL.createObjectURL(selectedFile)}
                                             style={{width: "100%"}}/>
                                    )}
                                </div>
                            </div>
                            <ErrorMessage name="imgCustomer" className="error" component="span"/>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <Field type="hidden"/>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary" style={{background: "#f26b38"}}>
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}

