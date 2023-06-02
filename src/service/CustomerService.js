import axios from "axios";


export const saveCustomer = async (customer) => {
    try {
        await axios.post(`http://localhost:8080/api/public/create`,{...customer})
    }catch (e){
        console.log(e)
    }
}
export const findAllCustomerType = async () =>{
    try{
        const result = await axios.get(`http://localhost:8080/api/user/type`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const editCustomer = async (customer) => {
    try {
        await axios.patch(`http://localhost:8080/api/user/update/${customer.idCustomer}`, {...customer})
    }catch (e){
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
       return (await axios.get(`http://localhost:8080/api/${id}`)).data
    }catch (e){
        console.log(e)
    }
}

export const checkUsernameExists = async (nameAccount) => {
    try {
        return (await axios.get(`http://localhost:8080/api/check-account/${nameAccount}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra tài khoản');
    }
};

export const checkEmailExists= async (email) =>{
    try {
        return (await axios.get(`http://localhost:8080/api/check-email/${email}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra email');
    }
}

export const checkIdentityCardExists = async (identity) => {
    try {
        return (await axios.get(`http://localhost:8080/api/check-identity/${identity}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra CCCD');
    }
}
export const checkPhoneExists = async (phone) => {
    try {
        return (await axios.get(`http://localhost:8080/api/check-phone/${phone}`)).data;
    } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
        throw new Error('Đã xảy ra lỗi khi kiểm tra số điên thoại');
    }
}

