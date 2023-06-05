import axios from "axios";

export const apiGetShowTimesByFilm = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const apiGetShowTimesByDate = async (filmId, date) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime/${filmId}/${date}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllShowTime = async ({page,search}) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime?page=${page?page:0}
        &search=${search}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const createShowTime = async (showTime) => {
    try {
        await axios.post(`http://localhost:8080/api/public/showtime/create`, {...showTime});
    } catch (e) {
        console.log(e);
    }
};

export const findShowTimeById = async (idShowTime) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/showtime/${idShowTime}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};
export const deleteShowTime = async (idShowTime) => {
    try {
        await axios.delete(`http://localhost:8080/api/public/showtime/${idShowTime}`);
    } catch (e) {
        console.log(e);
    }
};
export const updateShowTime = async (showTime) => {
    try {
        await axios.put(`http://localhost:8080/api/public/showtime/${showTime.idShowTime}`, {...showTime});
    } catch (e) {
        console.log(e);
    }
};
export const getShowTime = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/api/public/showtime/" + id)
        return result.data
    }catch (err){
        console.log(err)
    }
}

