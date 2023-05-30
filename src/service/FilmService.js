import axios from "axios";

export const apiGetAllFilms = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/movie/list`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};