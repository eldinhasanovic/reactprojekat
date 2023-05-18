import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <div className="links">
        <h2>PRODUCTS</h2>
        <h2>CART</h2>
        <h2>HOME</h2>
      </div>
    </header>
  );
}
