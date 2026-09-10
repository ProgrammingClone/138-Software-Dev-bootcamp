# React Context Practice Challenge

## Objective
In this challenge, you will integrate **React Context API** into your app to manage shared global state that can be accessed from multiple components and pages.

You will build a small e-commerce app with a **shopping cart**, allowing users to add products to the cart from the **Home** page and view the cart on a separate **Cart** page.

---

## Challenge Tasks

###  Task 1: Create a Shared Context
1. Create a `CartContext` using React’s `createContext` and `useContext`.
2. Provide the `CartContext` at the top level of your app so that all components can access and modify cart state.
3. The context should include:
   - `cart`: An array of added products
   - `addToCart(product)`: A function to add a product to the cart
   - `removeFromCart(productId)`: A function to remove a product from the cart

---

###  Task 2: Add Routing
1. Use **React Router v7** to create two pages:
   - `Home`: Displays a list of products with “Add to Cart” buttons.
   - `Cart`: Displays the list of products added to the cart, each with a “Remove” button.
2. Set up navigation using a shared `Navbar` component.

---

###  Task 3: Fetch Products
1. Use the [Fake Store API](https://fakestoreapi.com/products) to fetch and display product data on the Home page:
   - `https://fakestoreapi.com/products`

---

###  Task 4: Use the Context Across Pages
1. Use the `CartContext` in the `Home` page to call `addToCart(product)` when a user clicks "Add to Cart".
2. Use the `CartContext` in the `Cart` page to:
   - List all cart items
   - Remove individual items using `removeFromCart(productId)`

---

##  Bonus
1. Show the total number of items in the cart in the `Navbar` using the shared context.
2. Persist the cart state to `localStorage` so it remains after a page refresh.
3. Show a message like "Cart is empty" when no products are added.

---
