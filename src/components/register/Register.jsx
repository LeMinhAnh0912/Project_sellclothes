import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import authApi from "../../api/authApi";

export default function Register() {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Tên tài khoản là bắt buộc.";
    }

    if (!values.email) {
      errors.email = "Email là bắt buộc.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Vui lòng nhập đúng định dạng email.";
    }

    if (!values.password) {
      errors.password = "Mật khẩu là bắt buộc.";
    } else if (values.password.length < 8) {
      errors.password = "Yêu cầu nhập mật khẩu lớn hơn 8 ký tự.";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Mật khẩu và xác nhận mật khẩu không khớp.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const { data } = await authApi.userRegister(values);
        localStorage.setItem("TOKEN", data.accessToken);
        localStorage.setItem("USER", data.user.email);
        navigate("/login");
      } catch (error) {
        console.error("There was an error registering!", error);
        setErrors(error.response.data || "Đăng ký thất bại. Vui lòng thử lại.");
      }
    },
  });

  return (
    <div>
      <form id="register" onSubmit={formik.handleSubmit}>
        <h1>Đăng Ký</h1>
        <input
          type="text"
          id="username"
          placeholder="Nhập tên tài khoản"
          value={formik.values.username}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.username && (
          <p className="error">{formik.errors.username}</p>
        )}
        <input
          type="email"
          id="email"
          placeholder="Nhập Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        <input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        {formik.errors.password && (
          <p className="error">{formik.errors.password}</p>
        )}
        <input
          type="password"
          id="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          required
        />
        {formik.errors.confirmPassword && (
          <p className="error">{formik.errors.confirmPassword}</p>
        )}
        {errors && <p className="error">{errors}</p>}
        <button id="button" type="submit">
          Đăng Ký
        </button>
        <span>
          Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
        </span>
      </form>
    </div>
  );
}
