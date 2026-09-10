import useFetch  from '../hooks/useFetch';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
