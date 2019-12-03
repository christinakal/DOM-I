let counter = 1;

let timer = setInterval(() => {
    document.getElementById('secondTens').innerHTML = 0;
    document.getElementById('secondOnes').innerHTML = counter;
    counter += 1;

    if(counter >= 10){
        document.getElementById('secondTens').innerHTML = 1;
        document.getElementById('secondOnes').innerHTML = 0;
        clearInterval(timer);
    }
}, 1000);


let counterMs = 0;
let timerMs = setInterval(() => {
    counterMs += 1;

    if (counterMs >= 10){
        counterMs = 0;
        if (counter >= 10 ){
            clearInterval(timerMs);
        }
    }

    document.getElementById('msHundreds').innerHTML = 0;
    document.getElementById('msTens').innerHTML = counterMs;

}, 100);