import axios from "axios"

export const findByName = async(value,currentPage) => {
    try {
        return (await axios.get(`http:localhost:8080/discount/list?name_like=${value}&_page=${currentPage}&_limit=5&_sort=id&_order=desc`)).data
    } catch (error) {
        console.log(error);
    }
}


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