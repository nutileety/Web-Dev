//implement the callback function as an argument
function sumOfSomething(a, b, callback) {
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2; 
}

// callback function for the sum of squares
const sumOfSquares = sumOfSomething(1, 2, (n) => {
    return n*n;
}); 

// callback function for the sum of cubes
const sumOfCubes = sumOfSomething(2, 2, (n) => {
    return n**3;
});

console.log(`sum is squares: ${sumOfSquares}`);
console.log(`sum is cubes: ${sumOfCubes}`);
