// The function to check the person can able to vote or not.

function canVote(age) {
    console.log("Only above 18 can able vote...!")
    if (age >= 18)
        return `Your age is ${age}, You are eligible for voting.`;
    else
        return `Your age is ${age}, So you may not able to vote.`;
}

console.log(canVote(18));
// output: Your age is 18, You are eligible for voting.

console.log(canVote(17));
// output: Your age is 17, So you may not able to vote.




  