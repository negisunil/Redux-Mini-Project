import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../../redux/Slices/CartSlice";
import "./SingleCartItem.css";

function SingleCartItem({ item }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteFromCart(item.id));
  }

  return (
    <>
      <div className="singleCartItem">
        <img className="itemImg" src={item.images[0]} alt={item.title} />
        <div className="itemDetails">
          <h3>{item.title}</h3>
          <p className="description">{item.description}</p>

          <h4 className="aboutItem">INR {item.price}</h4>
        </div>
        <input className="quantityText" type="text" value={item.quantity} />
        <button onClick={handleDelete} className="deleteButton">
          x
        </button>
      </div>
      <hr />
    </>
  );
}

export default SingleCartItem;
