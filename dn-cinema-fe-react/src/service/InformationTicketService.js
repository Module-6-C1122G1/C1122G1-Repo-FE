import axios from "axios";

export const detail = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/api/customer/detail/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const deleteTicket = async(value)=>{
    try {
        return (await axios.put(`http://localhost:8080/api/employee/ticket/update`,{...value}))
    } catch (error) {
        console.log(error)
    }
}