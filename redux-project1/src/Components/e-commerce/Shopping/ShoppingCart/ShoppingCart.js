import React from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "../SingleCartItem/SingleCartItem";
import "./ShoppingCart.css";

function ShoppingCart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const products = useSelector((state) => state.productReducer.products);
  let totalQuantity = 0;
  let subTotal = 0;
  let tax = 0;
  let total = 0;

  const shoppingCartItems = cart.map((item) => {
    totalQuantity += item.quantity;
    const selectedItem = products.find((product) => product.id === item.id);
    subTotal += selectedItem.price;
    return {
      id: selectedItem.id,
      quantity: item.quantity,
      title: selectedItem.title,
      description: selectedItem.description,
      price: selectedItem.price,
      images: selectedItem.images,
    };
  });

  tax = subTotal * 0.18;
  tax = tax.toFixed(2);
  total = subTotal + tax;
  return (
    //give cart item as a prop to SingleCartItem
    <>
      <div className="shoppingCartHeader">
        <div className="headerLeft">
          <h1>Shopping Cart</h1>
          <p className="headerHome">Home &#62; Shopping Cart</p>
        </div>
        <div className="headerRight">
          <p className="totalQuantity">{totalQuantity} items in the bag</p>
        </div>
      </div>
      <hr />
      <div className="shoppingCartBody">
        {shoppingCartItems.map((item) => (
          <SingleCartItem item={item} />
        ))}
      </div>
      <div className="totalingBar">
        <div>Promo Code</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="componentOfTotal">
            <p style={{ textAlign: "right" }}>Subtotal </p>
            <p style={{ textAlign: "left" }}>{subTotal}</p>
          </div>
          <div className="componentOfTotal">
            <p style={{ textAlign: "right" }}>Tax</p>
            <p style={{ textAlign: "left" }}>{tax}</p>
          </div>
          <div className="total">
            <p style={{ textAlign: "right" }}>Total </p>
            <p style={{ textAlign: "left" }}>{total}</p>
          </div>
          <button className="checkOutButton">Check out &gt;</button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
