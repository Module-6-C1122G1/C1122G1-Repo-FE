import axios from "axios"

 /**
     * Phương thức sử dụng để tìm kiếm kết hợp danh sách vé đặt
     * @author DatLVP
     */
export const findAllTicket = async ({page, name}) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/ticket/list?page=${page ? page : 0}&name=${name}`);
        return result.data;
    } catch(error) {
        console.log(error);
    }
}