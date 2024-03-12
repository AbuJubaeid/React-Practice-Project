import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../redux/action";
import { ProductData } from "../redux/productAction";

function Main() {
  let data = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  // const Product = {
  //   name: "I-Phone",
  //   price: 10000,
  //   category: "mobile",
  // };

  useEffect(() => {
    dispatch(ProductData());
  });

  return (
    <div className="main">
      {/* <button className="empty" onClick={() => dispatch(EmptyCart(data))}>
        Empty_Cart
      </button> */}

      <div className="main-content">
        {data.map((item) => (
          <div className="main-data" key={item.id}>
            <img src={item.photo} alt="" />
            <div className="main-text">
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
            </div>

            <div className="add-button">
              <button  onClick={() => dispatch(AddToCart(item))}>
                Add_To_Cart
              </button>
            </div>
            <div>
              <button onClick={() => dispatch(RemoveFromCart(item.id))}>
                Remove_From_Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
