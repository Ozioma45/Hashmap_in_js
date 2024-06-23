import { HashMap } from "./Hashmap";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Testing overwriting
test.set("apple", "green");
test.set("banana", "brown");

// Testing expansion
test.set("moon", "silver");

console.log(test.get("apple")); // green
console.log(test.get("banana")); // brown
console.log(test.length()); // 13
console.log(test.has("lion")); // true
console.log(test.has("monkey")); // false

test.remove("lion");
console.log(test.has("lion")); // false

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.length()); // 0
