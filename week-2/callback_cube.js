function square(n) {
    return n*n;
}

function cube(n) {
    return n**3;
}

function sumOfSquares(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2; 
}

function sumOfCubes(a, b) {
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}

function sumOfSquaresAndCubes(a, b) {
    const squares = sumOfSquares(a, b);
    const cubes = sumOfCubes(a, b);
    console.log(`sum of squares is: ${squares}`);
    console.log(`sum fo cubes is: ${cubes}`);
}

sumOfSquaresAndCubes(1, 2);
