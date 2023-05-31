import axios from "axios";

export const handleCallApiLogin = async (value) => {
  try {
    const result = await axios.post(
      "http://localhost:8080/api/public/signin",
      value
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const handleCallApiToConfirmEmail = async (value) => {
  try {
    const result = await axios.post(
      "http://localhost:8080/api/public/confirm-email",
      value
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const handleCallApiToResetPassword = async (value) => {
  try {
    await axios.post("http://localhost:8080/api/public/reset-password", value);
  } catch (e) {
    console.log(e);
  }
};
