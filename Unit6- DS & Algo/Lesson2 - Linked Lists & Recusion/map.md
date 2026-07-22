# JavaScript Hash Maps

## 1. Using Map (Recommended for Hash Maps)

The `Map` object in JavaScript provides an efficient key-value store and is ideal for hash maps.

### Example: Using Map

```javascript
const hashMap = new Map();

// Adding key-value pairs
hashMap.set('name', 'John');
hashMap.set('age', 25);
hashMap.set('city', 'Toronto');

// Retrieving values
console.log(hashMap.get('name')); // Output: John

// Checking if a key exists
console.log(hashMap.has('age')); // Output: true

// Deleting a key
hashMap.delete('city');

// Getting size
console.log(hashMap.size); // Output: 2

// Iterating over keys and values
for (let [key, value] of hashMap) {
    console.log(`${key}: ${value}`);
}
