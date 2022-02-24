/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk>

    Fibonacci sequence
    <https://en.wikipedia.org/wiki/Fibonacci_number

*/

// memoization ("cutting down" recursive calls - increases speed)
// js object , keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(60));

