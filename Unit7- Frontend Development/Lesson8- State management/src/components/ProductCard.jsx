import { NavLink } from "react-router";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
   // Consuming CartContext directly here means we don't have to pass
  // "addToCart" down as a prop from ProductList -> ProductCard -> ...;
  // any component, at any depth, can read/update the shared cart state.
  const {addToCard} = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <NavLink to={`/product/${product.id}`}>View Details</NavLink>
      <button onClick={()=>addToCard(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
