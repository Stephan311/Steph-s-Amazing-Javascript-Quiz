console.log(localStorage.getItem("highscore1"))

var score1 = localStorage.getItem("highscore1");
var name1 = localStorage.getItem("username");
var scorenumbers = localStorage.getItem("scoreposition")

for (i = 0; i < 5; i++) {
    //   debugger;
    name1 = localStorage.getItem("scorepositionname" + i);
    score1 = localStorage.getItem("scoreposition" + i);
    $(".scoreboard").append(localStorage.getItem("scorepositionname" + i) + " : " + localStorage.getItem("scoreposition" + i) + "<br>");
}


