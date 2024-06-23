# HashMap Implementation in JavaScript

This project is a simple implementation of a HashMap data structure in JavaScript. It is part of the JavaScript Full Stack Odin Project curriculum. The HashMap class supports basic operations such as adding, retrieving, and removing key-value pairs, handling collisions using a linked list, and dynamically resizing the underlying bucket array to maintain efficient performance.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Limitations](#limitations)
- [Usage](#usage)
- [API](#api)
- [Testing](#testing)
- [Extra Credit](#extra-credit)
- [Contributing](#contributing)
- [License](#license)

## Introduction

A HashMap is a data structure that allows for efficient storage and retrieval of key-value pairs. This implementation handles collisions using linked lists and dynamically resizes the bucket array to maintain performance as more elements are added.

## Features

- Basic HashMap operations: set, get, remove, has, clear, keys, values, entries
- Collision handling using linked lists
- Dynamic resizing of buckets based on load factor

## Limitations

JavaScript’s dynamic nature of arrays allows us to insert and retrieve indexes that are outside the array size range. To demonstrate the concept of fixed-size buckets, we use a self-imposed restriction to throw an error if an out-of-bound index is accessed.

```javascript
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
```

## Usage

### Installation

Clone the repository and navigate to the project directory:

```sh
git clone https://github.com/yourusername/hashmap-js.git
cd hashmap-js
```

### Running the Code

Ensure you have Node.js installed, then you can run the code with:

```sh
node test.js
```

### Project Structure

- `Node.js`: Node class used in the linked list for handling collisions
- `LinkedList.js`: LinkedList class used to store key-value pairs in each bucket
- `HashMap.js`: HashMap class with the main implementation
- `test.js`: Script to test the HashMap implementation

## API

### HashMap Methods

- `hash(key)`: Generates a hash code for a given key.
- `set(key, value)`: Adds or updates a key-value pair.
- `get(key)`: Retrieves the value for a given key.
- `has(key)`: Checks if a key is present in the hash map.
- `remove(key)`: Removes a key-value pair.
- `length()`: Returns the number of key-value pairs.
- `clear()`: Clears all entries in the hash map.
- `keys()`: Returns an array of all keys.
- `values()`: Returns an array of all values.
- `entries()`: Returns an array of all key-value pairs.

## Testing

To test the HashMap implementation, create a new instance and populate it with data using the `set` method. Then, test each method to ensure they work as expected.

### Example

```javascript
import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
// Add more entries...

console.log(test.get("apple")); // 'red'
console.log(test.has("banana")); // true
console.log(test.remove("carrot")); // true
console.log(test.length()); // Number of entries
console.log(test.keys()); // Array of keys
console.log(test.values()); // Array of values
console.log(test.entries()); // Array of key-value pairs
test.clear();
console.log(test.length()); // 0
```

## Extra Credit

### HashSet Implementation

Create a `HashSet` class or factory function that behaves like a `HashMap` but only contains keys with no values.

### Example

```javascript
class HashSet extends HashMap {
  add(key) {
    this.set(key, true);
  }

  delete(key) {
    return this.remove(key);
  }
}

const set = new HashSet();
set.add("apple");
set.add("banana");
console.log(set.has("apple")); // true
console.log(set.has("banana")); // true
set.delete("apple");
console.log(set.has("apple")); // false
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. Feel free to fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
