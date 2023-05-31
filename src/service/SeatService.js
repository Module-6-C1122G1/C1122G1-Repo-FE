import axios from "axios";

export const apiGetListSeat = async (id,auth) => {
    const headers =  {
        'Authorization': 'Bearer ' + auth
    }
    try {
        const result = await axios.get(`http://localhost:8080/api/admin/seat/list/${id}`,{headers});
        console.log(result.data)
        return result.data;
    } catch (e) {
        console.log(e);
    }
};