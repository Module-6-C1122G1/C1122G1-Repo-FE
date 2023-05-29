import {useState, useEffect} from "react"
import {NavLink, useNavigate} from "react-router-dom";
import * as discountService from "../../service/discount/DiscountService"
import DiscountModalDelete from "/Delete";
import {toast} from "react-toastify"
import ReactPaginate from "react-paginate";
import {Formik} from "formik";

function DiscountList() {
    const [discountList, setDiscountList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const showAll = async () => {
            const result = await discountService.findAll();
            setDiscountList(result);
        };
        showAll();
    }, []);

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteDiscount = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }

    //State: Phục vụ cho việc phân trang (pagination)
    const [paginationDiscount, setPaginationDiscount] = useState([]);
    const PAGE_SIZE = 3;

    function handleUpdate(id) {
        navigate(`/discount-edit/${id}`)
    }

    useEffect(() => {
        const pagination = async () => {
            const result = await discountService.findAll();
            setPaginationCustomer(result.slice(0, 3));
        };
    }, []);


    return (
        <>
            <div className="row mx-0">
                <div className="container mx-auto my-5 col-10">
                    <div style={{boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)"}}>
                        <div style={{marginBottom: 20}}>
                            <h2
                                className="d-flex justify-content-center"
                                style={{padding: 16, backgroundColor: "#f26b38", color: "#fff"}}
                            >
                                DANH SÁCH KHUYẾN MÃI
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
                                    name: ""
                                }}
                                        onSubmit={(value) => {
                                            const search = async () => {
                                                const rs = await discountService.findByName(value.name)
                                                if (rs == "") {
                                                    document.getElementById("empty").innerHTML = `Không Tìm Thấy Tên ${value.name}`
                                                } else {
                                                    document.getElementById("empty").innerHTML = ``
                                                }
                                                setDiscountList(rs)
                                            }
                                            search()
                                        }}
                                >
                                <div className="col-md-9">
                                    <input
                                        style={{width: "100%", marginLeft: 90}}
                                        className="form-control float-start"
                                        type="text"
                                        name={name}
                                        aria-describedby={helpId}
                                        placeholder="Tìm kiếm khuyến mãi theo tên"
                                    />
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type={onsubmit}
                                        style={{marginLeft: 75}}
                                        className="btn btn-outline-success"
                                    >
                                        <i className="bi bi-search"/>
                                    </button>
                                </div>
                                </Formik>
                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <table
                                            className="table table-striped table-hover"
                                            style={discountList === '' ? { display: 'none' } : {}}
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
                                                            <td>{index + 1}</td>
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
                                                                    onClick={() => getPropsDeleteDiscount(discount.id, discount.name)}
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
                    </div>
                </div>
            </div>
            {/*Phân trang*/}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/*<CustomerModalDelete*/}
            {/*    id={deleteId}*/}
            {/*    name={deleteName}*/}
            {/*/>*/}
            <DiscountModalDelete
                id={deleteId}
                name={deleteName}
                getShowList={() => {
                    toast("Xóa thành công");
                    findAll();
                }}
            />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                // onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={Math.floor(discountList.length / PAGE_SIZE)}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>

    );

}

export default DiscountList;
