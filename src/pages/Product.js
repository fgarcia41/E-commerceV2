import React from "react";

const Product = (data) => {
  const item = data.data;

  return (
    <div className="flex">
      <div className="img-container">
        <img src={item.image} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Product;
