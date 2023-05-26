import axios from "axios";

export const findAllCustomerType = () => {
    return axios.get(`http://localhost:8080/customerType`)
}
