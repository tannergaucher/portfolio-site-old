---
title: "Practical Guide to Algorithms"
date: "2019-10-07"
description: "My notes from the Frontend Masters course."
tags: ["Notes", "CS"]
---

- **Algorithm:** Steps that you take to solve a problem

- Why care? It's an engineers job to solve problems

- Identify pattern => Apply correct algorithm => Solve problem in optimal way

## Time Complexity

- How we estimate the speed of an algorithm

> "As the input grows, it will grow in this proportion."

- How many operations are expected to solve problem, in respect to input size

- Commmon run times from fast to very slow:

  - Contast 0(1)
  - Logarithmic 0(logn)
  - Linear 0(n)
  - Quadratic 0(n2)
  - Exponential 0(k^n)

- **Logarithmic Time:** As input increases, number of operations decreases by a fraction. Time complexity increases by a fraction, thus it grows slowly. Often better than linear time w/ large datasets

## Space Complexity

- The space that is taken up in memory. Works in similar way to time, but on question of how much more space are we taking up

- **Memoization:** When you cache the result of a funciton. A type of caching

- **Caching:** Saving something into an object or array.

- Caching trades time complexity for space complexity. Important when the callback function is expensive, and usually the right tradeoff in a browser environment.

> Example Problem for caching: Factorials

## Recursion

- When a function calls itself, until it doesn't

- An elegant solution to keep code DRY

**Recursion in 4 steps:**

1. Identify base case.
2. Identify recursive case.
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base case

Recursion can always be implemented as a loop, but it's often more simple to use recursion.

- Patterns:
  - Wrapper function
  - Accumulator function

### Divide and Conquer

- A resursive technique where we:
  - Take large problem
  - Divide into sub-problems and do work

### Binary Search

Example: Search for a value in a **_sorted_** array, by cutting the side of the search area in half.

- Steps:
  - Break sorted array in half
  - Is value the value that we're looking for `<` or `>` current location
  - Repeat

### Linear Search

Simply loop through a list, and look for that number.

## Sorting

- Naive sorts: Keep looping and comparing values until list is sorted

  - Bubble sort
  - Insertion sort
  - Selection sort

- Divide and conquer sort: Recursively devide list / smaller parts of list until entire list is sorted

  - Mergesort
  - Quicksort

- For sorting algorithms, you must look at every value, can never be less than linear time

## Greedy Algorithms

- Take the short sighted solution. Given a decision, do the one that looks like the best decision at that time, without considering the big picture

- Always making the locally optimal choice does **_not_** always give the optimal solution.

- When to use: Data set is so large that you can't think of all scenarios. It's computationally too much and it's better to have **_a_** solution than none at all

## Dynamic Programming

- Optimization technique

- Cache values when doing work inside the subproblems. If you have a solution that you can cache, that's dynamic programming

- Different ways of caching:
  - Top down, recursive approach
  - Bottom up, iterative technique

## On How to Learn and Improve

- Talk about how code is executing. Reason about it. Don't just run and see what happens. Be able to reason through what you are writing

- In a typical interview environment, you **_can't_** run the code. Need to learn how to debug, run the code in your head
