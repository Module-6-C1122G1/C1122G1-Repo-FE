import '../film/detailStyle.css';
import './TicketDetail'

export function TicketPrint(props) {
    return (
        <>
            <div className="container abc">
                <div>
                    <div className="border border-2 text-secondary">
                        <div className="detail-rating p-3">
                            <h3 className="text-center text-movie">
                                VÉ XEM PHIM
                            </h3>
                            <p>Công ty cổ phần DN Cinenma</p>
                            <p>Địa chỉ: 280 Trần Hưng Đạo, An Hải Tây, Sơn Trà, Đà Nẵng</p>
                        </div>
                        <div className="xxx"></div>
                        {/*<hr className="text-movie xxx" />*/}
                        <h3 className="text-center text-movie">DN Cinema</h3>
                        <div className="detail-rating p-3">
                            <div>
                                <h5 className="text-center">{props.ticketDetail.seat.showTime.film.nameFilm}</h5>
                            </div>
                            <table>
                                <thead>
                                {/*<tr style={{height: 39}}>*/}
                                    {/*<th className="text-secondary">Tên phim:</th>*/}
                                    {/*<h2>{props.ticketDetail.seat.showTime.film.nameFilm}</h2>*/}
                                {/*</tr>*/}
                                </thead>
                                <tbody>
                                <tr style={{height: 39}}>
                                    <th className="text-secondary">Rạp:</th>
                                    <td>{props.ticketDetail.seat.showRoom.nameShowRoom}</td>
                                </tr>
                                <tr style={{height: 39}}>
                                    <th className="text-secondary">Ngày chiếu :</th>
                                    <td style={{fontFamily: "Roboto"}}>{props.ticketDetail.seat.showTime.film.dateStartFilm}</td>
                                </tr>
                                <tr style={{height: 39}}>
                                    <th className="text-secondary">Giờ chiếu:</th>
                                    <td>{props.ticketDetail.seat.showTime.showTime}</td>
                                </tr>
                                <tr style={{height: 39}}>
                                    <th className="text-secondary">Ghế:</th>
                                    <td>{props.ticketDetail.seat.nameSeat}</td>
                                </tr>
                                <tr className="" style={{height: 39}}>
                                    <th className="text-secondary">Giá:</th>
                                    <td>{props.ticketDetail.priceAfterDiscount}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="xxx"></div>
                        <div>
                            <p className="text-center" >Cảm ơn quý khách</p>
                            <p className="text-center" >Hẹn gặp lại!</p>

                        </div>

                    </div>

                    {/*</div>*/}

                </div>
            </div>


        </>
    )
}