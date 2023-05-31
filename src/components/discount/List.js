import { useEffect, useState } from "react"
import * as discountService from "../../service/discount/DiscountService"

const DiscountList = () => {
    const [discounts, setDiscount] = useState([])
    const discountList = async () => {
        const result = await discountService.findAll();
        setDiscount(result)
    }
    useEffect(() => {
        discountList();
    }, [])


    return (
        <>
            <div>
                <div class="row mx-0 ">
                    <div class="event">
                        <div className="row mx-0 ">
                            <div style={{ backgroundColor: "#f26b38" }}>
                                <h3 style={{ color: "white" }}>Khuyến Mãi -Sự Kiện</h3>
                            </div>
                        </div>
                        <div class="row mx-0 ps-5">
                            {
                                discounts.map((discount) => (
                                    <div className="col-md-4 container" style={{ paddingTop: 20 }}>
                                        <div
                                            className="card"
                                            style={{ width: 400, backgroundColor: "rgb(0 0 0)" }}
                                        >
                                            <a href="detailmovie.html">
                                                <img
                                                    style={{ height: 500 }}
                                                    src={discount.imageDiscount}
                                                    className="image"
                                                />
                                                <div className="readmore">
                                                    <p style={{ color: "white" }}>
                                                        <b>{discount.nameDiscount}</b>
                                                        <p>"Ngày bắt đầu:"{discount.dateStart}</p>
                                                        <p>Ngày kết thúc:"{discount.dateEnd}</p>
                                                        <p>Giảm giá:{discount.percentDiscount}</p>
                                                    </p>
                                                    <div className="text" style={{ marginTop: 200 }}>
                                                        Chi tiết
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default DiscountList;