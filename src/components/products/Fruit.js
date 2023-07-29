import React, { useContext, useEffect } from "react";
import axios, * as others from "axios";
// import "./Fruit.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";

import { loadToFruits } from "../../slices/fruitSlice";
import { addToUsersWishlist } from "../../slices/userSlice";
import Loader from "../Loader";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Fruit() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userId = user.userInfo._id;
  const loadProduct = () => {
    dispatch(loadToFruits());
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="products">
      {fruits.pending === true || user.pending === true ? (
        <Loader />
      ) : (
        fruits.items.map((f) => {
          return (
            <div className="product">
              <img src={f.img} alt="fruit-pic"></img>
              <h1>{f.name}</h1>
              <p>{f.price}</p>
              <p>{f.description}</p>
              <button
                onClick={() =>
                  dispatch(addToUsersWishlist({ userId: userId, data: f }))
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

export default Fruit;
