function myFunction() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

myFunction().then(() => {
    console.log("Hi, There");
});