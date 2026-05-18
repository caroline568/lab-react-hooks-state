import { useState } from "react";
import "./index.css";

function App() {
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Cheese", category: "Dairy" },
    { id: 3, name: "Apple", category: "Fruits" },
    { id: 4, name: "Banana", category: "Fruits" },
    { id: 5, name: "Carrot", category: "Vegetables" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <h1>🛒 Grocery Shopping App</h1>

        <div className="top-controls">
          <button onClick={handleDarkMode}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>

        <h2 className="section-title">Products</h2>

        <div className="products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
              </div>

              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2 className="section-title">Cart</h2>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cart.map((item, index) => (
              <p className="cart-item" key={index}>
                ✅ {item.name} is in your cart.
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;