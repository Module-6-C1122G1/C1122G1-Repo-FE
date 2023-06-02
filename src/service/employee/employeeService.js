import axios from "axios";


const API_EMPLOYEE = "http://localhost:8080/api/employee";


export const saveEmployee = async (employeeDTO) => {
    try {
        await axios.post(`http://localhost:8080/api/employee/create`, {...employeeDTO})
    } catch (e) {
        console.log(e)
    }
}
export const editEmployee = async (employeeDTO) => {
    try {
        await axios.put(`http://localhost:8080/api/employee/update/${employeeDTO.idEmployee}`, {...employeeDTO})
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/api/employee/${id}`)).data
    } catch (e) {
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
export const checkUsernameExists = async (nameAccount) => {
    try {
        return (await axios.get(`http://localhost:8080/api/employee/check-account/${nameAccount}`)).data;
    } catch (error) {
        console.error(error);
        throw new Error('Đã xảy ra lỗi khi kiểm tra tài khoản');
    }
};
export const checkEmailExists = async (email) => {
    try {
        return (await axios.get(`http://localhost:8080/api/employee/check-email/${email}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra Email');
    }
};
export const checkPhoneExists = async (phone) => {
    try {
        return (await axios.get(`http://localhost:8080/api/employee/check-phone/${phone}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra số điện thoại');
    }
};
export const checkIdentityCardExists = async (identityCard) => {
    try {
        return (await axios.get(`http://localhost:8080/api/employee/check-identityCard/${identityCard}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra CCCD');
    }
};
