import ProductItem from "./ProductItem";

export default function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}