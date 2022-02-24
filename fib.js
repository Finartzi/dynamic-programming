/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk>

    Fibonacci sequence
    <https://en.wikipedia.org/wiki/Fibonacci_number

*/

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n -1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(40));

