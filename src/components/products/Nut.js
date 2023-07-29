import React, { useEffect } from "react";
import axios, * as others from "axios";
// import "./Nut.css";
import "../Product.css";

import { useDispatch, useSelector } from "react-redux";
import { loadToNuts } from "../../slices/nutSlice";
import { addToUsersWishlist } from "../../slices/userSlice";
import Loader from "../Loader";

function Nut() {
  const nuts = useSelector((state) => state.nuts);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userId = user.userInfo._id;
  const loadProduct = () => {
    dispatch(loadToNuts());
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="products">
      {nuts.pending === true || user.pending === true ? (
        <Loader />
      ) : (
        nuts.items.map((n) => {
          return (
            <div className="product">
              <img src={n.img} alt="fruit-pic"></img>
              <h1>{n.name}</h1>
              <p>{n.price}</p>
              <p>{n.description}</p>
              <button
                onClick={() =>
                  dispatch(addToUsersWishlist({ userId: userId, data: n }))
                }
              >
                Add to Wishlist
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Nut;
