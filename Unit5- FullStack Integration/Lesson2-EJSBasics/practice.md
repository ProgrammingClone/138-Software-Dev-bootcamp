
# EJS Practice Exercise: Render a Product Details Page with Dynamic Pricing

## **Objective**
Create an Express app with a route `/products/:id` that displays product details dynamically based on the product ID. The data should be stored in a JSON object inside your route file. Each product should have:

- `id` (numeric)
- `name`
- `description` (may contain raw HTML like `<b>`, `<i>`, or `<span style="color:red">`)
- `price`
- `discountPercentage` (optional)

## **Requirements**
1. If a product has a `discountPercentage`, calculate the final price and display both the original and discounted prices in the EJS view.
2. If a product does **not** have a discount, show only the regular price.
3. If the product ID does not exist in the JSON data, render a message: `"Product not found"` instead of the details.
4. **Use all three EJS syntax types:**
   - **`<%- %>`** for rendering the `description` safely (without escaping HTML).
   - **`<%= %>`** for rendering the `name` and `price` as plain text (escaped output).
   - **`<% %>`** for writing conditional logic to check for discounts.

---

## **Example JSON Data**
```js
const products = [
  { id: 1, name: "iPhone 13", description: "<b>Latest model</b> with A15 Bionic chip", price: 999, discountPercentage: 15 },
  { id: 2, name: "Samsung Galaxy S22", description: "<i>Powerful performance</i> and amazing camera", price: 899 },
  { id: 3, name: "MacBook Pro", description: "16-inch, <span style='color:red'>M1 Pro chip</span>", price: 2499, discountPercentage: 10 }
];
```

---

## **Expected Outputs in EJS View**

✅ **Request:** `GET /products/1`
✅ **Response (if product exists with discount):**
```html
<h1>Product: iPhone 13</h1>
<p>Description: <b>Latest model</b> with A15 Bionic chip</p>
<p>Original Price: $999</p>
<p>Discounted Price: $849 (15% off)</p>
```

✅ **Request:** `GET /products/2`
✅ **Response (if product exists without discount):**
```html
<h1>Product: Samsung Galaxy S22</h1>
<p>Description: <i>Powerful performance</i> and amazing camera</p>
<p>Price: $899</p>
```

✅ **Request:** `GET /products/99`
✅ **Response (if product does not exist):**
```html
<h1>Product not found</h1>
```
