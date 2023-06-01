import axios from "axios";

export const saveCustomer = async (customer) => {
    try {
        await axios.post(`http://localhost:8080/api/user/create` , customer)
    }catch (e){
        console.log(e)
    }
}
export const editCustomer = async (id , customer) => {
    try {
        await axios.post(`http://localhost:8080/api/user/${id}` , {...customer})
    }catch (e){
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        await axios.post(`http://localhost:8080/api/user/${id}`)
    }catch (e){
        console.log(e)
    }
}
export const findAllCustomerType = async () => {
    try {
        await axios.post(`http://localhost:8080/api/user/type`)
    }catch (e){
        console.log(e)
    }
}