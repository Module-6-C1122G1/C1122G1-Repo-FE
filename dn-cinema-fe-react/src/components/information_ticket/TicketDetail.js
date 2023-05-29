import {useEffect, useState} from "react"
import {useParams} from "react-router";
import * as ticketService from '../../service/InformationTicketService'
import '../film/detailStyle.css';
import {Form, Formik} from "formik";

export default function TicketDetail() {
    const param = useParams()
    const [ticketDetail, setTicketDetail] = useState()
    useEffect(() => {
        const detail = async () => {
            try {
                const res = await ticketService.detail(param.id)
                setTicketDetail(res)
            } catch (err) {
                console.log(err)
            }
        }
        detail()
    }, [param.id])
    if (!ticketDetail) {
        return null
    }
    console.log(ticketDetail)
    return (
        <>
            <div className="container mt-5">
                <div>
                    <i type="button" className="bi bi-house-fill text-secondary">
                        <span className="fst-normal">TRANG CHỦ</span>
                    </i>
                </div>
            </div>
            <div className="container shadow-movie bg-white mt-3">
                <div>
                    <div className="row mx-0 pt-5 pb-5">
                        <div className="col-3 ">
                            <div className="detail-feat-img">
                                <img
                                    src={ticketDetail?.seat.showTime.film.imgFilm}
                                    className="loaded img-hover"
                                    data-was-processed="true"
                                />
                            </div>
                        </div>
                        <div className="col-5  text-secondary">
                            <div>
                                <h3 className="text-white bg-movie py-2 text-center">
                                    XÁC NHẬN ĐẶT VÉ
                                </h3>
                            </div>
                            <hr className="text-movie"/>
                            <div className="detail-rating border border-2 p-3">
                                <div className="mt-2">
                                    <Formik
                                        initialValues={{
                                            "idTicket": ticketDetail?.idTicket,
                                            "idCustomer": ticketDetail?.customer.idCustomer,
                                            "idSeat":ticketDetail?.seat.idSeat
                                        }}
                                        onSubmit={(value)=>{
                                            const deleteTicket = async()=>{
                                                try{
                                                    await ticketService.deleteTicket(value)
                                                }catch (e) {
                                                    console.log(e)
                                                }
                                            }
                                            deleteTicket()
                                        }}
                                    >
                                        <Form>
                                    <table>
                                        <thead>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Tên phim:</th>
                                            <td>{ticketDetail?.seat.showTime.film.nameFilm}</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Rạp:</th>
                                            <td>{ticketDetail?.seat.showRoom.nameShowRoom}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Ngày chiếu :</th>
                                            <td style={{fontFamily: "Roboto"}}> {ticketDetail?.seat.showTime.film.dateStartFilm}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Giờ chiếu:</th>
                                            <td>{ticketDetail?.seat.showTime.showTime}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Ghế:</th>
                                            <td>{ticketDetail?.seat.nameSeat}</td>
                                        </tr>
                                        {/*<tr style={{ height: 39 }}>*/}
                                        {/*    <th className="text-secondary">Số lượng: </th>*/}
                                        {/*    <td></td>*/}
                                        {/*</tr>*/}
                                        <tr className="" style={{height: 39}}>
                                            <th className="text-secondary">Giá:</th>
                                            <td>{ticketDetail?.priceAfterDiscount}</td>
                                        </tr>
                                        {/*<tr style={{ height: 50 }}>*/}
                                        {/*    <th className="text-secondary">Tổng: </th>*/}
                                        {/*    <td style={{ width: 150, color: "lightcoral" }}>*/}
                                        {/*        180.000 đ*/}
                                        {/*    </td>*/}
                                        {/*</tr>*/}
                                        <tr style={{height: 39}}>

                                                    <td>
                      <button
                          type="submit"
                          className="button-movie h-100 border border-0"
                          style={{width: 100}}
                      >
                        Hủy vé
                      </button>
                                                    </td>


                                            <td>
                      <button
                          type="button"
                          className="button-movie h-100 border border-0"
                          style={{width: 120}}
                      >
                        Xác nhận
                      </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  text-secondary">
                            <div>
                                <h3 className="text-white bg-movie py-2  text-center">
                                    THÔNG TIN THÀNH VIÊN
                                </h3>
                            </div>
                            <hr className="text-movie"/>
                            <div className="detail-rating border border-2 p-3 ">
                                <div className={'mt-2'}>
                                    <table>
                                        <thead>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Mã thành viên:</th>
                                            <td>{ticketDetail?.customer.idCustomer}</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Họ và tên:</th>
                                            <td>{ticketDetail?.customer.nameCustomer}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">CMND:</th>
                                            <td>{ticketDetail?.customer.identityCard}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary" style={{width: 150}}>
                                                Điểm thành viên:{" "}
                                            </th>
                                            <td>{ticketDetail?.customer.pointCustomer}</td>
                                        </tr>
                                        <tr style={{height: 39}}>
                                            <th className="text-secondary">Đổi vé:</th>
                                            <td>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio1"
                                                        defaultValue="option1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="inlineRadio1"
                                                    >
                                                        0
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio2"
                                                        defaultValue="option2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="inlineRadio2"
                                                    >
                                                        1
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio3"
                                                        defaultValue="option3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="inlineRadio3"
                                                    >
                                                        2
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-secondary" style={{height: 39}}>Số điện thoại:</th>
                                            <td>{ticketDetail?.customer.phone}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}