import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Tên tài khoản là bắt buộc.";
    }

    if (!formData.email) {
      newErrors.email = "Email là bắt buộc.";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu là bắt buộc.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu và xác nhận mật khẩu không khớp.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // Chuyển hướng đến trang đăng nhập
      navigate("/login");
    } catch (error) {
      console.error("There was an error registering!", error);
      setErrors({ submit: "Đăng ký thất bại. Vui lòng thử lại." });
    }
  };

  return (
    <div>
      <form id="register" onSubmit={handleSubmit}>
        <div>
          <img src="/image/Sansa.png" alt="" />
        </div>
        <h1>Đăng Ký</h1>
        <input
          type="text"
          id="username"
          placeholder="Nhập tên tài khoản"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="email"
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
        <input
          type="password"
          id="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        {errors.submit && <p className="error">{errors.submit}</p>}
        <button id="button" type="submit">
          Đăng Ký
        </button>
        <span>
          Đã có tài khoản ? <Link to="/login">Đăng nhập tại đây</Link>
        </span>
      </form>
    </div>
  );
}
