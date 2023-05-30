import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/customer")
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const editCustomer = async (customer) => {
    try {
        await axios.patch(`http://localhost:8080/customer/update`, { ...customer })
        alert("Edit Success!")
    } catch (error) {
        console.log(error)

    }
}
export const findById = async (id) => {
    try {
        const book = await axios.get(`http://localhost:8080/customer/${id}`)
        return book.data
    } catch (error) {
        console.log(error);
        return error
    }
}
export const customerService = {findAll,editCustomer,findById}
