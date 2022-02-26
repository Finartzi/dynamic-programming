/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk>

    How-Sum

*/

const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null){
            return [...remainderResult, num];
        }
    }
    return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300,[7, 14]));