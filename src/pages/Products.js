import React from "react";
import Product from "./Product";
import data from "./../database.json";

class Products extends React.Component {
  render() {
    const products = data.products;

    return (
      <main>
        <section className="best-selling">
          <h1>Laser Engraved Items</h1>
          {products.map((product) => {
            if (product.type === "laser") {
              return <Product key={product.id} data={product} />;
            }
          })}
        </section>
        <section className="best-selling">
          <h1>Water Bottles</h1>
          {products.map((product) => {
            if (product.type === "water bottle") {
              return <Product key={product.id} data={product} />;
            }
          })}
        </section>
        <section className="best-selling">
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
