export default function ProductItem({ product, addToCart }) {
  return (
    <div 
      data-testid={`product-${product.id}`}
      onClick={() => addToCart(product)}
    >
      <p>{product.name}</p>

      <button>
        Add to Cart
      </button>
    </div>
  );
}