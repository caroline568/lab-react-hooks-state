export default function ProductItem({ product, addToCart }) {
  return (
    <div>
      <p>{product.name}</p>

      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}