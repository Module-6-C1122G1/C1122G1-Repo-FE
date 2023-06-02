import React, {useEffect, useState} from "react";
import '../customer/customer.css'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase";
import * as customerService from "../../service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {findAllCustomerType} from "../../service/CustomerService";
import {useNavigate} from "react-router";

export function CreateCustomerAccount() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState(null);
    const [progress, setProgress] = useState(0);
    const [typeCustomer, setTypeCustomer] = useState([]);
    // const navigate = useNavigate();

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
                nameCustomer: "",
                dateOfBirth: "",
                pointCustomer: "0.0",
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
                                .matches(/^[a-zA-Z0-9]{1,20}$/, "Tên tài khoản không chứa ký tự đặc biệt và không quá 20 ký tự")
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
                            passwordAccount: Yup.string().required('Vui lòng nhập mật khẩu tài khoản')
                                .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
                                    "mật khẩu phải có ít nhất 1 ký tự viết hoa, kèm ký tự đặc biệt và ít nhất 8 ký tự"),
                            againPasswordAccount: Yup.string().required('Vui lòng nhập lại mật khẩu')
                                .oneOf([Yup.ref("passwordAccount")], "Mật khẩu không khớp")
                        }),

                        nameCustomer: Yup.string().required("Không được bỏ trống")
                            .matches(/^(?=.*[a-zA-Z\s])[^!@#$%^&*(),.?":{}|<>]{4,100}$/, "Tên phải có độ dài từ 4 ký tự, không chứa ký tự đặc biệt"),
                        dateOfBirth: Yup.date().required("Không được bỏ trống"),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại')
                            .matches(/^(\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/, "Số điện thoại không hợp lệ, phải là 10 hoặc 11 số")
                            .test('check-phone', 'Số điện thoại đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }
                                const isUsernameExists = await customerService.checkPhoneExists(value);
                                return !isUsernameExists;
                            }),
                        address: Yup.string().required("không được để trống")
                            .matches(/^.{0,100}$/, "Địa chỉ phải có độ dài không quá 100 ký tự và không chứa ký tự đặc biệt"),
                        gender: Yup.string().required('Vui lòng chọn giới tính'),
                        email: Yup.string().required('Vui lòng nhập địa chỉ email')
                            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email không hợp lệ, không dài quá 100 ký tự")
                            .test('check-email', 'Email đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await customerService.checkEmailExists(value);
                                return !isUsernameExists;
                            }),
                        identityCard: Yup.string().required('Vui lòng nhập số CMND')
                            .matches(/^\d{10,11}$/, "CCCD phải là 10 hoặc 11 số")
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
                    <div className="border-form-customer">
                        <Form>
                            <h5 style={{textAlign: "center"}}>Đăng ký tài khoản</h5>
                            <br/>
                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '60%'}}>
                                        Tài khoản <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="accountUser.nameAccount" type="text"/>
                                    <ErrorMessage name="accountUser.nameAccount" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '60%'}}>
                                        Mật khẩu <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="accountUser.passwordAccount" type="password"
                                           />
                                    <ErrorMessage name="accountUser.passwordAccount" className="error"
                                                  component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '33%'}}>
                                        Xác nhận mật khẩu <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="accountUser.againPasswordAccount" type="password"/>
                                    <ErrorMessage name="accountUser.againPasswordAccount" className="error"
                                                  component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '68%'}}>
                                        Họ tên <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="nameCustomer" type="text"/>
                                    <ErrorMessage name="nameCustomer" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '60%'}}>
                                        Ngày sinh<span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="dateOfBirth" type="date"/>
                                    <ErrorMessage name="dateOfBirth" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '63%'}}>
                                        Giới tính <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-2"style={{display: 'flex',marginLeft:"-20px"}} >
                                    <Field className="input-customer-radio" type="radio" name="gender" value='Nam' id="inlineRadio1" />
                                    <label htmlFor='inlineRadio1' >Nam</label>
                                </div>
                                <div className="col-2"  style={{display: 'flex',marginLeft: '-20px'}}>
                                    <Field className="input-customer-radio" type="radio" name="gender" value='Nữ' id="inlineRadio2" />
                                    <label htmlFor='inlineRadio2'>Nữ</label>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '69%'}}>
                                        CMND <span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="identityCard" type="text" />
                                    <ErrorMessage name="identityCard" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '72%'}}>
                                        Email<span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="email" type="text" />
                                    <ErrorMessage name="email" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label
                                        className="fw-bold" htmlFor="address" style={{display: 'flex',marginLeft: '68%'}}>
                                        Địa chỉ<span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="address" type="text"/>
                                    <ErrorMessage name="address" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '50%'}}>
                                        Số điện thoại<span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field className="input-customer" name="phone" type="text" />
                                    <ErrorMessage name="phone" className="error" component="span"/>
                                </div>
                            </div>

                            <div className="row" style={{marginBottom: "2%"}}>
                                <div className="col-4" style={{textAlign: "right"}}>
                                    <label className="fw-bold" style={{display: 'flex',marginLeft: '62%'}}>
                                        Hình ảnh<span className="color-span-customer">(*)</span>:
                                    </label>
                                </div>
                                <div className="col-4">
                                    <Field type="file" onChange={(e) => handleFileSelect(e)}
                                           id="imgCustomer" name="imgCustomer"
                                           className="form-control-plaintext d-none "/>
                                    <p>
                                        <label htmlFor="imgCustomer"
                                               style={{
                                                   display: "inline-block",
                                                   padding: "6px 12px",
                                                   border: "1px solid",
                                                   borderRadius: "4px"
                                               }}>
                                            Chọn hình ảnh
                                        </label>
                                    </p>
                                    {!selectedFile && (
                                        <span className={"mt-2 text-danger"}>Chưa có hình ảnh được chọn</span>
                                    )}
                                    {selectedFile && (
                                        <img className={"mt-2"} src={URL.createObjectURL(selectedFile)}
                                             style={{width: "99%"}}/>
                                    )}
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

