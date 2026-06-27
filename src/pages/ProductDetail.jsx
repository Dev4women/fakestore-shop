import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="status-message">Loading product...</p>;
  if (!product) return <p className="status-message">Product not found.</p>;

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to products</Link>
      <div className="detail-content">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p className="rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;