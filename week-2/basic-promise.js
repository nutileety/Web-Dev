function random(resolve) {
     setTimeout(resolve, 3000);
}

function callback() {
    console.log("Hi this is basic promise");
}

let prom = new Promise(random);
prom.then(callback);