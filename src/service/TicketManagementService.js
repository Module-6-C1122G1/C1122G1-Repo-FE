import axios from "axios";

export const findAllTicketBooking = async (page,username,auth) => {
    const headers= {
        'Authorization': 'Bearer ' + auth
    }
    try {
        const result = await axios.get(`http://localhost:8080/api/user/ticket-customer?page=${page?page:0}&&username=${username}`,{headers})
        return result
    } catch (error) {
        console.log(error)
    }
}
export const findAllTicketBookingPoint = async (page,username,auth) => {
    const headers= {
        'Authorization': 'Bearer ' + auth
    }
    try {
        return axios.get(`http://localhost:8080/api/user/ticket-customer/history?page=${page?page:0}&&username=${username}`,{headers});
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
export const findAllPlusPoint = async (page,dateStart,dateEnd,auth) => {
    const headers= {
        'Authorization': 'Bearer ' + auth
    }
    try {
        return (await axios.get(`http://localhost:8080/api/user/ticket-customer/plus-point?dateStart=${dateStart}&dateEnd=${dateEnd}&page=${page ? page : 0}`,{headers}));
    } catch (error) {
        console.log(error)
    }
}