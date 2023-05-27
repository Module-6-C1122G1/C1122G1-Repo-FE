import React, { useState} from 'react';
import './index.css'
import SelectPosition from "../../components/booking-ticket/SelectPosition";
import SelectShowTime from "../../components/booking-ticket/SelectShowTime";
import { apiBookingTicket } from '../../service/BookingTicketService';
const BookingTicket = () => {
    const [data, setData] = useState();
    const  [step, setStep] = useState(1)

    const handleDataShowTimeData = (film, showTime) => {
        setData({film,showTime})
        setStep(2)
    }

    const handleBuyTicket = async (listSeat) => {
        const res = await apiBookingTicket(listSeat);
        if (res.status === 200) {
            setStep(3);
        }
    }

    return (
        <>
            {step === 1 && <SelectShowTime onFinish={handleDataShowTimeData} ga='123'/>}
            {step === 2 && <SelectPosition filmData={data} onFinish={handleBuyTicket} onBack={() => setStep(1)}/>}
            {step === 3 && <div>Màn hình thanh toán</div>}
        </>
)
}
export default BookingTicket;