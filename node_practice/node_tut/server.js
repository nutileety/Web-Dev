
function Call() {
    console.log("done!\n");
}
function add(a, b, callback) {
    const result = a+b;
    console.log("result : " + result);
    callback();
}

add(3, 4, function() {
    console.log("Done successfully!\n");
});

add(5, 5, Call);

add(6, 5, () => {
    console.log("executed successfully!\n");
})