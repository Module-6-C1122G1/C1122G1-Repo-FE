import axios from "axios";

export const apiBookingTicket = async (listSeat) => {
    try {
        const result = await axios.put(`http://localhost:8080/seat/update_status`, listSeat);
        return result;
    } catch (e) {
        console.log(e);
    }
};