import axios from "axios";

export const apiGetListSeat = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/seat/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};