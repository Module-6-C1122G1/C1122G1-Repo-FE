import axios from "axios";

/**
 * @Param page
 * @Param search
 * Phương thức sử dụng để tìm kiếm kết hợp danh sách vé đặt
 * @author DatLVP
 */
export const findAllTicket = async ({ page, search }) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/employee/ticket/list?page=${
        page ? page : 0
      }&search=${search}`
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

export const cancelTicket = async (id) => {
  try {
    await axios.put(
      `http://localhost:8080/api/employee/ticket/cancelTicket/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
