import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <form className="form-shadow">
        <h1>Đăng Nhập</h1>
        <input type="text" id="email" placeholder="Nhập Email" />
        <input type="password" id="password" placeholder="Nhập mật khẩu" />
        <button id="button" type="submit">
          Đăng Nhập
        </button>

        <div>
          {/* <a href="/registration/registration.html">Tạo Tài Khoản Ngay</a> */}
          <Link to="/register">Tạo tài khoản ngay!!!!</Link>
        </div>
      </form>
    </div>
  );
}
