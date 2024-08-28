let counter = 0;

let counterr = () => {
    console.log(counter);
    counter++;
    if (counter <= 10) {
        setTimeout(counterr, 1000); 
    }
}

counterr();

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