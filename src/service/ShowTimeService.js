import axios from "axios";

export const apiGetShowTimesByFilm = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/showtime/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const apiGetShowTimesByDate = async (filmId,date) => {
    try {
        const result = await axios.get(`http://localhost:8080/showtime/${filmId}/${date}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
