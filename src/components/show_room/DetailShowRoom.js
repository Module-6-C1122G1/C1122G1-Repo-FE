import {apiGetListSeat, apiGetListSeatLanhNM} from '../../service/SeatService';

import React, {useEffect, useState} from "react";
import './show-room.css';
import {useParams} from "react-router";
import {getShowRoom} from "../../service/ShowRoomService";
import {Link} from "react-router-dom";


const positionStatus = {
    1: 'normal',
    2: 'vip'
};

const seatRows = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

const DetailShowRoom = () => {

    const [allSeat, setAllSeat] = useState(null);
    const [showRoom, setShowRoom] = useState(null);
    const [listStatus, setListStatus] = useState([]);
    const [listType, setListType] = useState([]);
    const [listShowRoom, setListShowARoom] = useState([]);
    const [allSeatByRow, setAllSeatByRow] = useState([]);
    const [listSelecting, setListSelecting] = useState([]);
    const [numberOfSeat, setNumberOfSeat] = useState(1);
    const param = useParams();
    const token= localStorage.getItem("token")

    const fetchListPosition = async () => {
        const res = await apiGetListSeatLanhNM(param.id,token);
        setAllSeat(res);
        console.log(res);
        const resShowRoom = await getShowRoom(param.id,token);
        setShowRoom(resShowRoom);
        const positionsByRow = orderSeatByRow(res);
        setAllSeatByRow(positionsByRow);
    };
    useEffect(() => {
        fetchListPosition()
    }, [])

    const orderSeatByRow = (data) => {
        const seats = seatRows.map(r => (
                {
                    rowLabel: r,
                    positions: data.filter(item => item.nameSeat.includes(r))
                        .map(seatItem => ({
                            seatId: seatItem.idSeat,
                            name: seatItem.nameSeat,
                            type: seatItem.typeSeat.idTypeSeat
                        }))
                }
            )
        ).filter(row => row.positions.length > 0);
        return seats;
    };

    return (
        <>
            <div className="container-lg">
                <div className='row mt-4'>
                    <div className=' row col-12 col-md-12'>

                        <div className="select-position-wrapper">
                            <h2>{
                                showRoom && showRoom.nameShowRoom
                            }</h2>
                            <div className="position-pick">
                                <div className="situations">
                                    {allSeatByRow.map(row =>
                                        <div key={row.rowLabel} className="d-flex justify-content-around">
                                            <div className="row-label">{row.rowLabel}</div>
                                            <div className="row-positions d-flex">
                                                {row.positions.map((p, index) =>
                                                    <div
                                                        key={p.seatId}
                                                        className={`position-item ${positionStatus[p.type]} ${listSelecting.includes(p.seatId) ? 'selecting' : ''}`}
                                                    >{p.name.slice(1)}

                                                    </div>)
                                                }
                                            </div>
                                            <div className="row-label">{row.rowLabel}</div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-4 m-auto text-center screen">Màn hình</div>
                                <div className="position-info row d-flex justify-content-center">
                                    <div className="col-8 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div
                                                className="col-12 col-md-6 col-sm-6 d-flex align-items-center justify-content-center">
                                                <div className="selecting label"></div>
                                                <span>Ghế Vip</span>
                                            </div>
                                            <div
                                                className="col-12 col-md-6 col-sm-6 d-flex align-items-center justify-content-center">
                                                <div className="sell label"></div>
                                                <span>Ghế thường</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-4 mb-4 gap-2">
                <button className="d-flex btn btn-dark" type="button" >
                    <Link style={{textDecoration:"none"}} to={`/admin/showroom/list`}>
                        Quay lại
                    </Link>
                </button>
            </div>

        </>
    )
        ;
}
export default DetailShowRoom;
