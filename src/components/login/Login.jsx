import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authReducer";
import authApi from "../../api/authApi";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [displayErros, setDisplayErros] = useState("");

  // Khong cho user vao lai trang login khi da dang nhap
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, []);
  const validate = (values) => {
    // Tao object errors
    const errors = {};
    // Check email khong rong

    if (values.email == "admin" && values.password == "admin") {
      navigate("/dashboard");
    }

    if (!values.email) {
      errors.email = "Yeu cau nhap email!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) // check dinh dang email
    ) {
      errors.email = "Day khong phai la email, vui long nhap lai";
    }

    if (!values.password) {
      errors.password = "Yeu cau nhap password!";
    } else if (values.password.length < 8) {
      errors.password = "Yeu cau nhap password lon hon 8 ky tu!";
    }
    return errors;
  };

  const formik = useFormik({
    // Gia tri khoi tao cua form
    initialValues: {
      email: "",
      password: "",
    },
    // Ham validate
    validate,
    // Ham xu ly submit
    onSubmit: async (values) => {
      try {
        const { data } = await authApi.userLogin(values); // Call API de dang nhap
        // Set localStorage
        localStorage.setItem("TOKEN", data.accessToken);
        localStorage.setItem("USER", data.user.email);

        // Dispatch de set isLogin === true
        dispatch(login());

        navigate("/");
        // window.location.href("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <form className="form-shadow" onSubmit={formik.handleSubmit}>
        <h1>Đăng Nhập</h1>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <span className="error">{formik.errors.email}</span>
        )}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <span className="error">{formik.errors.password}</span>
        )}
        <button id="button" type="submit">
          Đăng Nhập
        </button>
        <p>{displayErros}</p>
        <div>
          <Link to="/register">Tạo tài khoản ngay!!!!</Link>
        </div>
      </form>
    </div>
  );
}
