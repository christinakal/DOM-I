const button = document.getElementById('btn');
const resetButton = document.getElementById('reset-btn');

button.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

let timer, timerMs;

resetTimer();

// TIMER
function startTimer(){
    let counter = 1;
    button.setAttribute("disabled", "true");
    //resetButton.setAttribute("disabled", "true");


    timer = setInterval(() => {
        document.getElementById('secondTens').innerHTML = 0;
        document.getElementById('secondOnes').innerHTML = counter;
        counter += 1;
    
        if(counter >= 10){
            document.getElementById('secondTens').innerHTML = 1;
            document.getElementById('secondOnes').innerHTML = 0;
            button.removeAttribute("disabled");
            
            clearInterval(timer);
        }
    }, 1000);
    
    
    let counterMs = 0;
    timerMs = setInterval(() => {
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

}


function resetTimer(){
    clearInterval(timer);
    clearInterval(timerMs);

    button.removeAttribute("disabled");

    document.getElementById('secondTens').innerHTML = 0;
    document.getElementById('secondOnes').innerHTML = 0;
    document.getElementById('msHundreds').innerHTML = 0;
    document.getElementById('msTens').innerHTML = 0;

}