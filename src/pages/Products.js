import React from "react";
import Product from "./Product";
import data from "./../database.json";

class Products extends React.Component {
  render() {
    const products = data.products;

    return (
      <main className="grid-container">
        <section className="grid-container">
          <h1>Laser Engraved Items</h1>
          <div className="product-container">
            {products.map((product) => {
              if (product.type === "laser") {
                return <Product key={product.id} data={product} />;
              }
            })}
          </div>
        </section>
        <section className="grid-container">
          <h1>Water Bottles</h1>
          {products.map((product) => {
            if (product.type === "water bottle") {
              return <Product key={product.id} data={product} />;
            }
          })}
        </section>
        <section className="grid-container">
          <h1>Shirts</h1>
          {products.map((product) => {
            if (product.type === "shirts") {
              return <Product key={product.id} data={product} />;
            }
          })}
        </section>
      </main>
    );
  }
}

export default Products;
