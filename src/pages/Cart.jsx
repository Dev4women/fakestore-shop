import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <p>Your cart is empty.</p>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-info">
            <p className="title">{item.title}</p>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
          </div>
        </div>
      ))}
      <p className="cart-total">Total: ${total.toFixed(2)}</p>
      <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;