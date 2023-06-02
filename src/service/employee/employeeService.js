import axios from "axios";

const API_EMPLOYEE = "http://localhost:8080/api/employee";

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

const search = async (name,page) => {
    try{
        const res = await axios.get(API_EMPLOYEE + `?search=${name}&page=${page ? page : '0'}`)
        return res.data
    }
    catch(err){
        console.log(err);
    }
}

const deleteEmployee = async (id) => {
    try{
        await axios.delete(API_EMPLOYEE + "/delete/" + id)
    }
    catch(err){
        console.log(err);
    }
}

const employeeService = {
    search,
    deleteEmployee,
    findById,
    saveEmployee,
    editEmployee
}

export default employeeService;
