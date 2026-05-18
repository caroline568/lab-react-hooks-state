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
        <h1>Shopping App</h1>

        {/* Dark Mode Button */}
        <button onClick={handleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Category Filter */}
        <div style={{ marginTop: "20px" }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>

            {/* Extra category for testing no products */}
            <option value="Snacks">Snacks</option>
          </select>
        </div>

        {/* Products */}
        <div style={{ marginTop: "20px" }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* Cart */}
        <div className="cart">
          <h2>Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <p key={index}>{item.name} is in your cart.</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;