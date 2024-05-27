import React from "react";
import ListProduct from "../components/listProduct/ListProduct";
import "./HomePage.css";
import StarIcon from "@mui/icons-material/Star";
export default function HomePage() {
  return (
    <div>
      <h1 className="homePage">Trang Chủ</h1>
      <h2 className="h2-product">Sản phẩm nổi bật:</h2>
      <ListProduct />
      <h2 className="h2-feedback"> Review About Sansa</h2>
      <div className="feedback">
        <div className="info-feedback">
          <div className="img-name">
            <div>
              <img src="./img.project/haha.png" alt="" />
            </div>
            <div>
              <h4>Andria Amesa</h4>
              <div>Customer . Agu 22 2023</div>
            </div>
          </div>
          <div>
            I purchased a laptop from Sansa website and it exceeded my
            expectations. The website was user-friendly, and the laptop's
            quality and performance were outstanding. Customer service was
            responsive and helpful. Shipping was fast and packaging was secure.
            With competitive pricing and overall satisfaction, I highly
            recommend Sansa.
          </div>
          <div>
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />

            <span> 5.0 stars</span>
          </div>
        </div>
        <div className="info-feedback">
          <div className="img-name">
            <div>
              <img src="./img.project/Ellipse 79.png" alt="" />
            </div>
            <div>
              <h4>Devid Machi</h4>
              <div>Sansa’s Customer . Nov 22 2023</div>
            </div>
          </div>
          <div>
            Partnering with Sansa website is an absolute delight. The
            user-friendly design and diverse product offerings showcase their
            commitment to excellence. Prompt customer service and efficient
            order processing make for a seamless experience. I highly recommend
            partnering with Sansa for their competitive pricing and top-notch
            service.
          </div>
          <div>
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />
            <StarIcon className="icon-star" />

            <span> 5.0 stars</span>
          </div>
        </div>
      </div>
    </div>
  );
}
