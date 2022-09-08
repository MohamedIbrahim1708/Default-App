var Seconds = 00,
    Tens = 00,
    OutputSeconds = document.getElementById('second'),
    OutputTens = document.getElementById('tens'),
    ButtonStart = document.getElementById('btn-start'),
    ButtonStop = document.getElementById('btn-stop'),
    ButtonReset = document.getElementById('btn-reset'),
    Interval;

ButtonStart.addEventListener('click', ()=> {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

ButtonStop.addEventListener('click', ()=>{
    clearInterval(Interval);
});

ButtonReset.addEventListener('click', ()=>{
    clearInterval(Interval);
    Tens = "00";
    Seconds = "00"
    OutputSeconds.innerHTML = Seconds;
    OutputTens.innerHTML = Tens;
});

function startTime () {
    Tens++;
    if(Tens <= 9) {
        OutputTens.innerHTML = "0" + Tens;
    }

    if(Tens > 9) {
        OutputTens.innerHTML = Tens;
    }

    if(Tens > 99) {
        Seconds++;
        OutputSeconds.innerHTML = "0" + Seconds;
        Tens = "0";
        OutputTens.innerHTML = "0" + Tens;
    }

    if(Seconds > 9) {
        OutputSeconds.innerHTML = Seconds;
    }
}
