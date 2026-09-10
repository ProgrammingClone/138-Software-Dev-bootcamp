import {createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetails/> },
      { path: "*", element: <NotFound /> }, // catches unmatched paths
    ],
  },
])
