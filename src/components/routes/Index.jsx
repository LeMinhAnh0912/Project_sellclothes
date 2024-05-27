import React from "react";
import Login from "../login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../register/Register";
export default function index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
