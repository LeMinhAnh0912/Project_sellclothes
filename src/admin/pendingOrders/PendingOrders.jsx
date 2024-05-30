import { useEffect, useState } from "react";
// import "./PendingOrders.css";

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch cart data from local storage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setOrders(cartData);
  }, []);

  const handleAcceptOrder = (index) => {
    // Xử lý chấp nhận đơn hàng ở vị trí index
    const updatedOrders = [...orders];
    updatedOrders[index].status = "accepted";
    setOrders(updatedOrders);
  };

  const handleRejectOrder = (index) => {
    // Xử lý từ chối đơn hàng ở vị trí index
    const updatedOrders = [...orders];
    updatedOrders[index].status = "rejected";
    setOrders(updatedOrders);
  };

  return (
    <>
      <div id="pending-orders">
        <h2>Quản lý đơn hàng</h2>
        <div className="searchOrder">
          <input type="text" placeholder="Search order" />
          <button>Search</button>
          <button>Sắp xếp</button>
        </div>
      </div>
      <div id="pending-orders-table">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên đơn hàng</th>
              <th>Tên người đặt</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.items.map((item) => item.name).join(", ")}</td>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.status === "pending" && (
                      <>
                        <button onClick={() => handleAcceptOrder(index)}>
                          Chấp nhận đơn hàng
                        </button>
                        <button onClick={() => handleRejectOrder(index)}>
                          Từ chối đơn hàng
                        </button>
                      </>
                    )}
                    {order.status === "accepted" && <span>Đã chấp nhận</span>}
                    {order.status === "rejected" && <span>Đã từ chối</span>}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PendingOrders;
