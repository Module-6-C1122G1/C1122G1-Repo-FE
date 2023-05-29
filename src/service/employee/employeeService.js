import axios from "axios";

export const saveEmployee = async (employee) => {
    try {
        await axios.post(`http://localhost:8080/api/employee/create` , employee)
    }catch (e){
        console.log(e)
    }
}
export const editEmployee = async (id , employee) => {
    try {
        await axios.post(`http://localhost:8080/api/employee/update/${id}` , {...employee})
    }catch (e){
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        await axios.post(`http://localhost:8080/api/employee/${id}`)
    }catch (e){
        console.log(e)
    }
}
