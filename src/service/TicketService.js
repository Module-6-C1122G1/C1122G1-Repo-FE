import axios from "axios";

export const findByIdSeat = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/seat/find-by-id/` + id);
        return result.data;
    } catch (e) {
        console.log(e)
    }

}

export const checkDiscount = async (nameDiscount) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/ticket/check-discount?nameDiscount=${nameDiscount}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }

}
export const pay = async (ticketDTO) => {
    try {
        await axios.post(`http://localhost:8080/api/ticket/pay`, {ticketDTO})
    } catch (e) {
        console.log(e)
    }
}
export const getCustomer = async (nameAcc) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/ticket/get-customer?username=${nameAcc}`)
        return result.data
    } catch (e) {
        console.log(e)
    }

}
/**
 * @Param page
 * @Param search
 * Phương thức sử dụng để tìm kiếm kết hợp danh sách vé đặt
 * @author DatLVP
 */
export const findAllTicket = async ({ page, search }, auth) => {
    const headers =  {
        'Authorization': 'Bearer ' + auth
    }
    try {
        const result = await axios.get(
            `http://localhost:8080/api/employee/ticket/list?page=${
                page ? page : 0
            }&search=${search}`, {headers}
        );
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
/**
 * @Param id
 * Phương thức sử dụng để tìm huỷ vé đã đặt
 * @author DatLVP
 */

export const cancelTicket = async (id, auth) => {
    const headers = {
        'Authorization': 'Bearer ' + auth
    };

    try {
        await axios.put(
            `http://localhost:8080/api/employee/ticket/cancelTicket/${id}`,
            null,
            { headers: headers }
        );
    } catch (error) {
        console.log(error);
    }
};
