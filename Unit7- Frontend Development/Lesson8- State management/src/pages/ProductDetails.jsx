import { useParams } from "react-router";
import { useTheme } from "../context/ThemeContext";
import useFetch from "../hooks/useFetch";


const ProductDetails = () => {
  const { id } = useParams();

  // Reuse the same useFetch hook ProductList uses instead of duplicating
  // fetch/try/catch logic here — one hook, used in multiple places.
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const { theme } = useTheme();
  

  if (isLoading) return <div>Loading product details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={`product-details home ${theme}`}>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Category: {data.category}</p>
    </div>
  );
};

export default ProductDetails;
