import axios from "axios";

export const apiGetShowTimesByFilm = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const apiGetShowTimesByDate = async (filmId,date) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime/${filmId}/${date}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
