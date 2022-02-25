/* 
    Dynamic Programming by @freeCodeCamp.org

    <https://www.youtube.com/watch?v=oBt53YbR9Kk>

    Can-Sum

*/

const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;

    for (let num of numbers){
        console.log(num);
    }
};

console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300,[7, 14]));