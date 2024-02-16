import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const ProductCard = (details) => {
  const { id, title, price, salePrice, imageUrl } = details;
  return (
    <div>
      <div className="image-bg">
        <FaRegBookmark />
        <img />
      </div>
    </div>
  );
};

export default ProductCard;
