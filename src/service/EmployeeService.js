import axios from "axios";

export const createEmployee = async (employeeDTO) => {
    try {
        await axios.patch('http://localhost:8080/api/employee/create', employeeDTO)
    } catch (error) {
        console.log(error)
    }
}
export const findAll = async () => {
    try {
        return await axios.get('http://localhost:8080/api/employee')
    } catch (error) {
        console.log(error)
    }
}