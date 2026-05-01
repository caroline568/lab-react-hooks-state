export default function Cart({ cart }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} is in your cart
        </p>
      ))}
    </div>
  );
}