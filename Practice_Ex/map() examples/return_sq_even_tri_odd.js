// Given an array of numbers, use map to return an array where each number is 
// either doubled if it's even or tripled if it's odd.
let arr = [1, 2, 3, 4, 5];
let newArr = (arr.map(arr1 => {
    if(arr1%2 == 0) {
        return arr1 * 2;
    }
    else {
        return arr1 * 3;
    }
}));

console.log(newArr);
