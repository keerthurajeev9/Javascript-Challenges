window.onload = function () {
    var ones = 00;
    var tens = 00;
    var oneelement = document.getElementById('ones');
    var tenselement = document.getElementById('tens');
    var start = document.getElementById('start');
    var reset = document.getElementById('reset');
    var stop = document.getElementById('stop');
    var interval;
    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTiming, 10);
    }
    stop.onclick = function () {
        clearInterval(interval);
    }
    reset.onclick = function () {
        clearInterval(interval);
        tens = "00";
        ones = "00";
        oneelement.innerHTML = ones;
        tenselement.innerHTML = tens;
    }

    function startTiming() {
        tens++;
        if (tens < 9) {
            tenselement.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            tenselement.innerHTML = tens;
        }
        if (tens > 99) {
            ones++;
            oneelement.innerHTML = "0" + ones;
            tens = 0;
            tenselement.innerHTML = "0" + 0;
        }
        if (ones > 9) {
            console.log(ones);
            oneelement.innerHTML = ones;

        }
    }
}