console.log(localStorage.getItem("score"));

var score = localStorage.getItem("score");

$(".finalscoreh1").append(score + "/100");

function saveScore() {
    var personname = document.querySelector(".personname").value;
    localStorage.setItem("username", personname);
    console.log(personname);
    localStorage.setItem("highscore1", score);
    console.log(localStorage.getItem("highscore1"))
}