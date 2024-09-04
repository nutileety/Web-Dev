function callAfter3s(resolve) {
    return setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
    return new Promise(callAfter3s);
}

function main() {
    console.log("Hi, it's just a promising program");
}

setTimeoutPromisified().then(main);