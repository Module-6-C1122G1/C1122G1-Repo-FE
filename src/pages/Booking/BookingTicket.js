import React, {useEffect, useState} from 'react';
import './index.css'
import SelectPosition from "../../components/booking-ticket/SelectPosition";
import SelectShowTime from "../../components/booking-ticket/SelectShowTime";
const BookingTicket = () => {
    const [data, setData] = useState();
    const  [step, setStep] = useState(1)
    const handleBuyTicket= () => {
        // goi api dat ve
    }
    const handleDataShowTimeData = (film, showTime) => {
        console.log({film,showTime});
        setData({film,showTime})
        setStep(2)
    }
    const handlePositionData = (position) => {
        console.log(position)
        setData({...data,position})
        console.log(data)
    }

    return (
        <>
            {step === 1 && <SelectShowTime  onFinish={handleDataShowTimeData} ga='123'/>}
            {step === 2 && <SelectPosition filmData={data} onFinish={handlePositionData}/>}
        </>
)
}
export default BookingTicket;