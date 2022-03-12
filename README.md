# Dynamic Programming by @freeCodeCamp.org

<https://www.youtube.com/watch?v=oBt53YbR9Kk>

    - # means input in terminal 

## Setting up Anaconda (Virtual Environment)

    - download <https://www.anaconda.com/products/individual>

## Parts

### Part 1

    Fib Memoization
    write a function 'fib(n)' that takes in a number as an argument-
    The function should return the n-th number of Fibonacci sequence.

### Part 2

    Grid Traveler
    Say that you are a traveler on a 2D grid. You begin in the top-left
    corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many way you can travel to the goal on a grid with
    dimensions m * n?
    Write a function 'gridTraveler(m, n)' that calculates this

### Part 3

    Can Sum
    Write a function 'canSum(targetSum, numbers)' that takes in a 
    targetSum and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is
    possible to generate the targetSum using th numbers from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are non-negative.

### Part 4

    How Sum
    Write a function 'howSum(targetSum, numbers)' that takes in a 
    targetSum and an array of numbers as arguments.
    The function should return an array containing any combination of
    elements that add up to exactly the targetSum. If there is no 
    combination that adds up to the targeSum return null.
    If there are multiple combinations possible, you may return any
    single one.

### Part 5

    Best Sum
    Write a function 'bestSum(targetSum, numbers)' that takes in a 
    targetSum and an array of numbers as arguments.
    The function should return an array containing the shortest
    combination of numbers that add up to exactly the targetSum.
    If there is a tie for the shortest combination, you may return any
    one of the shortest.

### Part 6

    Can Construct
    Write a function 'canConstruct(target, wordBank)' that accepts a 
    target string and an array of strings.
    The function should return a boolean indicating whether or not 'target'
    can be constructed by concatenating elements of the 'wordBank' array.
    We can reuse the elements of the 'wordBank' as many times needed.

### Part 7

    Count Construct
    Write a function 'countConstruct(target, wordBank)' that accepts a 
    target string and an array of strings.
    The function should return a number of ways that the 'target' can be
    constructed by concatenating elements of the 'wordBank' array.
    You may reuse the elements of the 'wordBank' as many times as needed.

### Part 8

    All Construct
    Write a function 'allConstruct(target, wordBank)' that accepts a 
    target string and an array of strings.
    The function should return a 2D array containing all of the ways that
    the 'target' can be constructed by concatenating elements of the 'wordBank' 
    array.
    Each element of the 2D array should represent one combination that constructs
    the 'target'.
    You may reuse the elements of the 'wordBank' as many times as needed.

### Part 9

    Fib tabulation
    write a function 'fib(n)' that takes in a number as an argument-
    The function should return the n-th number of Fibonacci sequence.

### Part 10

    Grid Traveler tabulation
    Say that you are a traveler on a 2D grid. You begin in the top-left
    corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many way you can travel to the goal on a grid with
    dimensions m * n?
    Write a function 'gridTraveler(m, n)' that calculates this

### Part 11

    Can Sum tabulation
    Write a function 'canSum(targetSum, numbers)' that takes in a 
    targetSum and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is
    possible to generate the targetSum using th numbers from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are non-negative.

### Part 12

    How Sum tabulation
    Write a function 'howSum(targetSum, numbers)' that takes in a 
    targetSum and an array of numbers as arguments.
    The function should return an array containing any combination of
    elements that add up to exactly the targetSum. If there is no 
    combination that adds up to the targeSum return null.
    If there are multiple combinations possible, you may return any
    single one.


## Memoization Recipe

    1. Make it work
        - visualize the problem as a tree
        - implement the tree using recursion
        - test it
  
    2. Make it efficient
        - add a memo object
        - add a base case to return memo values
## Tabulation Recipe

    - visualize the problem as a table
    - size the table based on the inputs
    - initialize the table with default values
    - seed the trivial answer into the table
    - iterate through the table
    - fill further positions based on the current position

## Additional info

    <https://en.wikipedia.org/wiki/Fibonacci_number>
    <https://docs.anaconda.com/anaconda/user-guide/getting-started/>
    <https://conda.io/projects/conda/en/latest/commands.html>
