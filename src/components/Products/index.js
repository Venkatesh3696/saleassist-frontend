import React, { useState, useEffect } from "react";
import { CiExport } from "react-icons/ci";
import ProductCard from "../productCard";
const url = "http://localhost:3000/bags";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch(url);
    console.log(response);
    setProducts(response);
  }, []);

  return (
    <div>
      <div className="products-container">
        <p>Bags . Backpacks</p>
        <p>13 Products</p>
        <CiExport />
      </div>
    </div>
  );
};

export default Products;
