import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import fruitReducer from "./slices/fruitSlice";
import cookieReducer from "./slices/cookieSlice";
import nutReducer from "./slices/nutSlice";
import vegetableReducer from "./slices/vegetableSlice";
import userReducer from "./slices/userSlice";
import loginReducer from "./slices/loginSlice";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { configureStore } from "@reduxjs/toolkit";
library.add(faHeart);
library.add(faCheck);

const store = configureStore({
  reducer: {
    fruits: fruitReducer,
    cookies: cookieReducer,
    nuts: nutReducer,
    vegetables: vegetableReducer,
    users: userReducer,
    login: loginReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
