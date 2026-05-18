import { useState } from "react";
import "./index.css";

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Apple", category: "Fruits" }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1>Shopping App</h1>

        {/* DARK MODE BUTTON */}
        <button onClick={toggleDarkMode}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* CATEGORY FILTER */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
        </select>

        {/* PRODUCTS */}
        <div>
          {filteredProducts.length === 0 ? (
            <p>No products available</p>
          ) : (
            filteredProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.category}</p>

                <button
                  data-testid={`product-${p.id}`}
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>

        {/* CART */}
        <div>
          <h2>Shopping Cart</h2>

          {cart.map((item, index) => (
            <p key={index}>{item.name} is in your cart</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;