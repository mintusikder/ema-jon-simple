// import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/Orders">Order</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
