import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadToUser } from "../slices/userSlice";
import { loginUser } from "../slices/loginSlice";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const userr = useSelector((state) => state.users);
  const navigate = useNavigate();

  // const [redirectTo, setRedirectTo] = useState(null);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    dispatch(loadToUser(formData));
    dispatch(loginUser(true));
    navigate("/");
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Update the state of the component
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="login-container">
      <div>
        <div className="brand-name">FruitKart</div>
        <header className="login-header">
          <h1>Login</h1>
        </header>
        <form className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Your password"
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
