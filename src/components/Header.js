import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // You can create a CSS file to style the header
import { useSelector } from "react-redux";

const Header = () => {
  const login = useSelector((state) => state.login);
  return (
    <header className="header">
      <nav>
        <div className="navbar">
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/fruits">
            <h3>Fruits</h3>
          </NavLink>
          <NavLink to="/nuts">
            <h3>Nuts</h3>
          </NavLink>
          <NavLink to="/vegetables">
            <h3>Veggies</h3>
          </NavLink>
          <NavLink to="/cookies">
            <h3>Cookies</h3>
          </NavLink>
          {login.isLogin === true && (
            <NavLink to="user/orders">
              <h3>Orders</h3>
            </NavLink>
          )}
          {login.isLogin === true && (
            <NavLink to="/user/wishlist">
              <h3>Wishlist</h3>
            </NavLink>
          )}

          <NavLink to="/cart">{login === true && <h3>Cart</h3>}</NavLink>
          {login.isLogin === true && (
            <NavLink to="/logout" className="logout">
              <h3>Logout</h3>
            </NavLink>
          )}
          {login.isLogin === false && (
            <NavLink to="/login" className="login">
              <h3>Login</h3>
            </NavLink>
          )}
          {login.isLogin === false && (
            <NavLink to="/signup" className="signup">
              <h3>Signup</h3>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
