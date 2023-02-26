import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/Slices/CartSlice";

function SingleProduct({ Product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const currItem = cart.find((item) => item.id === Product.id);
  const currQuantity = currItem ? currItem.quantity : 0;

  return (
    <div className="singleProduct">
      <img className="productImg" src={Product.images[0]} alt={Product.title} />
      <div className="productInfo">
        <h1 className="productTitle">{Product.title}</h1>
        <h3 className="productPrice">{Product.price}</h3>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => {
            dispatch(removeFromCart(Product.id));
          }}
        >
          -
        </button>
        <h4 className="quantity">{currQuantity}</h4>
        <button
          className="button"
          onClick={() => {
            dispatch(addToCart(Product.id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
