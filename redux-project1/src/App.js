import "./App.css";
import NavBar from "./Components/e-commerce/nav-bar/NavBar";
import ProductList from "./Components/e-commerce/Product-List/ProductList";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/e-commerce/Shopping/ShoppingCart/ShoppingCart";
import NotFound from "./Components/e-commerce/Shopping/ShoppingCart/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/myCart" element={<ShoppingCart />} />
        <Route path="*" element={<ProductList />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
