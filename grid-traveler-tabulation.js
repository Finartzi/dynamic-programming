/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk&t=12137s>

    Grid Traveler

*/

const gridTraveler = (n, m) => {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(25, 25));