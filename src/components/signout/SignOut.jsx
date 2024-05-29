import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Gửi yêu cầu đăng xuất đến API
        await axios.post("http://localhost:3000/users/logout");

        // Xóa thông tin người dùng khỏi localStorage
        localStorage.removeItem("userData");

        // Chuyển hướng đến trang đăng nhập
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
        // Handle error if needed
      }
    };

    handleSignOut();
  }, [navigate]);

  return (
    <div>
      <h1>Đăng Xuất</h1>
      <p>Bạn đã được đăng xuất. Đang chuyển hướng...</p>
    </div>
  );
}
