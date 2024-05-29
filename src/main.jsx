// src/index.js hoặc src/main.js (tùy thuộc vào cấu trúc dự án của bạn)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js"; // Import store của bạn
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Bao bọc ứng dụng với Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
