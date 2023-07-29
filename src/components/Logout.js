import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slices/loginSlice";
import { emptyFromUser } from "../slices/userSlice";

function Logout() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutUser(false));
    dispatch(emptyFromUser({}));
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div>
      <h1>click on the button below to logout</h1>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
}

export default Logout;
