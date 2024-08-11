//The function for sum of n numbers 1 to n
function sum(n){
    let sum1 = 0;
    for(i=1; i<=n; i++) {
    sum1 += i;
    }
    console.log("sum : "+sum1);
  }
  
  sum(5);
// output: Sum : 15