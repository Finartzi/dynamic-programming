/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk>

    Grid Traveler

*/

const gridTraveler = (n, m) => {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1));
    table[0][0] = 'x';
    console.log(table);
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(25, 25));