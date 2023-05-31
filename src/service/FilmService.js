import axios from "axios";


export const apiGetAllFilms = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/movie/list`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const findFilmById = async (idFilm) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/movie/${idFilm}}`)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const updateFilm = async (film) => {
    try {
        await axios.put(`http://localhost:8080/api/public/movie/${film.idFilm}}`, {...film})
    }catch (e){
        console.log(e)
    }
}
export const createFilm = async (film) => {
    try {
        await axios.post("http://localhost:8080/api/public/movie/create", {...film})
    }catch (e){
        console.log(e)
    }
}
export const listFilm = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/public/movie?_sort=idFilm&_order=desc")
        return result.data;
    }catch (e){
        console.log(e);
    }
}
export const deleteFilm = async (idFilm) => {
    try {
        await axios.delete(`http://localhost:8080/api/public/movie/${idFilm}`)
    }catch (e){
        console.log(e);
    }
}
export const getFilm = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/api/public/movie/" + id)
        return result.data
    }catch (err){
        console.log(err)
    }
}

