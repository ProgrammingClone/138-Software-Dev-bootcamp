import { useTheme } from "../context/ThemeContext";
import ProductList from "../components/ProductList";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <h1>Product List</h1>
        <ProductList />
    </div>
  );
};

export default Home;
