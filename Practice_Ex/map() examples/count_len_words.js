// Q: Given an array of words, use map to create a new array with the length of each word.

const words = ['Hi', 'Hello', 'Good Morning'];
var count = words.map((word) => {
    return `${word}: ${word.length} `;
});

console.log(`The count of each word are:\n ${count.join('\n')}`);