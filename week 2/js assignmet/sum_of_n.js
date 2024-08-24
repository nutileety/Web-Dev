function sum(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num += i;
    console.log("The num :", num);
  }
  return num;
}

let sumof = sum(5);
console.log("The final sum of n is: ", sumof);

