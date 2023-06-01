import * as employeeService from "../../service/employee/employeeService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase";
import * as Yup from "yup";

export function UpdateEmployee() {
    const [employee, setEmployee] = useState();
    const param = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [firebaseImg, setImg] = useState("");
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await employeeService.findById(param.id)
            setEmployee(result);
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
    if (!employee) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                idEmployee: employee?.idEmployee,
                // imgEmployee: employee?.imgEmployee,
                accountUser: {
                    id: employee?.accountUser?.id,
                    nameAccount: employee?.accountUser?.nameAccount,
                    passwordAccount: employee?.accountUser?.passwordAccount
                },
                nameEmployee: employee?.nameEmployee,
                dateOfBirth: employee?.dateOfBirth,
                gender: employee?.gender,
                email: employee?.email,
                identityCard: employee?.identityCard,
                phone: employee?.phone,
                address: employee?.address
            }}
                    validationSchema={Yup.object({
                        accountUser: Yup.object().shape({
                            nameAccount: Yup.string().required('Vui lòng nhập tên tài khoản')
                                .test('check-username', 'Tài khoản đã tồn tại', async function (value) {
                                    // debugger;
                                    try {
                                        if (!value) {
                                            return true;
                                        }
                                        const isUsernameExists = await employeeService.checkUsernameExists(value);
                                        console.log(isUsernameExists)
                                        return !isUsernameExists;
                                    } catch (error) {
                                        console.log(error);
                                    }

                                }),
                            passwordAccount: Yup.string().required('Vui lòng nhập mật khẩu tài khoản'),
                            againPasswordAccount: Yup.string().required('Vui lòng nhập lại mật khẩu')
                                .test('password-match', 'Mật khẩu nhập lại không khớp', function (value) {
                                    debugger;
                                    return value === this.resolve(Yup.ref('accountUser.passwordAccount'));
                                })
                        }),
                        nameEmployee: Yup.string().required('Vui lòng nhập tên nhân viên'),
                        dateOfBirth: Yup.date().required('Vui lòng nhập ngày sinh'),
                        gender: Yup.string().required('Vui lòng chọn giới tính'),
                        email: Yup.string().required('Vui lòng nhập địa chỉ email')
                            .test('check-email', 'Email đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await employeeService.checkEmailExists(value);
                                return !isUsernameExists;
                            }),
                        identityCard: Yup.string().required('Vui lòng nhập số CMND')
                            .test('check-identityCard', 'CCCD đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await employeeService.checkIdentityCardExists(value);
                                return !isUsernameExists;
                            }),
                        phone: Yup.string().required('Vui lòng nhập số điện thoại')
                            .test('check-phone', 'Số điện thoại đã tồn tại', async function (value) {
                                if (!value) {
                                    return true; // Không kiểm tra nếu không có giá trị
                                }

                                const isUsernameExists = await employeeService.checkPhoneExists(value);
                                return !isUsernameExists;
                            }),
                        address: Yup.string().required('Vui lòng nhập địa chỉ'),
                    })}
                    onSubmit={(values) => {
                        const edit = async () => {
                            const newValue = {
                                ...values,
                                imgEmployee: firebaseImg,
                            };
                            try {
                                newValue.imgEmployee = await handleSubmitAsync();
                                await employeeService.editEmployee(newValue);
                                console.log(values)
                            } catch (e) {
                                console.log(e);
                            }

                        }
                        edit();
                    }}
            >
                <div>
                    <div className="row mx-0">
                        <div className="container mx-auto my-5 col-8">
                            <div className="form-employee">
                                <h1 style={{textAlign: "center", marginBottom: "5%"}}>
                                    CẬP NHẬT NHÂN VIÊN
                                </h1>
                                <Form>
                                    <div>
                                        <Field type='hidden' name='idEmployee'/>
                                    </div>
                                    <div>
                                        <Field type='hidden' name='accountUser.id'/>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label className="fw-bold" style={{marginRight: "2%"}}>
                                                Ảnh <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                            <Field
                                                type="file"
                                                onChange={(e) => handleFileSelect(e)}
                                                id="imgEmployee"
                                                name={"imgEmployee"}
                                                className="form-control-plaintext d-none "
                                            />
                                            <p>
                                                <label htmlFor="imgEmployee" style={{
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
                                                    src={employee?.imgEmployee}
                                                    style={{width: "100%"}}
                                                />
                                            )}
                                            {selectedFile && (
                                                <img
                                                    className={"mt-2"}
                                                    src={URL.createObjectURL(selectedFile)}
                                                    style={{width: "100%"}}
                                                />
                                            )}

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
                                                Tài khoản
                                                <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                style={{width: "100%"}}
                                                name='accountUser.nameAccount'
                                                disabled={true}
                                            />
                                        </div>
                                        {/*<ErrorMessage name="accountUser" component='span'*/}
                                        {/*              className='form-err'/>*/}
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="password"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Mật khẩu{" "}
                                                <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="password"
                                                style={{width: "100%"}}
                                                name='accountUser.passwordAccount'
                                            />
                                        </div>
                                        <ErrorMessage name="password" component='span'
                                                      className='form-err'/>
                                    </div>
                                    {/*<div className="row" style={{marginBottom: "2%"}}>*/}
                                    {/*    <div className="col-3" style={{textAlign: "right"}}>*/}
                                    {/*        <label*/}
                                    {/*            htmlFor="againPassword"*/}
                                    {/*            className="fw-bold"*/}
                                    {/*            style={{marginRight: "2%"}}*/}
                                    {/*        >*/}
                                    {/*            Nhập lại mật khẩu <span className="warning">(*)</span>*/}
                                    {/*        </label>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-8">*/}
                                    {/*        <input*/}
                                    {/*            type="password"*/}
                                    {/*            style={{width: "100%"}}*/}
                                    {/*            name="againPassword"*/}
                                    {/*            id="againPassword"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="nameEmployee"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Họ tên <span style={{color: "red"}}>(*)</span>
                                            </label>

                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="text"
                                                style={{width: "100%"}}
                                                name='nameEmployee'
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
                                                Ngày sinh <span style={{color: "red"}}>(*)</span>
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
                                                Giới tính <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8 row">
                                            <div className="col-3">
                                                <Field type="radio" name="gender" value='Nam' id="inlineRadio1"
                                                />
                                                <label htmlFor='inlineRadio1' style={{marginRight: "5%"}}>Nam</label>
                                            </div>
                                            <div className="col-3">
                                                <Field type="radio" name="gender" value='Nữ' id="inlineRadio2"
                                                />
                                                <label htmlFor='inlineRadio2' style={{marginRight: "5%"}}>Nữ</label>
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
                                                Email <span style={{color: "red"}}>(*)</span>
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
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="identityCard"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                CCCD <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                type="number"
                                                style={{width: "100%"}}
                                                name="identityCard"
                                                id="identityCard"
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="phone"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Số điện thoại <span style={{color: "red"}}>(*)</span>
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
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <label
                                                htmlFor="address"
                                                className="fw-bold"
                                                style={{marginRight: "2%"}}
                                            >
                                                Địa chỉ <span style={{color: "red"}}>(*)</span>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                name="address"
                                                id="address"
                                                style={{width: "100%"}}
                                            />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <span style={{color: "red"}}>(*)</span>
                                            <span>: Bắt buộc nhập</span>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: "2%"}}>
                                        <div className="col-3" style={{textAlign: "right"}}>
                                            <Field type="hidden"/>
                                        </div>
                                        <div className="col-8">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{background: "#f26b38"}}
                                            >
                                                Cập nhật
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