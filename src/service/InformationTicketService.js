import axios from "axios";

/**
 * @Author QuynhHTN
 * Date create: 02/06/2023
 * @Param id
 * @Returns {Promise<any>}
 */
export const detail = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/api/customer/detail/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
/**
 * @Author: QuynhHTN
 * Date create: 02/06/2023
 * @Param value
 * @Returns {Promise<AxiosResponse<any>>}
 */
export const deleteTicket = async(value)=>{
    try {
        return (await axios.put(`http://localhost:8080/api/employee/ticket/update`,{...value}))
    } catch (error) {
        console.log(error)
    }
}
/**
 * @Author: QuynhHTN
 * Date create: 02/06/2023
 * @Param id
 * @Returns {Promise<AxiosResponse<any>>}
 */
export const confirmPrintTicket = async(id)=>{
    try {
        return (await axios.put(`http://localhost:8080/api/employee/ticket/confirm-print/${id}`))
    } catch (error) {
        console.log(error)
    }
}