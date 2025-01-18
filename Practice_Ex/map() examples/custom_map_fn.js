const custom_map = (arr, fn) => {
    const transformedArr = [];
    for(let i=0; i<arr.length; i++) {
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}


function double(n) {
    return n*2;
}

const arr = [1, 2, 3, 4, 5];
console.log(custom_map(arr, double));