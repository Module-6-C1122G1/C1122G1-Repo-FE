import axios from "axios";


export const apiGetListSeatLanhNM = async (id,auth) => {
    const headers = {
        'Authorization': 'Bearer ' + auth
    }
    try {
        const result = await axios.get(`http://localhost:8080/api/admin/seat/list/${id}`, {headers});
        console.log(result.data)
    } catch (e) {
        console.log(e);
    }
}

export const apiGetListSeat = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/seat/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};