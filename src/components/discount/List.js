import {Link, NavLink, useNavigate} from "react-router-dom";
import * as discountService from "../../service/discount/DiscountService"
import DiscountModalDelete from "../discount/Delete";

import {toast} from "react-toastify"

import ReactPaginate from "react-paginate";
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css"
import {toast, ToastContainer} from "react-toastify";

function DiscountList() {
    const [discountList, setDiscountList] = useState([]);
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(0)
    let stt = page * size + 1;

    const getPropsDeleteDiscount = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    function handleUpdate(id) {
        navigate(`/discount-edit/${id}`)
    }
    const handlePageClick = (data) => {
        setPage(+data.selected);
    }
    useEffect(() => {
        const findAll = async () => {
            const rs = await discountService.findByName("", page)
            setDiscountList(rs.data.content)
            setPageCount(rs.data.totalPages)
            setSize(rs.data.size)
        }
        findAll()
    }, [page])


    return (
        discountList && <>
            <div className="row mx-0">
                <div className="container mx-auto my-5 col-10">
                    <div style={{boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)"}}>
                        <div style={{marginBottom: 20}}>
                            <h2
                                className="d-flex justify-content-center"
                                style={{padding: 16, backgroundColor: "#f26b38", color: "#fff"}}
                            >
                                DANH SÁCH KHUYẾN MÃI
                                <p id="empty"></p>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <button
                                    style={{marginLeft: 85}}
                                    className="btn btn-outline-primary"
                                >
                                    <i className="bi bi-plus-circle"/> Thêm mới khuyến mãi
                                </button>
                            </div>
                            <div className="row col-md-8">
                                <Formik initialValues={{
                                    name: ''
                                }}
                                        onSubmit={(value) => {
                                            const search = async () => {
                                                const rs = await discountService.findByName(value.name,0)
                                                if (rs === "") {
                                                    document.getElementById("empty").innerHTML = `Không Tìm Thấy Tên ${value.name}`
                                                } else {
                                                    document.getElementById("empty").innerHTML = ``
                                                }
                                                setDiscountList(rs.data.content)
                                                setPageCount(rs.data.totalPages)
                                            }
                                            search();
                                        }}
                                >
                                    <Form>
                                        <div className="form-group float-end w-75" style={{
                                            paddingLeft: 80
                                        }}>
                                            <i className="ti-search ti-search1"/>
                                            <Field type="text"
                                                   className="form-control d-inline float-start me-3 rounded-pill"
                                                   style={{
                                                       width: 250,
                                                       paddingLeft: 35
                                                   }} name="name" aria-describedby="helpId" placeholder="Tìm kiếm..."/>
                                            <button type="submit"
                                                    className="btn btn-secondary float-start rounded-pill">Tìm kiếm
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <table
                                            className="table table-striped table-hover"
                                            style={discountList === '' ? {display: 'none'} : {}}
                                        >
                                            <thead>
                                            <tr>
                                                <th style={{width: "2%"}}>STT</th>
                                                <th style={{width: "15%"}}>Khuyến mãi</th>
                                                <th>Hình ảnh</th>
                                                <th style={{width: "10%"}}>Ngày bắt đầu</th>
                                                <th style={{width: "10%"}}>Ngày kết thúc</th>
                                                <th style={{width: "25%"}}>Nội dung</th>
                                                <th>Mức ưu đãi</th>
                                                <th>Sửa</th>
                                                <th>Xoá</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                discountList.map((discount, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td scope="row">{stt++}</td>
                                                            <td>{discount.nameDiscount}</td>
                                                            <td>{discount.imageDiscount}</td>
                                                            <td>{discount.dateStart}</td>
                                                            <td>{discount.dateEnd}</td>
                                                            <td>{discount.describeDiscount}</td>
                                                            <td>{discount.percentDiscount}</td>
                                                            <td>
                                                                <button type="button"
                                                                        className="btn btn-outline-warning">
                                                                    <i className="bi bi-pencil"/>
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    className="btn btn-outline-danger"
                                                                    data-bs-target="#exampleModal"
                                                                    onClick={() => getPropsDeleteDiscount(discount.idDiscount, discount.nameDiscount)}
                                                                >
                                                                    <i className="bi bi-trash"/>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReactPaginate
                                previousLabel={'Trước'}
                                nextLabel={'Sau'}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                activeClassName="active"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />

            <DiscountModalDelete
                id={deleteId}
                name={deleteName}
                getShowList={() => {
                    toast("Xóa thành công");
                }}
            />
        </>
    );
}

export default DiscountList;

