function sum(a, b)
{
    return a + b;
}
function substract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a / b;
}

function doOperation(a, b, op) 
/* This function op is call as an argument in function doOperation
  it will be directly instead of - 
        let val = op(a, b);
        console.log(val);
  */
{
        return op(a,b);
}

console.log(doOperation(1, 2, sum));  // Output: 3
console.log(doOperation(1, 2, substract));  // ouput: -1
console.log(doOperation(1, 2, multiply));  // output: 2
console.log(doOperation(1, 2, divide));  // output: 0.5
