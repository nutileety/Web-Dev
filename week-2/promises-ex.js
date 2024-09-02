const setTimeoutPromisified = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let call = () => {
    console.log("This not a call back syntax");
}
setTimeoutPromisified(3000).then(call);

// output :
// (after 3 seconds) This not a call back syntax