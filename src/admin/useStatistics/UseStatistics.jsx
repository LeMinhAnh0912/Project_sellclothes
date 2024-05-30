import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserStatistics.css";

export default function UserManagement() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    setEditUser(null);
    setFormData({
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      if (editUser) {
        await axios.put(`http://localhost:3000/users/${editUser.id}`, formData);
        setUsers(
          users.map((user) =>
            user.id === editUser.id ? { ...formData, id: editUser.id } : user
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/users",
          formData
        );
        const newUser = response.data;
        setUsers([...users, newUser]);
      }
      handleToggle();
    } catch (error) {
      console.error("Error saving user", error);
    }
  };

  const handleEditClick = (user) => {
    setEditUser(user);
    setToggle(true);
    setFormData(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.username &&
        user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.email &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div id="userManagement">
        <h2>Quản lý người dùng</h2>
        <div className="searchUser">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleToggle}>
            {toggle ? "Đóng" : "Thêm người dùng"}
          </button>
        </div>
        {toggle && (
          <div id="addUser">
            <h3>{editUser ? "Chỉnh sửa người dùng" : "Thêm người dùng mới"}</h3>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <div className="btn">
              <button onClick={handleSave}>
                {editUser ? "Lưu" : "Thêm người dùng mới"}
              </button>
              <button onClick={handleToggle}>Hủy</button>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Tên đăng nhập</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => handleEditClick(user)}>Sửa</button>
                  <button onClick={() => handleDelete(user.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
