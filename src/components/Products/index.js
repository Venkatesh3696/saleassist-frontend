import React, { useState, useEffect } from "react";
import { CiExport } from "react-icons/ci";
import ProductCard from "../ProductCard";
// const url = "http://localhost:3000/bags";

const bagsData = {
  bags: [
    {
      id: "1",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },

    {
      id: "2",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
    {
      id: "3",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
    {
      id: "4",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
    {
      id: "5",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
    {
      id: "6",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114200/saleassist/renders/SIPR04085_01_1_don7ad.png",
    },
    {
      id: "7",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
    {
      id: "8",
      title: "The Brown Metro Movers",
      price: "8999",
      salePrice: "4899",
      imageUrl:
        "https://res.cloudinary.com/dgcysjarm/image/upload/v1708114201/saleassist/renders/SIPR04086_01_1_babcza.png",
    },
  ],
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const response = await fetch(url);
    // console.log(response);
    setProducts(bagsData.bags);
  }, []);

  return (
    <div className="main-container">
      <div className="products-container">
        <p>Bags . Backpacks</p>
        <p>13 Products</p>
        <CiExport />
      </div>
      <ul>
        {products.map((each) => {
          console.log(each);
          return <ProductCard details={each} key={each.id} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
