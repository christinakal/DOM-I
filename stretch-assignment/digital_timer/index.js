const button = document.getElementById('btn');
const resetButton = document.getElementById('reset-btn');


const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');

const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

button.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

let timer;
let timerMs;

resetTimer();

// TIMER
function startTimer(){
    resetTimer();

    let counter = 1;
    button.setAttribute("disabled", "true");
    //resetButton.setAttribute("disabled", "true");


    timer = setInterval(() => {
        secondTens.innerHTML = 0;
        secondOnes.innerHTML = counter;
        counter += 1;

        if ( counter > 8){
            secondTens.style.color = '#f67280';
            secondOnes.style.color = '#f67280';
            msHundreds.style.color = '#f67280';
            msTens.style.color = '#f67280';
        }
        
    
        if(counter >= 11){
            secondTens.innerHTML = 1;
            secondOnes.innerHTML = 0;
            button.removeAttribute("disabled");

            clearInterval(timer);
        }
    }, 1000);
    
    
    let counterMs = 0;
    timerMs = setInterval(() => {
        counterMs += 1;
    
        if (counterMs >= 10){
            counterMs = 0;
            if (counter >= 11 ){
                clearInterval(timerMs);
            }
        }
    
        msHundreds.innerHTML = 0;
        msTens.innerHTML = counterMs;
    
    }, 100);

}


function resetTimer(){
    clearInterval(timer);
    clearInterval(timerMs);

    secondTens.style.color = 'black';
    secondOnes.style.color = 'black';
    msHundreds.style.color = 'black';
    msTens.style.color = 'black';

    button.removeAttribute("disabled");

    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;

}