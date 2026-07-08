# 🚀 Practice Exercise: Unit Testing in Mocha & Chai

## **Objective**
Write and test a function that calculates the total price of items in a shopping cart, applying a discount if provided.

---

## **Function Details**
### **Function Name:** `calculateTotal(cart, discount = 0)`

### **📌 Parameters:**
1. **`cart`** *(Array of objects)* – Each object represents an item in the shopping cart with:
   - `name` *(String)* – Name of the product.
   - `price` *(Number)* – Price of the product (must be a positive number).

2. **`discount`** *(Number, optional, default = 0)* – A percentage discount applied to the total price.
   - Must be between **0 and 100** (inclusive).

### **🛠 Function Behavior**
- **Calculate total price** by summing the `price` of all items in `cart`.
- **Apply the discount**:
  ```
  total = total - (total * (discount / 100))
  ```
- **Return the final total price** after applying the discount.
- **Handle errors**:
  - If `cart` is not an array, throw an error.
  - If an item is missing a `price` or has an invalid `price`, throw an error.
  - If `discount` is not between 0-100, throw an error.

---

## **✅ Test Cases**

### **1️⃣ Basic Cases**
| Test Case | Input | Expected Output |
|-----------|-------|----------------|
| No discount | `([{name: "Laptop", price: 1000}, {name: "Mouse", price: 50}], 0)` | `1050` |
| 10% discount | `([{name: "Laptop", price: 1000}, {name: "Mouse", price: 50}], 10)` | `945` |
| 50% discount | `([{name: "Chair", price: 200}, {name: "Table", price: 400}], 50)` | `300` |

### **2️⃣ Edge Cases**
| Test Case | Input | Expected Output |
|-----------|-------|----------------|
| Empty cart | `([], 0)` | `0` |
| 100% discount (everything free) | `([{name: "TV", price: 500}], 100)` | `0` |

### **3️⃣ Error Handling Cases**
| Test Case | Input | Expected Error |
|-----------|-------|----------------|
| Cart is not an array | `("not an array", 10)` | `"Cart must be an array"` |
| Price is missing | `([{name: "Item"}], 0)` | `"Each item must have a valid price"` |
| Price is negative | `([{name: "Item", price: -50}], 0)` | `"Each item must have a valid price"` |
| Discount is negative | `([{name: "Item", price: 50}], -5)` | `"Discount must be a number between 0 and 100"` |
| Discount is over 100% | `([{name: "Item", price: 50}], 120)` | `"Discount must be a number between 0 and 100"` |

---

## **🚀 Instructions**
1. Implement the `calculateTotal` function in **`cart.js`**.
2. Write unit tests using **Mocha & Chai**.
3. Ensure all test cases pass! ✅



