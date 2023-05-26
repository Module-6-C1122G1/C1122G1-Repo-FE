import axios from "axios";

export const findAll = (name) => {
    return axios.get(`http://localhost:8080/customer?name_like=${name}`)
}
