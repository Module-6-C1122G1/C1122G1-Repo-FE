import { useState, useEffect } from "react";
import "../ticket/ticket.css";
import { Field, Form, Formik } from "formik";
import ReactPaginate from "react-paginate";
import { findAllTicket } from "../../service/TicketService";

export function ListTicket() {
  const [listTicket, setListTicket] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [nameAndPage, setNameAndPage] = useState({
    page: 0,
    name: "",
  });
  useEffect(() => {
    const list = async () => {
      const result = await findAllTicket(nameAndPage);
      setListTicket(result.content);
      setPageCount(result.totalPages);
    };

    list();
  }, [nameAndPage]);
  const handlePageClick = (event) => {
    setNameAndPage((prev) => ({ ...prev, page: event.selected }));
  };

  return (
    <>
      <div className="row mx-0">
        <div
          className="container-fluid mx-auto my-5 col-8"
          style={{ width: "80%" }}
        >
          <div style={{ boxShadow: "1px 3px 10px 5px rgba(0, 0, 0, 0.2)" }}>
            <div style={{ marginBottom: 20 }}>
              <h2
                className="d-flex justify-content-center"
                style={{
                  padding: 16,
                  backgroundColor: "orangered",
                  color: "#fff",
                }}
              >
                DANH SÁCH VÉ ĐẶT
              </h2>
            </div>
            <div className="row ">
              <div className="col-2 col-md-6" />
              <div className="col-8 col-md-4 p-0 d-flex justify-content-center gap-2">
                <Formik
                  initialValues={{ name: "" }}
                  onSubmit={(values) => {
                    setNameAndPage((prev) => {
                      return { ...prev, ...values, page: 0 };
                    });
                  }}
                >
                  <Form className="d-flex align-items-center">
                    <Field
                      name="name"
                      className="form-control mx-2"
                      type="text"
                      placeholder="Tìm kiếm theo mã vé, tên phim..."
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      title="Tìm kiếm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </Form>
                </Formik>
              </div>
              <div className="col-2 p-0" />
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-center">
                    {listTicket.length === 0 ? (
                      <h1 className={"text-danger text-center my-3"}>
                        Không tìm thấy kết quả
                      </h1>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-striped table-hover align-middle">
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>Mã vé đặt</th>
                              <th>Mã thành viên</th>
                              <th>Họ tên</th>
                              <th>CMND</th>
                              <th>Số điện thoại</th>
                              <th>Phim</th>
                              <th>Ngày chiếu</th>
                              <th>Giờ chiếu</th>
                              <th />
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {listTicket.map((ticket, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ticket.id_ticket}</td>
                                <td>{ticket.id_customer}</td>
                                <td>{ticket.name_customer}</td>
                                <td>{ticket.phone}</td>
                                <td>{ticket.identity_card}</td>
                                <td>{ticket.name_film}</td>
                                <td>{ticket.show_date}</td>
                                <td>{ticket.show_time}</td>
                                <td>
                                  <button
                                    className="btn btn-outline-success"
                                    title="Nhận vé"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-check2-square"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                    </svg>
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    title="Huỷ vé"
                                    className="btn btn-outline-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteCustomer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-trash3"
                                      viewBox="0 0 16 16"
                                      title="Xoá"
                                    >
                                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="d-grid">
                          <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageCount={pageCount}
                            previousLabel="< "
                            containerClassName="pagination"
                            pageLinkClassName="page-num"
                            nextLinkClassName="page-next"
                            previousLinkClassName="page-previous"
                            activeClassName="active"
                            disabledClassName="d-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Modal xoá*/}
      <div
        className="modal fade"
        id="deleteCustomer"
        tabIndex="{-1}"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Xóa Phim
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Bạn có chắc chắn muốn huỷ vé phim
              <span className="text-danger fw-bold">Harry Potter</span> không?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button className="btn btn-danger" data-bs-dismiss="modal">
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
