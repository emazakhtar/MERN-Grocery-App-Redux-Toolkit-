import "./App.css";
import Fruit from "./components/products/Fruit";
import Vegetable from "./components/products/Vegetable";
import Nut from "./components/products/Nut";
import Home from "./components/Home";
import Coookie from "./components/products/Coookie";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Order from "./components/Order";
import Login from "./components/Login";
import SignUpp from "./components/SignUpp";
import Logout from "./components/Logout";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fruits" element={<Fruit />}></Route>
          <Route path="/nuts" element={<Nut />}></Route>
          <Route path="/vegetables" element={<Vegetable />}></Route>
          <Route path="/cookies" element={<Coookie />}></Route>
          <Route path="/user/wishlist" element={<Wishlist />}></Route>
          <Route path="user/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUpp />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
