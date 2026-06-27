import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h1>Order Summary</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <p key={item.id}>{item.title} x {item.quantity} — ${(item.price * item.quantity).toFixed(2)}</p>
          ))}
          <p className="checkout-total">Total: ${total.toFixed(2)}</p>
          <p className="checkout-note">This is a demo checkout — no real payment is processed.</p>
        </>
      )}
      <Link to="/">Back to shopping</Link>
    </div>
  );
}

export default Checkout;