import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EmptyCart } from "../redux/action";

const Cart = () => {
  const data = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch()
  return (
    <div className="cartdata">
        <button className="empty" onClick={() => dispatch(EmptyCart(data))}>
        Empty_Cart
      </button>
        <Link to="/">Go Back To Home</Link>
        <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Category</td>
          <td>Color</td>
          <td>Brand</td>
        </tr>
        {data.map((item) => (
          <tr className="image" key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.color}</td>
            <td>{item.brand}</td>
          </tr>
        ))}
      </table>
    </div>
    </div>
    
  );
};

export default Cart;
