import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

const App = () => {
  // Provider order: CartProvider and ThemeProvider don't depend on each
  // other, so nesting order doesn't matter functionally here.
  return (
    <CartProvider>
      <ThemeProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
