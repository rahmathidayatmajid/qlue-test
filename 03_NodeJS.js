/**
 * Write a function which, taking in a positive integer n as input, returns a string “CIRCLE” 
 * if the n is divisible by 2, a string “STAR” if the n is divisible by 3, a string “CIRCLE STAR” 
 * if n is divisible by 2 and 3, and return null if n is divisible by neither 2 and 3.

sample expected output:
getShape(5); ⇒ Null
getShape(6); ⇒ CIRCLE STAR
getShape(9); ⇒ STAR
 * 
 */

function getShape(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log('null');
        } else if (i % 3 === 0) {
            console.log('CIRCLE STAR');
        } else if (i % 7 === 0) {
            console.log('STAR');
        } else {
            console.log(i);
        }
    }

    return;
}


console.log(getShape(5));