import React, { useEffect } from "react";
import axios, * as others from "axios";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromUsersWishlist,
  loadToUsersWishlist,
} from "../slices/userSlice";
import Loader from "./Loader";

function Wishlist() {
  const user = useSelector((state) => state.users);
  console.log(user.userInfo);
  const dispatch = useDispatch();
  const wishlist = user.userInfo.userWishlist;

  useEffect(() => {
    dispatch(loadToUsersWishlist(user.userInfo._id));
  }, []);

  return (
    <div className="wishlist__items">
      {user.pending === true ? (
        <Loader />
      ) : (
        wishlist.map((w) => {
          return (
            <div className="wishlist__item">
              <img src={w.img} alt="wishlist-pic"></img>
              <h1>{w.name}</h1> <p>{w.price}</p> <p>{w.description}</p>
              <button
                onClick={() =>
                  dispatch(
                    deleteFromUsersWishlist({
                      userId: user.userInfo._id,
                      itemId: w._id,
                    })
                  )
                }
              >
                Remove from Wishlist
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Wishlist;
