import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as customerService from "../../service/CustomerService";
import {storage} from "../../customerFirebase";
import {getDownloadURL,ref, uploadBytesResumable} from "@firebase/storage";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";


export function UpdateCustomer() {
    const [customer, setCustomer] = useState();
    const param = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState("");
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findById(param.id)
            setCustomer(result);
        };
        fetchApi();
    }, []);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmitAsync = async () => {
        return new Promise((resolve, reject) => {
            const file = selectedFile;
            if (!file) {
                return reject("Chưa có file ảnh được chọn")
            }
            const storageRef = ref(storage, `files/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on(
                "state_changed", (snapshot => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setProgress(progress);
                    }, (error) => {
                        reject(error)
                    }, async () => {
                        try {
                            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            setImg(downloadUrl);
                            resolve(downloadUrl);
                        } catch (e) {
                            console.log(e)
                        }
                    }
                )
            )
        })
    };
    if (!customer) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                idCustomer: customer?.idCustomer,
                accountUser: {
                    id: customer?.accountUser?.id,
                    nameAccount: customer?.accountUser?.nameAccount,
                    passwordAccount: customer?.accountUser?.passwordAccount
                },
                nameCustomer: customer?.nameCustomer,
                dateOfBirth: customer?.dateOfBirth,
                gender: customer?.gender,
                email: customer?.email,
                identityCard: customer?.identityCard,
                address: customer?.address,
                phone: customer?.phone
            }}
                    validationSchema={Yup.object({
                        nameCustomer: Yup.string().required("Không được bỏ trống"),
                        dateOfBirth: Yup.date().required("Không được bỏ trống"),
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
                        address: Yup.string().required("không được để trống"),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại')
                            .test('check-phone', 'Số điện thoại đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await customerService.checkPhoneExists(value);
                                return !isUsernameExists;
                            }),
                    })}
                    onSubmit={(values) => {
                        const updateCustomer = async () => {
                            const newValue = {
                                ...values,
                                customerType: parseInt(values.customerType)
                            };
                            try {
                                newValue.imgCustomer = await handleSubmitAsync();
                                await customerService.editCustomer(newValue);
                                alert("update thành công")
                                console.log(values)
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        updateCustomer();
                    }}
            >
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
                                        <Field
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
                                        <Field
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
                                        <Field type="password" style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="row" style={{marginBottom: "2%"}}>
                                    <div className="col-4" style={{textAlign: "right"}}>
                                        <label className="fw-bold" style={{marginRight: "2%"}}>
                                            Mật khẩu mới <span className="color-span">(*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <Field type="password" style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="row" style={{marginBottom: "2%"}}>
                                    <div className="col-4" style={{textAlign: "right"}}>
                                        <label className="fw-bold" style={{marginRight: "2%"}}>
                                            Xác nhận mật khẩu mới <span className="color-span">(*)</span>:
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <Field type="password" style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="row" style={{marginBottom: "2%"}}>
                                    <div className="col-4" style={{textAlign: "right"}}>
                                        <Field type="hidden"/>
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
                                <Form>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <Field type="hidden" name="idCustomer"/>
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
                                                <label className="fw-bold" htmlFor="address"
                                                       style={{marginRight: "2%"}}>
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
                                                <Field type="hidden"/>
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
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}