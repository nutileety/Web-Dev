function findSum(n) {
    let ans = 0;
    for(let i=0; i<n; i++) {
        ans += 1;
    }
    return ans;
}

function findCall() {
    console.log(findSum(100));
}

setTimeout(findCall, 1000);
console.log("Hello World");
console.log(findSum(20));