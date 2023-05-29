import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/admin/showroom/list")
        return result.data
    }catch (e) {
        console.log(e)
    }
}


// Lấy dữ liệu của 1 phần tử trong list theo id
export const getShowRoom = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/api/admin/showroom/list" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllStatusSeat = async () => {
    try{
        const data = await axios.get('http://localhost:8080/api/admin/status-seat/list')
        return data.data
    }catch (e) {
        console.log(e)
    }

}
export const findAllTypeSeat = async () => {
    try{
        const data = await axios.get('http://localhost:8080/api/admin/type-seat/list')
        return data.data
    }catch (e) {
        console.log(e)
    }

}