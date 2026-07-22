# Recursion in JavaScript

## What is Recursion?
Recursion is a programming technique where a function **calls itself** to solve a problem. Each recursive call reduces the problem to a smaller instance until it reaches a **base case**.

### Example of Recursion
A classic example is calculating the **factorial** of a number:
```javascript
function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120
```

## How Recursion Works in Memory
Each function call is stored in the **call stack**, which follows the **LIFO (Last In, First Out)** principle.

### Visual Representation (Factorial Example `factorial(3)`)
```
factorial(3)
│
factorial(2) → 3 * factorial(2)
│
factorial(1) → 2 * factorial(1)
│
factorial(0) → returns 1 (Base case reached)
```
Stack unwinds:
```
factorial(1) → 1 * 1 = 1
factorial(2) → 2 * 1 = 2
factorial(3) → 3 * 2 = 6
```

## When to Use Recursion
✅ When solving problems with a **recursive structure**, such as:
- **Tree Traversals** (Binary Trees, JSON parsing)
- **Graph Traversals** (DFS - Depth First Search)
- **Divide and Conquer Algorithms** (Merge Sort, Quick Sort)
- **Mathematical Problems** (Factorial, Fibonacci, Exponentiation)

## When **Not** to Use Recursion
❌ Avoid recursion when:
- The problem can be solved more **efficiently using iteration**.
- The **recursion depth** is too large, leading to **stack overflow**.
- The function has **high memory consumption** due to excessive stack calls.