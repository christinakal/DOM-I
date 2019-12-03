let endTime = new Date("Dec 2, 2019 12:00:00").getTime();
console.log(endTime);

let timer = setInterval(function() {

    let currentTime = new Date().getTime();
    let t = endTime - currentTime;

    if (t >= 0) {
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        console.log(secs);

        document.getElementById("secondTens").innerHTML = secs;
    }

}, 1000);