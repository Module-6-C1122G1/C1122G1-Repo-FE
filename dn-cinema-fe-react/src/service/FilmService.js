import axios  from "axios";

export const detail = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/movie/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}