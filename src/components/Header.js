import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a href="/">Home</a>
        <a href="products">Products</a>
        <a href="contact">Contact</a>
      </div>
    );
  }
}

export default Header;
