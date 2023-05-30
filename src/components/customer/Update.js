import React, {useEffect, useState} from 'react';
import {Form, Field, Formik} from 'formik';
import {customerService} from "../../service/CustomerService";
import {useNavigate, useParams} from "react-router";

function Update() {
    let param = useParams()

    let navigate = useNavigate();

    const [customers, setCustomers] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await customerService.findById(param.id)
            setCustomers(res)
        }
        fetchApi()
    }, [])

    if (!customers) {
        return null;
    }
    return (
        <Formik
            initialValues={{
                idCustomer: customers?.idCustomer,
                nameCustomer: customers?.nameCustomer,
                dateOfBirth: customers?.dateOfBirth,
                phone: customers?.phone,
                address: customers?.address,
                email: customers?.email,
                identityCard: customers?.identityCard

            }}
            onSubmit={(values) => {
                const edit = async () => {
                    console.log(values);
                    await customerService.editCustomer(values)
                    navigate('/customer');
                };
                edit();
            }}
        >


            <>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 fw-center">
                        <div>
                            <Form>
                                <Field type="hidden" name="idCustomer" />
                                <div className="container mt-5">
                                    <div>
                                        <div style={{background: "orangered"}}>
                                            <h2
                                                className="d-flex justify-content-center"
                                                style={{
                                                    padding: 16,
                                                    backgroundColor: "orangered",
                                                    color: "#fff"
                                                }}
                                            >
                                                THÔNG TIN THÀNH VIÊN
                                            </h2>
                                        </div>
                                        <div className="mb-3 align-items-center">
                                            <label htmlFor="name" className="col-form-label">
                                                Họ &amp; Tên:
                                            </label>
                                            <Field
                                                type="text"
                                                name="nameCustomer"
                                                id="name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="mb-3 align-items-center">
                                                    <label htmlFor="birthday" className="col-form-label">
                                                        Ngày sinh:
                                                    </label>
                                                    <Field
                                                        type="date"
                                                        name="dateOfBirth"
                                                        id="birthday"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                {/*<div className="mb-3 align-items-center">*/}
                                                {/*    <label className="col-form-label">Giới tính:</label>*/}
                                                {/*    <div className="form-check">*/}
                                                {/*        <input type="radio" name="option" defaultValue="option1" />{" "}*/}
                                                {/*        Nam*/}
                                                {/*        <input*/}
                                                {/*            type="radio"*/}
                                                {/*            name="option"*/}
                                                {/*            defaultValue="option2"*/}
                                                {/*        />{" "}*/}
                                                {/*        Nữ*/}
                                                {/*        <input*/}
                                                {/*            type="radio"*/}
                                                {/*            name="option"*/}
                                                {/*            defaultValue="option3"*/}
                                                {/*        />{" "}*/}
                                                {/*        LGBT*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 align-items-center">
                                                    <label htmlFor="phone" className="col-form-label">
                                                        Số điện thoại:
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Số điện thoại"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3 align-items-center">
                                                    <label htmlFor="email" className="col-form-label">
                                                        Email:
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 align-items-center">
                                                    <label htmlFor="cmnd" className="col-form-label">
                                                        Số CMND:
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="cmnd"
                                                        name="identityCard"
                                                        className="form-control"
                                                        placeholder="Chứng minh nhân dân"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 align-items-center">
                                            <label htmlFor="address" className="col-form-label">
                                                Địa chỉ:
                                            </label>
                                            <Field
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"
                                                placeholder="Địa chỉ"
                                            />
                                            <div className="mt-3">

                                                <button type="submit" className="btn btn-outline-light"
                                                        style={{background: "orangered"}}>Chỉnh sửa
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Quay lại
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="row container-fluid mt-5">
                            <h2>Phim đang chiếu</h2>
                            <div className="col-md-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <img
                                        src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495_1.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <p className="card-text">GUARDIANS OF THE GALAXY VOL.3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <img
                                        src="https://cdn.galaxycine.vn/media/2023/4/27/300x450_1682565518580.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <p className="card-text">CON NHÓT MÓT CHỒNG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <img
                                        src="https://cdn.galaxycine.vn/media/2023/4/17/300wx450h_1681703428813.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <p className="card-text">LẬT MẶT 6: TẤM VÉ ĐỊNH MỆNH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <img
                                        src="https://cdn.galaxycine.vn/media/2023/4/28/300_1682666851796.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <p className="card-text">SISU</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Formik>
    );
}


export default Update;