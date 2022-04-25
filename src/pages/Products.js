import React from "react";
import Product from "./Product";
import data from "./../database.json";

class Products extends React.Component {
  render() {
    const products = data.products;

    return (
      <main>
        <section>
          <h1 className="product-title">Laser Engraved Items</h1>
          <div className="product-container">
            {products.map((product) => {
              if (product.type === "laser") {
                return <Product key={product.id} data={product} />;
              }
            })}
          </div>
        </section>
        <section>
          <h1 className="product-title">Water Bottles</h1>
          <div className="product-container">
            {products.map((product) => {
              if (product.type === "water bottle") {
                return <Product key={product.id} data={product} />;
              }
            })}
          </div>
        </section>
        <section>
          <h1 className="product-title">Shirts</h1>
          <div className="product-container">
            {products.map((product) => {
              if (product.type === "shirts") {
                return <Product key={product.id} data={product} />;
              }
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default Products;
