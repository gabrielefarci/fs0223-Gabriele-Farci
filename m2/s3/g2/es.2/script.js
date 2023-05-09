let element = document.getElementById('counter');
let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let count = 0;

setInterval(function() {

    count += 1;
    element.innerHTML = count;

    sessionStorage.setItem('timer', element)

}, 1000);