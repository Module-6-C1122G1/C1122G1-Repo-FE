import axios from "axios"


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/public")
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const findByName = async (value, currentPage) => {
    const result = await (axios.get(`http://localhost:8080/api/admin/discount/list?name=${value}&page=${currentPage}`))
    return result;
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
        await axios.delete(`http://localhost:8080/api/admin/discount/${id}`)
    } catch (e) {
        console.log(e)
    }
}
export const createDiscount = async (discount) => {
    return await axios.post('http://localhost:8080/api/admin/discount/create', {...discount})
}
export const findDiscountById = async (id) => {
    return (await axios.get(`http://localhost:8080/api/admin/discount/${id}`)).data
}
export const updateDiscount = async (discount) => {
    return await axios.put(`http://localhost:8080/api/admin/discount/update/${discount.id}`, {...discount})
}
export const findByIdDiscount = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/discount/` + id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


