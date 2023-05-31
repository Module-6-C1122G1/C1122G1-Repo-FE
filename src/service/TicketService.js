import axios from "axios";

export const findByIdSeat = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/seat/find-by-id/` + id);
        return result.data;
    } catch (e) {
        console.log(e)
    }

}

export const checkDiscount = async (nameDiscount) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/ticket/check-discount?nameDiscount=${nameDiscount}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }

}
export const pay = async (ticketDTO) => {
    try {
        await axios.post(`http://localhost:8080/api/ticket/pay`, {ticketDTO})
    } catch (e) {
        console.log(e)
    }
}
export const getCustomer = async (nameAcc) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/ticket/get-customer?username=${nameAcc}`)
        return result.data
    } catch (e) {
        console.log(e)
    }

}