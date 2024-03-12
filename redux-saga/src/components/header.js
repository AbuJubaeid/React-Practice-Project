import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useSelector((state) => state.CartReducer);
  return (
    <div className="header">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="headerCart">
        <p>{data.length}</p>
        <Link to="/cart">
          <h3>Cart</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
