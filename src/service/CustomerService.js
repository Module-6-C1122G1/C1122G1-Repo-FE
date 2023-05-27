import axios from "axios";
export const findAllTicketBooking = async () => {
    try {
        const result = await axios.get('http://localhost:8080/api/public');
        return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const findAllTicketBookingPoint = async () => {
    try {
        const result = await axios.get('http://localhost:8080/api/public/history');
        return result.data;
    }catch (error) {
        console.log(error)
    }
}