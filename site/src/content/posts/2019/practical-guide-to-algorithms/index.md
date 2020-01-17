---
title: "Practical Guide to Algorithms"
date: "2019-10-07"
description: "My notes from the Frontend Masters course."
tags: ["Notes", "CS"]
---

## Algorithm

- Steps that you take to solve a problem
- Why care? It's an engineers job to solve problems
- Identify pattern -> apply correct algorithm -> solve problem in optimal way

## Time complexity

- How we estimate the speed of an algorithm
- How many operations are expected to solve the problem, in respect to input size
- Pessimistic, assume worst case conditions

> "As the input grows, it will grow in this proportion."

#### Common run times from fast to very slow

- Constant 0(1)
- Logarithmic 0(logN)
- Linear 0(n)
- Quadratic 0(n2)
- Exponential 0(k^n)
- Logarithmic

> #### Logarithmic versus exponential
>
> In logarithmic time, as input increases, number of operations decreases by a fraction. Time complexity increases by a fraction, thus it grows slowly. This means logarithmic is often better than linear with large data sets

## Space complexity

- How much memory is used
- Works in similar way to time, but on the question of how much more space are we taking up

## Optimization with caching

- Keeping track of something that you've already seen
- Save it to an object or array.
- Caching trades time complexity for space complexity
- Important when the callback function is expensive, and usually the right tradeoff in a browser environment

#### Implementing a cache to keep track of already seen values in linear time

```js
const uniqSort = arr => {
  const cache = {}
  const unique = []

  arr.map(num => {
    if (!cache[num]) {
      cache[num] = true
      unique.push(num)
    }
  })

  return unique.sort((a, b) => a - b)
}

uniqSort([4, 2, 2, 2, 3, 2, 2, 2, 2]) // => [2,3,4]
```

## Memoization

- When you cache the value that a function returns

> #### Memoization and caching
>
> Memoization is a type of caching. When you are caching the result of a function, it's called memoization.

- Factorials are a common type of problem to solve using memoization, because you do a lot of the same calculations over and over
- Rather than recalculating the result, memoize it

#### Using memoization to save the results of a calculation

```js
const times10 = n => {
  return n * 10
}

const cache = {}

const memoTimes10 = n => {
  if (n in cache) {
    // fetch from cache
    return cache[n]
  } else {
    // perform calculation
    const result = times10(n)
    cache[n] = result
    return result
  }
}
```

#### Using memoization and closure to solve the same problem

- Cleans up global scope and scopes cache inside of function
- Uses closure to return a function that can be called later
- Inside of closure, we retain access to variables that were called before. Can remember prior values
- Important concept: returning a function from a function that can be called later

```js
const memoizedClosureTimes10 = () => {
  // Our cache is not in global scope
  // And is NOT RESET every time we call the function
  let cache = {}

  return n => {
    if (n in cache) {
      // return from cache
      return cache[n]
    } else {
      // calculate
      let result = n * 10
      // save calculation to cache
      cache[n] = result
      return result
    }
  }
}

const memoClosureTimes10 = memoizedClosureTimes10()

memoClosureTimes10(9) // calculated
memoClosureTimes10(10) // calculated
memoClosureTimes10(9) // cached result
```

#### Writing a generic memoize function

- Use closure again to return a function that returns an arbitrary callback function

```js
// Possible callbacks
const times10 = n => n * 10
const times20 = n => n * 20

const genericMemoize = cb => {
  let cache = {}

  return n => {
    if (n in cache) {
      // Fetch from cache
      return cache[n]
    } else {
      // Calculate result
      let result = cb(n)
      cache[n] = result
      return result
    }
  }
}

const memoizeTimes20 = genericMemoize(times20)

memoizeTimes20(8) // calculated
memoizeTimes20(9) // calculated
memoizeTimes20(8) // cached
```

## Recursion

- When a function calls itself, until it doesn't
- An elegant solution to keep code DRY
- Recursion can always be implemented as a loop, but it's often simpler to use recursion

#### Recursion in 4 steps

1. Identify base case (when it is you want your loop to stop)
2. Identify recursive case (the work that you want to do)
3. Return where appropriate
4. Write procedures for each case that bring you closer to the base case(otherwise infinite loop)

#### Recursion patterns

- Wrapper function
- Accumulator function

#### Divide and Conquer

- A recursive technique where we:
  - Take large problem
  - Divide into sub-problems and do work

#### Binary Search

Example: Search for a value in a **_sorted_** array, by cutting the side of the search area in half.

- Steps:
  - Break sorted array in half
  - Is value the value that we're looking for `<` or `>` current location
  - Repeat

#### Linear Search

Simply loop through a list, and look for that number.

## Sorting

- Naive sorts: Keep looping and comparing values until list is sorted

  - Bubble sort
  - Insertion sort
  - Selection sort

- Divide and conquer sort: Recursively divide list / smaller parts of list until entire list is sorted

  - Merge sort
  - Quicksort

- For sorting algorithms, you must look at every value, can never be less than linear time

## Greedy Algorithms

- Take the short sighted solution. Given a decision, do the one that looks like the best decision at that time, without considering the big picture

- Always making the locally optimal choice does **_not_** always give the optimal solution.

- When to use: Data set is so large that you can't think of all scenarios. It's computationally too much and it's better to have **_a_** solution than none at all

## Dynamic Programming

- Optimization technique

- Cache values when doing work inside the sub-problems. If you have a solution that you can cache, that's dynamic programming

- Different ways of caching:
  - Top down, recursive approach
  - Bottom up, iterative technique

## On How to Learn and Improve

- Talk about how code is executing. Reason about it. Don't just run and see what happens. Be able to reason through what you are writing

- In a typical interview environment, you **_can't_** run the code. Need to learn how to debug, run the code in your head
