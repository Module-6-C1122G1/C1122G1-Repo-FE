import axios from "axios";

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
