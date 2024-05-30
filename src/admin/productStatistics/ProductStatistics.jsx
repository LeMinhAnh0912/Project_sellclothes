import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductStatistics.css";

export default function ProductStatistics() {
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
  });
  const [editItem, setEditItem] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleSortClick = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setItems(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setEditItem(null);
    setFormData({
      image: "",
      name: "",
      price: "",
      description: "",
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
      if (editItem) {
        await axios.put(`http://localhost:3000/items/${editItem.id}`, formData);
        setItems(
          items.map((p) =>
            p.id === editItem.id ? { ...formData, id: editItem.id } : p
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/items",
          formData
        );
        const newItem = response.data;
        setItems([...items, newItem]);
      }
      handleToggle();
    } catch (error) {
      console.error("Error saving item", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setToggle(true);
    setFormData(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div id="productStatistics">
        <h2>Thống kê sản phẩm</h2>
        <div className="searchProduct">
          <input
            type="text"
            placeholder="Search item"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSortClick}>Sắp xếp</button>
          <button onClick={handleToggle}>
            {toggle ? "Đóng" : "Thêm sản phẩm"}
          </button>
        </div>
        {toggle && (
          <div id="addItem">
            <h3>{editItem ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
            <input
              type="text"
              name="image"
              placeholder="Ảnh sản phẩm"
              value={formData.image}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Giá"
              value={formData.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Mô tả"
              value={formData.description}
              onChange={handleInputChange}
            />
            <div className="btn">
              <button onClick={handleSave}>
                {editItem ? "Lưu" : "Thêm sản phẩm mới"}
              </button>
              <button onClick={handleToggle}>Hủy</button>
            </div>
          </div>
        )}
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>Ảnh sản phẩm</th>
              <th onClick={handleSortClick}>
                Tên sản phẩm {sortOrder === "asc" ? "▲" : "▼"}
              </th>
              <th>Giá</th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt="product" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(item)}
                  >
                    Sửa
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
