// The solution in callback technique
// setTimeout(function () {
//     console.log("Hi");
//     setTimeout(function () {
//         console.log("Hello");
//         setTimeout(function (){
//             console.log("Holaa");
//         },5000);
//     }, 3000);
// }, 1000);

/* Output:
    Hi          after  1 sec      
    Hello       after  1+3 sec
    Holaa       after  after 1+3+5 sec
    */

// The solution in Promisified method.

let setTimeoutPromisified = (ms) => {
    return new Promise((resolve) => setTimeout(resolve,ms));
}


setTimeoutPromisified(1000).then(function () {
    console.log("Hi");
    setTimeoutPromisified(3000).then(function () {
        console.log("Hello");
        setTimeoutPromisified(5000).then(function () {
            console.log("Holaa");
        });
    });
});

/* Output:
    Hi          after  1 sec      
    Hello       after  1+3 sec
    Holaa       after  after 1+3+5 sec
    */
