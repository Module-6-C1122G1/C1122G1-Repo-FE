/**
 *@author ChinhLV
 * @param {*} data
 * @returns {type, payload}
 * Nhận mã code sau khi xác nhận thành công email
 */
export const receiveData = (data) => ({
  type: "RECEIVE_DATA",
  payload: data,
});
