import React, { useContext, useEffect, useState } from "react";
import axios, * as others from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";
function Home() {
  const [category, setCategory] = useState([]);

  const loadCategories = async () => {
    axios.get("http://localhost:8085/category").then((resp) => {
      setCategory(resp.data);
    });
  };
  useEffect(() => {
    loadCategories();
  }, []);
  let path = "";
  return (
    <div className="homes">
      {category.map((c) => {
        path = `/${c.name}`;
        return (
          <div className="home">
            <img src={c.img}></img>
            <NavLink to={path}>
              <h1>{c.name}</h1>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
