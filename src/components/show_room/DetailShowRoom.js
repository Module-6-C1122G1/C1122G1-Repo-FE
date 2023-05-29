import {useEffect, useState} from "react";
import * as ShowRoomService from "../../service/ShowRoomService";


const DetailShowRoom = (props) => {
        const [listShowRoom,setListShowRoom] = useState([]);
        const [listSeat,setListSeat] = useState([]);
        const [listStatusSeat,setListStatusList] = useState([]);
        const [listTypeSeat,setListTypeSeat] = useState([]);

        useEffect(() => async () => {
            const detailShowRoom = await ShowRoomService.findAll()
        })
    }

export default DetailShowRoom;