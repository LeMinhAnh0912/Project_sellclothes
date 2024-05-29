import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email là bắt buộc.";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu là bắt buộc.";
    }

    return newErrors;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });

      const user = response.data.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("userData", JSON.stringify(user));

        // Chuyển hướng đến trang chủ
        navigate("/");
      } else {
        setErrors({ submit: "Email hoặc mật khẩu không đúng." });
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      setErrors({ submit: "Đăng nhập thất bại. Vui lòng thử lại." });
    }
  };

  return (
    <div>
      <form className="form-shadow" onSubmit={handleSubmitLogin}>
        <h1>Đăng Nhập</h1>
        <input
          type="text"
          id="email"
          placeholder="Nhập Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
        {errors.submit && <p className="error">{errors.submit}</p>}
        <button id="button" type="submit">
          Đăng Nhập
        </button>

        <div>
          <Link to="/register">Tạo tài khoản ngay!!!!</Link>
        </div>
      </form>
    </div>
  );
}
