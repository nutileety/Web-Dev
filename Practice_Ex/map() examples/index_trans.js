// Given an array of strings, use map to return a new array where each string is
//  prefixed with its index (e.g., "0: apple", "1: banana").
const fruits = ['Apple', 'Banana','Orange','Grapes','Pineapple'];
const indx_fruits = fruits.map((fruit) => {
    return `${fruits.indexOf(fruit)}: ${fruit}`;
});

console.log(`The fruits names with index value:\n ${indx_fruits.join('\n ')}`);