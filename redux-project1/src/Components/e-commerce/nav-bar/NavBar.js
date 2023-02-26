import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { cartReducer } from "../../../redux/Slices/CartSlice";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((item) => (count += item.quantity));

  return (
    <nav>
      <Link to="*" style={{ textDecoration: "none" }}>
        <h2 className="banner">Home</h2>
      </Link>
      <div className="right-layout">
        <div className="cart-layout">
          <Link to="/myCart" style={{ textDecoration: "none" }}>
            <AiOutlineShoppingCart />
          </Link>
          <h3 className="count">{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
