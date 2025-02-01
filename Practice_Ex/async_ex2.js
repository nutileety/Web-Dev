function myFunction() {
    return new Promise((resolve) => {
        resolve("Hi, There");
    });
}

myFunction().then((data) => {
    console.log(data);
});