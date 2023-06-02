import axios from "axios";

export const apiGetAllFilms = async (pageAndSearch) => {
  try {
    const result = await axios.get(
      "http://localhost:8080/api/public/movie?page=" +
        pageAndSearch.page +
        "&search=" +
        pageAndSearch.search +
        "&sort=" +
        pageAndSearch.sort +
        "&type_film=" +
        pageAndSearch.type_film
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const findFilmById = async (idFilm) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/public/movie/${idFilm}}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const updateFilm = async (film) => {
  try {
    await axios.put(`http://localhost:8080/api/public/movie/${film.idFilm}}`, {
      ...film,
    });
  } catch (e) {
    console.log(e);
  }
};
export const createFilm = async (film) => {
  try {
    await axios.post(`http://localhost:8080/api/public/movie`, { ...film });
  } catch (e) {
    console.log(e);
  }
};
export const findFilmsUpcoming = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8080/api/public/movie/list-upcoming"
    );
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const findFilmsPlaying = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8080/api/public/movie/list-playing"
    );
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
