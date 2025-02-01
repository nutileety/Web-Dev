function myAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi, there 1")
        }, 3000);
    });
}

async function mainFunction() {
    const value = await myAsyncFunction();
    console.log(value);
    console.log("Hi, there 2");
}
console.log("The first line to execute");

mainFunction();