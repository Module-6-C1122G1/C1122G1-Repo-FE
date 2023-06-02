import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as customerService from "../../service/CustomerService";
import {storage} from "../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";


export function UpdateCustomer() {
    const [customer, setCustomer] = useState();
    const param = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState("");
    const [progress, setProgress] = useState(0);
    const [imgErr, setImgErr] = useState('');

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
                            setImgErr(e.response.data[0].defaultMessage)
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
                pointCustomer: customer?.pointCustomer,
                gender: customer?.gender,
                email: customer?.email,
                identityCard: customer?.identityCard,
                address: customer?.address,
                phone: customer?.phone,
                typeCustomer: customer?.typeCustomer,
            }}
                    validationSchema={Yup.object({
                        nameCustomer: Yup.string().trim().required("Không được bỏ trống")
                            .matches(/^(?=.*[a-zA-Z\s])[^!@#$%^&*(),.?":{}|<>]{4,100}$/, "Tên phải có độ dài từ 4 ký tự"),
                        dateOfBirth: Yup.date().required("Không được bỏ trống"),
                        gender: Yup.string().required('Vui lòng chọn giới tính'),
                        email: Yup.string().required('Vui lòng nhập địa chỉ email')
                            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ"),
                        identityCard: Yup.string().required('Vui lòng nhập số CMND'),
                        address: Yup.string().required("không được để trống"),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại')
                            .matches(/^(\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/, "Số điện thoại không hợp lệ"),
                    })}
                    onSubmit={(values) => {
                        const updateCustomer = async () => {
                            const newValue = {
                                ...values,
                                customerType: parseInt(values.customerType),

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
                        <div className="col-3" style={{flex: "0 0 auto", width: "20%",marginTop: "7%"}}>
                            <h2 style={{fontSize: 24}}>Quản lý tài khoản</h2>
                            <p className="text-center">
                                {!selectedFile && (
                                    <img
                                        src={customer?.imgCustomer}
                                        className="rounded-circle avatar"
                                        style={{width: 200}}
                                        height="200px"
                                    />
                                )}
                            </p>
                            <h3 style={{textAlign: "center"}}>{customer?.accountUser?.nameAccount}</h3>
                            <div className="mt-3" style={{textAlign: "center"}}>
                                <i className="bi bi-bookmark-star-fill"/>
                                Điểm tích lũy : 120
                            </div>
                            <div className="mt-3" style={{textAlign: "center"}}>
                                <Link to="/login" className="log-out btn btn-outline-danger">
                                    <i className="bi bi-arrow-right-circle"/>
                                    Đăng xuất
                                </Link>
                            </div>
                            <hr/>
                            <div className="mt-2">
                                <Link to="/update/:id" style={{fontSize: 14}}/>
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
                            <div className=" container mx-auto my-5 col-9">
                                <div className="border-form-customer">
                                    <Form>
                                        <h5 style={{textAlign: "center"}}>Thông tin đăng nhập</h5>
                                        <br/>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '29%'}}>
                                                    Tài khoản <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <Field className="input-customer" name="nameCustomer" type="text"/>
                                                <ErrorMessage name="customer?.accountUser?.nameAccount" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '14%'}}>
                                                    Mật khẩu củ<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <Field className="input-customer" name="accountUser.password" type="password"/>
                                                <ErrorMessage name="accountUser.password" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '5%'}}>
                                                    Mật khẩu mới <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <Field className="input-customer" name="newPassword" type="password"/>
                                                <ErrorMessage name="identityCard" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '-24%'}}>
                                                    Xác nhận mật khẩu <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-7">
                                                <Field className="input-customer" name="againPassword" type="password"/>
                                                <ErrorMessage name="email" className="error" component="span"/>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <Field type="hidden"/>
                                            </div>
                                            <div className="col-6">
                                                <button type="submit" className="btn btn-primary"
                                                        style={{background: "#f26b38"}}>
                                                    Đổi mật khẩu
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>

                            <br/>
                            <div className=" container mx-auto my-5 col-9">
                                <div className="border-form-customer">
                                    <Form>
                                        <h5 style={{textAlign: "center"}}>Thông tin tài khoản</h5>
                                        <br/>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '45%'}}>
                                                    Họ tên <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="nameCustomer" type="text"/>
                                                <ErrorMessage name="nameCustomer" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '27%'}}>
                                                    Ngày sinh<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="dateOfBirth" type="date"/>
                                                <ErrorMessage name="dateOfBirth" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '34%'}}>
                                                    Giới tính <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-4" style={{display: 'flex', marginLeft: "-20px"}}>
                                                <Field className="input-customer-radio" type="radio" name="gender"
                                                       value='Nam' id="inlineRadio1"/>
                                                <label htmlFor='inlineRadio1'>Nam</label>
                                            </div>
                                            <div className="col-4" style={{display: 'flex', marginLeft: '-20px'}}>
                                                <Field className="input-customer-radio" type="radio" name="gender"
                                                       value='Nữ' id="inlineRadio2"/>
                                                <label htmlFor='inlineRadio2'>Nữ</label>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '46%'}}>
                                                    CMND <span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="identityCard" type="text"/>
                                                <ErrorMessage name="identityCard" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '53%'}}>
                                                    Email<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="email" type="text"/>
                                                <ErrorMessage name="email" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" htmlFor="address" style={{display: 'flex', marginLeft: '45%'}}>
                                                    Địa chỉ<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="address" type="text"/>
                                                <ErrorMessage name="address" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '9%'}}>
                                                    Số điện thoại<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field className="input-customer" name="phone" type="text"/>
                                                <ErrorMessage name="phone" className="error" component="span"/>
                                            </div>
                                        </div>

                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <label className="fw-bold" style={{display: 'flex', marginLeft: '32%'}}>
                                                    Hình ảnh<span className="color-span-customer">(*)</span>:
                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <Field type="file" onChange={(e) => handleFileSelect(e)}
                                                       id="imgCustomer" name="imgCustomer"
                                                       className="form-control-plaintext d-none "/>
                                                <p>
                                                    <label htmlFor="imgCustomer" style={{
                                                        display: "inline-block",
                                                        padding: "6px 12px",
                                                        border: "1px solid",
                                                        borderRadius: "4px"
                                                    }}>
                                                        Chọn hình ảnh
                                                    </label></p>
                                                {!selectedFile && (
                                                    <img
                                                        className={"mt-2"}
                                                        src={customer?.imgCustomer}
                                                        style={{width: "50%"}}
                                                    />
                                                )}
                                                {selectedFile && (
                                                    <img className={"mt-2"} src={URL.createObjectURL(selectedFile)}
                                                         style={{width: "99%"}}/>
                                                )}
                                                <span className={'text-danger'}>{imgErr}</span>
                                                <ErrorMessage name="imgCustomer" className="error" component="span"/>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginBottom: "2%"}}>
                                            <div className="col-4" style={{textAlign: "right"}}>
                                                <Field type="hidden"/>
                                            </div>
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-primary"
                                                        style={{background: "#f26b38"}}>
                                                    Lưu
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}
