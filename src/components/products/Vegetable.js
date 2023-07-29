import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
// import "./Vegetable.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";

import { loadToVegetables } from "../../slices/vegetableSlice";
import { addToUsersWishlist } from "../../slices/userSlice";
import Loader from "../Loader";

function Vegetable() {
  const vegetables = useSelector((state) => state.vegetables);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userId = user.userInfo._id;
  const loadProduct = () => {
    dispatch(loadToVegetables());
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="products">
      {vegetables.pending === true || user.pending === true ? (
        <Loader />
      ) : (
        vegetables.items.map((v) => {
          return (
            <div className="product">
              <img src={v.img} alt="fruit-pic"></img>
              <h1>{v.name}</h1>
              <p>{v.price}</p>
              <p>{v.description}</p>
              <button
                onClick={() =>
                  dispatch(addToUsersWishlist({ userId: userId, data: v }))
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

export default Vegetable;
