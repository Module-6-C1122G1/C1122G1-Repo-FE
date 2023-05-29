import axios from "axios";

export const apiGetListSeat = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/seat/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};