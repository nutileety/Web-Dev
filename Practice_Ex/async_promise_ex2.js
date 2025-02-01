function myFunction() {
    let p = new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    console.log("This is under the myFunction not in Promise");
    return p;
}

myFunction().then(() => {
    console.log("Hi, There");
});