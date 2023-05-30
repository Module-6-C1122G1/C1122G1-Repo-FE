import "./Login.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { handleCallApiLogin } from "../../service/LoginService";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function Login() {
  const [failedAccount, setFailedAccount] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="login-container container d-flex justify-content-center align-items-center flex-column mt-5">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Tên đăng nhập bắt buộc phải nhập.")
            .test(
              "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
              "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
              function (value) {
                return value.length >= 6 && value.length <= 30;
              }
            ),
          password: Yup.string()
            .required("Mật khẩu bắt buộc phải nhập.")
            .test(
              "Mật khẩu bắt buộc từ 6-30 ký tự.",
              "Mật khẩu bắt buộc từ 6-30 ký tự.",
              function (value) {
                return value.length >= 6 && value.length <= 30;
              }
            ),
        })}
        onSubmit={(values) => {
          handleCallApiLogin(values)
            .then((e) => {
              setFailedAccount(null);
              localStorage.setItem("token", e.token);
              localStorage.setItem("username", e.username)
              navigate("/");
            })
            .catch((e) => {
              setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
            });
        }}
      >
        <Form>
          <p className="title-login text-center mb-3">Đăng nhập</p>
          <table>
            <tbody>
              <tr>
                <td colSpan={2} className="modify-title">
                  Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội
                  nhận thêm nhiều ưu đãi từ chương trình thành viên CinemaDN.
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="username">Tên đăng nhập</label>
                </td>
                <td>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nhập tên đăng nhập"
                  />
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <ErrorMessage
                    name="username"
                    className="error-mess m-0"
                    component={"p"}
                  />
                  {failedAccount && (
                    <p className="error-mess m-0">{failedAccount}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Mật khẩu</label>
                </td>
                <td>
                  <Field
                    type="password"
                    autoComplete="on"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <ErrorMessage
                    name="password"
                    className="error-mess m-0"
                    component={"p"}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="other-login">
                  <Link
                    to={"/confirm-email"}
                    className="login-facebook text-decoration-none"
                  >
                    Quên mật khẩu ?
                  </Link>
                  <a href="" className="float-end text-decoration-none">
                    Đăng ký tài khoản
                  </a>
                </td>
              </tr>
              <tr>
                <th></th>
                <td className="other-login">
                  <button
                    type="submit"
                    className="login mt-3 w-100 text-center fw-bold"
                  >
                    Đăng nhập
                  </button>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <LoginSocialFacebook
                    appId="257872636750784"
                    onResolve={(resolve) => {
                      console.log(resolve);
                    }}
                    onReject={(reject) => console.log(reject)}
                  >
                    <FacebookLoginButton className="login login-facebook w-100 text-center fw-bold d-flex justify-content-center mt-1" />
                  </LoginSocialFacebook>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default Login;
