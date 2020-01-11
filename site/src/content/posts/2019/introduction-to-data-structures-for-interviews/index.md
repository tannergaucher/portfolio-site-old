---
title: "Introduction to Data Structures for Interviews"
date: "2019-12-10"
description: "My notes on the frontend masters course."
tags: ["Notes", "CS"]
---

#### Common data structures:

- Arrays and strings
- Hash Tables
- Linked Lists
- Stacks / queues
- Trees / heaps
- Graphs

#### On Application versus implementation

- Be able to implement them, but more importantly, be able to apply the correct ones to solve problems / interview questions

#### How To Prepare Effectively

- Don't just memorize
- Find themes but don't jump to conclusions
- Practice with a timer. Being able to solve things quickly matters
- Actually practice. Reading doesn't count

## Stacks & Queues

- Ordered data structures that have opinions about how things can be inserted and removed

- **Stack:** Last in, first out. Push and pop methods

- **Queue** First in, first out. Enqueue and dequeue methods

- **Pros:** Fast operations

- Common Examples: Linked lists, hash table, array / string

#### Implementation of a stack:

```js
class Stack {
  constructor() {
    this._storage = {}
    this._length = 0
  }

  push(value) {
    this._storage[this._length] = value
    this.length++
  }

  pop() {
    if (this.length) {
      const lastValue = this._storage[this._length - 1]
      delete this._storage[lastValue]
      this._length--

      return lastValue
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._length - 1]
    }
  }
}
```

#### Implementation of a Queue:

```js
class Queue {
  constructor() {
    this._storage = {}
    this._length = 0
    this._headIndex = 0
  }

  // Enqueues a new value at the end of the queue.
  enqueue(value) {
    const lastIndex = this._length + this._headIndex
    this._storage[lastIndex] = value
    this._length++
  }

  // Dequeues the value from the beginning of the queue and returns it.
  dequeue() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex]
      delete this._storage[this._headIndex]
      this._length--
      this._headIndex++

      return firstValue
    }
  }

  // Returns the value from the beginning of the queue without deleting it.
  peek() {
    return this._storage[this._headIndex]
  }
}
```

### Linked List

- Organizes items sequentially, with each item storing a pointer to the next

- JS has dynamic arrays, more important in languages that don't have dynamic arrays

- Each item has a property next that points to another object

When we assign values to an object, we are really just pointing to that object. That object doesn't live inside that variable, the variable is just a pointer to the object in memory. If you assign another variable to that object, now have 2 variables pointing to the same object. But there's only one object. That's what we mean by reference. Pointers points to nodes (objects).

- Linked lists are often the underlaying data structure for a stack or a queue

```js
const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
}
```

- This example has no reference to previous. If it did, it would be a **doubly linked list.**

- Common Use Case: **_Least recently used cache._** Keep track of new searches. As we get new input, have to take things out. Least recenty used cache removes oldest one

- Hash tables often use linked lists under the hood

## Hash Tables

- Organize data for quick lookup of a value for a given key

* Best for fast lookups + having keys that are flexible. (Array indexes are numerically constrained.)

* Keys can be strings. With ES6, keys can be functions too if using set or map

* In JS, object, set, map are hash table data structures

#### Pros:

- Fast Lookups
- Flexible Keys

#### Cons:

- Slow worst case lookups
- Unordered
- Single directional lookups

#### Main Concepts:

- Hashing function
- Collisions
- Resizing

#### Hashing function:

- Takes key, hashes it. For every input, always gives the same output
- For hash tables, we think about the average case, rather than worst, because chance of worst case happening is very slim
- When thinking about optimizing a problem that resuires a fast lookup, should always think hashtable

- Be able to choose between appropriate data structure
  - Object?
  - Map?
  - Set?

## Arrays & Strings

- Array organizes items sequentially in memory

#### Pros:

- Fast lookups
- Fast appends

#### Cons:

- Slow inserts and deletes, because when inserting / deleting from the middle, must shift everything over
