import axios from "axios";

export const findByIdSeat = async (id,auth) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket/find-by-id?id=${id}&auth=${auth}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }

}

export const checkDiscount = async (nameDiscount,auth) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket/check-discount?nameDiscount=${nameDiscount}&auth=${auth}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }

}
export const pay = async (ticketDTO,auth) => {
    try {
        await axios.post(`http://localhost:8080/api/user/ticket/pay?auth=${auth}`, {ticketDTO})
    } catch (e) {
        console.log(e)
    }
}
export const getCustomer = async (nameAcc,auth) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/user/ticket/get-customer?username=${nameAcc}&auth=${auth}`)
        return result.data
    } catch (e) {
        console.log(e)
    }

}