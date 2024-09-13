// The solution in callback technique
setTimeout(function () {
    console.log("Hi");
    setTimeout(function () {
        console.log("Hello");
        setTimeout(function (){
            console.log("Holaa");
        },5000);
    }, 3000);
}, 1000);

/* Output:
    Hi          after  1 sec      
    Hello       after  1+3 sec
    Holaa       after  after 1+3+5 sec
    */

