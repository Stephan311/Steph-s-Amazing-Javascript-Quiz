console.log(localStorage.getItem("score"));

var score = localStorage.getItem("score");

$(".finalscoreh1").append(score + "/100");

function saveScore() {
    localStorage.setItem("highscore1", score);
    console.log(localStorage.getItem("highscore1"))
}