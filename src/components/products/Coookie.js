import React, { useEffect } from "react";
import axios, * as others from "axios";
// import "./Coookie.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";
import { loadToCookies } from "../../slices/cookieSlice";
import { addToUsersWishlist } from "../../slices/userSlice";
import Loader from "../Loader";
function Coookie() {
  const cookies = useSelector((state) => state.cookies);
  console.log(cookies.items);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userId = user.userInfo._id;
  const loadProduct = () => {
    dispatch(loadToCookies());
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="products">
      {cookies.pending || user.pending ? (
        <Loader />
      ) : (
        cookies.items.map((c) => {
          return (
            <div className="product">
              <img src={c.img} alt="fruit-pic"></img>
              <h1>{c.name}</h1>
              <p>{c.price}</p>
              <p>{c.description}</p>
              <button
                onClick={() =>
                  dispatch(addToUsersWishlist({ userId: userId, data: c }))
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

export default Coookie;
