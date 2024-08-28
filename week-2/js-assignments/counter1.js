let counter = 0;

function timer() {
    console.log(counter);
    counter++;
    if(counter > 10){
        clearInterval(end);
    }
}

const end = setInterval(timer, 1000);

/* ouput:
    0 seconds: 0
    1 seconds: 1
    2 seconds: 2
    3 seconds: 3
    4 seconds: 4
    5 seconds: 5
    6 seconds: 6
    7 seconds: 7
    8 seconds: 8
    9 seconds: 9
    10 seconds: 10
*/

//or with latest concise function 

let counter1 = 0;

const end1 = setInterval(() => {
    console.log(counter1);
    counter1++;
    if(counter1 > 10)
        clearInterval(end1);
},1000);