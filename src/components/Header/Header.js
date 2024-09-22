import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Cloth Store</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Cart ({cart.length})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
