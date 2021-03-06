/**
 * In the language of your choice, write a function which, taking a positive integer n as input, 
 * finds all sets of numbers that sum up to n.

For example, n=4, we have: 4
3,1
2,2
2,1,1
1,1,1,1
Note that 2,1,1 is same as 1,2,1 or 1,1,2.
*/

function findAllSetNum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}

let n = 10;
console.log(`All sets of numbers of ${n} is ${findAllSetNum(n)}`);