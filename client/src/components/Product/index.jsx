import React from "react";
import "./index.scss";

const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.info}</p>
        <p>Price: ${product.price}</p>
      </div>
    </>
  );
};

export default Product;
