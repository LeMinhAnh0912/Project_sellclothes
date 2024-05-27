import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <form id="register">
        <div>
          <img src="/image/Sansa.png" alt="" />
        </div>
        <h1>Đăng Ký</h1>
        <input type="text" id="userName" placeholder="Nhập tên tài khoản" />

        <input type="text" id="email" placeholder="Nhập Email" />

        <input type="text" id="password" placeholder="Nhập mật khẩu" />

        <input
          type="text"
          id="confirmPassword"
          placeholder="Nhập lại mật khẩu"
        />

        <button id="button" type="submit">
          Đăng kí form
        </button>
        <span>
          Đã có tài khoản ? <Link to="/login">Đăng nhập tại đây </Link>
        </span>
      </form>
    </div>
  );
}
