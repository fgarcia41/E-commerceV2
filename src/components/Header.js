import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="contact.html">Contact</a>
      </div>
    );
  }
}

export default Header;
