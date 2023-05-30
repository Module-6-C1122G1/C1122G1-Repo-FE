import axios from "axios";

export const findAllTicketBooking = async (page) => {
    try {
        return await axios.get(`http://localhost:8080/api/user?page=${page?page:0}`);
    } catch (error) {
        console.log(error)
    }
}
export const findAllTicketBookingPoint = async (page) => {
    try {
        return axios.get(`http://localhost:8080/api/user/history?page=${page?page:0}`);
    } catch (error) {
        console.log(error)
    }
}
export const deleteTicket = async (id) => {
    try {
        await axios.delete("http://localhost:8080/api/user/delete-ticket/" + id);
    } catch (error) {
        console.log(error)
    }
}