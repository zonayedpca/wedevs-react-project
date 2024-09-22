import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Container } from "../../components/common";

import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <div className="cart-page">
        <h2>Your Cart</h2>
        {!cart.length ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <h4>{product.title}</h4>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
