import React from "react";
import './customer.css'
import * as customerService from "../../service/CustomerService";
import {ErrorMessage, Field} from "formik";

export function CreateCustomerAccount() {

    const [addCustomer, setAddCustomer] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState(null);

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
                nameAccount: "",
                passwordAccount: "",
                nameCustomer: "",
                dateOfBirth: "",
                pointCustomer: "",
                gender: "",
                phone: "",
                address: "",
                email: "",
                identityCard: "",
                imgCustomer: "",
            }}
                    onSubmit={(values, {resetForm}) => {
                        const create = async () => {
                            await customerService.saveCustomer;
                        }
                        create();
                    }}
            >
                <div className=" container mx-auto my-5 col-9">
                    <div className="border-form">
                        <h5 style={{textAlign: "center"}}>Đăng ký tài khoản</h5>
                        <br/>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Tài khoản <span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="nameAccount" type="text" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="nameAccount" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Mật khẩu <span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="passwordAccount" type="password" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="passwordAccount" className="error" component="span"/>

                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Xác nhận mật khẩu <span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="passwordAccount" type="password" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="passwordAccount" className="error" component="span"/>

                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Họ tên <span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="nameCustomer" type="text" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="nameCustomer" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Ngày sinh<span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="dateOfBirth" type="date" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="dateOfBirth" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Giới tính <span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-2">
                                <Field type="radio" id="nam" name="gender" defaultValue="HTML"/>
                                &nbsp; <label htmlFor="nam">Nam</label>
                            </div>
                            <div className="col-2">
                                <Field type="radio" id="nữ" name="gender" defaultValue="HTML"/>
                                &nbsp; <label htmlFor="nữ">Nữ</label>
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
                            </div>
                            <ErrorMessage name="identityCard" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Email<span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="email" type="text" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="email" className="error" component="span"/>
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
                                    cols={45}
                                    style={{maxWidth: "100%"}}
                                    defaultValue={""}
                                />
                            </div>
                            <ErrorMessage name="address" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Số điện thoại<span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="phone" type="text" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="phone" className="error" component="span"/>
                        </div>
                        <div className="row" style={{marginBottom: "2%"}}>
                            <div className="col-4" style={{textAlign: "right"}}>
                                <label className="fw-bold" style={{marginRight: "2%"}}>
                                    Hình ảnh<span className="color-span">(*)</span>:
                                </label>
                            </div>
                            <div className="col-4">
                                <Field name="imgCustomer" type="file" style={{width: "100%"}}/>
                            </div>
                            <ErrorMessage name="imgCustomer" className="error" component="span"/>
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
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}

