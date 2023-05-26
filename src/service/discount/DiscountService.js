import axios from "axios"

export const findAll = async () => {
    try {
        const result = await axios.get(`http:localhost:8080/discount/list`);
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const save = async (discount) => {
    try {
        await axios.post(`http://localhost:8080/discount/`, {...discount});
    } catch (e) {
        console.log(e)
    }
}


export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/discount/${id}`)
        alert("Xóa khách hàng thành công!!")
    } catch (e) {
        console.log(e)
    }
}