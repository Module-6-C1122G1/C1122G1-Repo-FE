import axios from "axios"

export const findByName = async(value,currentPage) => {
    try {
        return (await axios.get(`http://localhost:8080/api/discount/list?name=${value}&_page=${currentPage}`)).data
    } catch (error) {
        console.log(error);
    }
}


export const findAllDiscount = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/discount/list`);
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const save = async (discount) => {
    try {
        await axios.post(`http://localhost:8080/api/discount/`, {...discount});
    } catch (e) {
        console.log(e)
    }
}


export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/discount/${id}`)
        alert("Xóa khách hàng thành công!!")
    } catch (e) {
        console.log(e)
    }
}
export const findByIdDiscount=async (id)=>{
    try {
        const result=await axios.get(`http://localhost:8080/api/public/discount/`+id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}