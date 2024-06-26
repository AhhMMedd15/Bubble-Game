
var timer = 60;
var score = 0;
var rn;

function bubble() {
    var clutter = "";
    var math;
    for (i = 0; i <= 101; i++) {
        var math = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${math}</div>`;
    }

    document.querySelector(".screenbubble").innerHTML = clutter;
}
function timertab() {
    var timeout = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerauto").textContent = timer;
        }
        else {
            clearInterval(timeout)
            document.querySelector(".screenbubble").innerHTML = `<h1>GAME OVER: <br> Your Score is ${score}</h1>`;
        }
    }, 1000)
}
function gethit() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = rn;
}
function scoreincrease() {
    var sc = score += 10;

    document.querySelector("#score").textContent = sc;
}
function bubblechecktoincreasescore() {


    var scr = document.querySelector(".screenbubble");
    scr.addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === rn) {
            scoreincrease();
            gethit();
            bubble();
        }
    })

}

bubble();
timertab();
gethit();
scoreincrease();
bubblechecktoincreasescore();
