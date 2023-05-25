import './index.css';
import {useEffect, useState} from "react";

const positions = [
    {
        rowLabel: 'A',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'B',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'C',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'D',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'E',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'F',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'G',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'H',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    },
    {
        rowLabel: 'I',
        positions: [0, 1, 2, 1, 2, 2, 1, 0, 1, 1, 2, 0, 0, 0]
    }
];
const positionStatus = {
    0: 'unavailable',
    1: 'available',
    2: 'sell',
};

const SelectPosition = (props) => {
    const {onFinish, filmData} = props;
    const [allPositions, setAllPositions] = useState([]);
    const [allPositionStatus, setAllPositionStatus] = useState([]);
    const [listSelecting, setListSelecting] = useState([]);

    const fetchListPosition = async () => {
        setAllPositions(positions.reverse());
    };
    const fetchListPositionStatus = async () => {
        setAllPositionStatus(positionStatus);
    };

    const handlerSelecting = async (position, positionStatus) => {
        // Only handle on position that available
        if (positionStatus === 1) {
            if (!listSelecting.includes(position)) {
                setListSelecting([...listSelecting,position])
            } else {
                const newList = [...listSelecting].filter(item => item !== position);
                setListSelecting(newList)
            }
        }
        // if (!listSelecting.includes(position) && (positionStatus === 1)) {
        //     listSelecting.push(position);
        //     // onSelectPosition(position);
        // } else if (listSelecting.includes(position) && (positionStatus === 1)) {
        //     listSelecting.splice(listSelecting.indexOf(position), 1);
        //     // onSelectPosition(position);
        // }
    };
    useEffect(() => {
        fetchListPosition();
    }, []);
    useEffect(() => {
        fetchListPositionStatus();
    }, []);
    useEffect(() => {
        console.log(listSelecting);
    }, [listSelecting]);

    return (
        <div className="container-lg">
            <div className="select-position-wrapper">
                <h3 className="title">Chọn ghế</h3>
                <div className="number-of-position mb-3">
                    <span>Số lượng ghế</span>
                    <select aria-label="" className="form-select form-select-lg">
                        <option disabled selected>Chọn số lượng</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <h4 className="title">Bạn đã chọn</h4>
                <div className="d-flex gap-3 mb-1">
                    <div className="text-light">Phim: {filmData?.film?.nameFilm}</div>
                    <div className="text-light">Ngày chiếu: {filmData?.showTime.showDate}</div>
                    <div className="text-light">Lịch chiếu phim: {filmData.showTime.showTime}</div>
                </div>

                <div className="position-pick">
                    <div className="situations">
                        {allPositions.map(it =>
                            <div key={it.rowLabel} className="d-flex justify-content-around">
                                <div className="row-label">{it.rowLabel}</div>
                                <div className="row-positions d-flex">
                                    {it.positions.map((p, index) =>
                                        <div
                                            key={index}
                                            className={`position-item ${positionStatus[p]} ${listSelecting.includes(index + 1 + it.rowLabel) ? 'selecting' : ''}`}
                                            onClick={() => handlerSelecting(index + 1 + it.rowLabel, p)}
                                        >{index + 1}

                                        </div>)
                                    }
                                </div>
                                <div className="row-label">{it.rowLabel}</div>
                            </div>
                        )}
                    </div>
                    <div className="col-4 m-auto text-center screen">Màn hình</div>
                    <div className="position-info row d-flex justify-content-center">
                        <div className="col-8 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-12 col-md-3 col-sm-6 d-flex align-items-center">
                                    <div className="selecting label"></div>
                                    <span>Ghế đang chọn</span>
                                </div>
                                <div className="col-12 col-md-3 col-sm-6 d-flex align-items-center">
                                    <div className="sell label"></div>
                                    <span>Ghế đã bán</span>
                                </div>
                                <div className="col-12 col-md-3 col-sm-6 d-flex align-items-center">
                                    <div className="available label"></div>
                                    <span>Có thể chọn</span>
                                </div>
                                <div className="col-12 col-md-3 col-sm-6 d-flex align-items-center">
                                    <div className="unavailable label"></div>
                                    <span>Không thể chọn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4 gap-2">
                <a className="button-back d-flex btn btn btn-primary" href="./select-film.html" role="button">
                    Quay lại
                </a>
                <button onClick={()=>onFinish(listSelecting)} className="d-flex btn btn-primary" type="button">Tiếp tục</button>
                <button onClick={() => onFinish('A1')}>CHon ghes</button>
            </div>
        </div>
        // <div className="container-lg">
        //     Manhf hinh chon ghe
        //     <button onClick={() => onFinish('A1')}>CHon ghes</button>
        // </div>

    );
};
export default SelectPosition;