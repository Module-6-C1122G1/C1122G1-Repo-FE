import React, {useState} from 'react';
import './index.css';
import SelectPosition from "../../components/booking-ticket/SelectPosition";
import SelectShowTime from "../../components/booking-ticket/SelectShowTime";
import {apiBookingTicket} from '../../service/BookingTicketService';
import {ConfirmTicket} from "../../components/confirm-ticket/ConfirmTicket";
import Payment from "../../components/booking-ticket/Payment";

const BookingTicket = () => {
    const [data, setData] = useState();
    const [step, setStep] = useState(1);
    const [listSelecting, setListSelecting] = useState([]);

    const handleDataShowTimeData = (film, showTime) => {
        console.log({film, showTime});
        setData({film, showTime});
        setStep(2);
    };

    const handleBuyTicket = async (listSeat) => {
        setListSelecting(listSeat)
        console.log(data);
        const res = await apiBookingTicket(listSeat);
        if (res.status === 200) {
            setStep(3);
        }
    };

    return (
        <>
            {step === 1 && <SelectShowTime onFinish={handleDataShowTimeData}/>}
            {step === 2 && <SelectPosition filmData={data} onFinish={handleBuyTicket} onBack={() => setStep(1)}/>}
            {step === 3 && <ConfirmTicket filmData={data} listSelectingData={listSelecting}/>}
        </>
    );
};
export default BookingTicket;