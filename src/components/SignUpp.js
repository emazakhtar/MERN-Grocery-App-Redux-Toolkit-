import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadToUser } from "../slices/userSlice";
import { loginUser } from "../slices/loginSlice";

function SignUpp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    axios
      .post("http://localhost:8085/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data.token);
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        dispatch(loginUser(true));
        dispatch(loadToUser(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="brand-name">FruitKart</div>
      <header className="login-header">
        <h1>Signup</h1>
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUpp;
