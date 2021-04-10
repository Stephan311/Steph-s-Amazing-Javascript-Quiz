console.log(localStorage.getItem("highscore1"))

    var score1 = localStorage.getItem("highscore1");
    var name1 = localStorage.getItem("username");
    $(".scoreboard").append(name1 + " : " + score1);


