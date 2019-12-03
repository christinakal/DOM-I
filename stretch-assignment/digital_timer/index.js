var timeleft = 0;
var timer = setInterval(function(){
  let secondTens = document.getElementById('secondTens').innerHTML = 0;
  let secondOnes = document.getElementById('secondOnes').innerHTML = timeleft;
  timeleft += 1;

  if(timeleft > 10){
    clearInterval(timer);
  }
  

}, 1000);