import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const PRODUCTS = [
  { id: 1, name: "Milk", category: "Dairy", price: "$2.99", inStock: true },
  { id: 2, name: "Bread", category: "Bakery", price: "$1.99", inStock: true },
  { id: 3, name: "Cheese", category: "Dairy", price: "$4.49", inStock: true },
  { id: 4, name: "Apple", category: "Fruits", price: "$0.99", inStock: true }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const filteredProducts =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping Cart</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Filter category={category} setCategory={setCategory} />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;