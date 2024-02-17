import React from "react";
import { IoBagAddOutline } from "react-icons/io5";
import "./index.css";

const ProductCard = (props) => {
  const { id, title, price, salePrice, imageUrl } = props.details;
  return (
    <li key={id}>
      <div className="image-bg">
        <img alt="bag" src={imageUrl} />
        <h1>{title}</h1>
        <div className="all-details">
          <div className="details">
            <h1>
              ₹ <span>{salePrice}</span>
            </h1>
            <p>
              {price} <span className="discount">50% Off</span>
            </p>
          </div>
          <IoBagAddOutline />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
