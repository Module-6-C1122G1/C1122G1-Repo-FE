import axios from "axios";

export const findAllFilm = async () => {
    try {
        let result = await axios.get(`http://localhost:8080/films`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};