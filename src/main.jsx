import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider từ react-redux
import store from "./redux/store.js"; // Import store của bạn

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Bao bọc ứng dụng với Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
