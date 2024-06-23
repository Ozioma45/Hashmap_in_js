import { LinkedList } from "./linkedlist.js";

export class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = Array(initialCapacity)
      .fill(null)
      .map(() => new LinkedList());
    this.size = 0;
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingNode = bucket.toArray().find((n) => n.key === key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      bucket.append({ key, value });
      this.size++;
    }

    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.toArray().find((n) => n.key === key);
    return node ? node.value : null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.find({ key });
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const removed = bucket.remove({ key });
    if (removed) this.size--;
    return removed;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array(this.buckets.length)
      .fill(null)
      .map(() => new LinkedList());
    this.size = 0;
  }

  keys() {
    return this.buckets.flatMap((bucket) =>
      bucket.toArray().map((node) => node.key)
    );
  }

  values() {
    return this.buckets.flatMap((bucket) =>
      bucket.toArray().map((node) => node.value)
    );
  }

  entries() {
    return this.buckets.flatMap((bucket) =>
      bucket.toArray().map((node) => [node.key, node.value])
    );
  }

  resize() {
    const newBuckets = Array(this.buckets.length * 2)
      .fill(null)
      .map(() => new LinkedList());
    this.buckets
      .flatMap((bucket) => bucket.toArray())
      .forEach((node) => {
        const index = this.hash(node.key) % newBuckets.length;
        newBuckets[index].append(node);
      });
    this.buckets = newBuckets;
  }
}
