
console.log(localStorage.getItem("score"));
var score = localStorage.getItem("score");

$(".finalscoreh1").append(score + "/100");

function saveScore() {

    var personname = document.querySelector(".personname").value;
    localStorage.setItem("username", personname);
    console.log(personname);
    localStorage.setItem("highscore1", score);
    console.log(localStorage.getItem("highscore1"));
    if (score > 99) {
        score = 99;
    }

    var oldscore;
    var i;
    var k;
  
    for (i = 0; i < 5; i++) {
        oldscore = localStorage.getItem("scoreposition" + i);
        if (oldscore <= score) {
            k = i;
            i = 5;
        }
    }

    if (score == 99) {
        score = 100;
    }
    if (k == 0) {
        localStorage.setItem("scoreposition4", localStorage.getItem("scoreposition3"));
        localStorage.setItem("scorepositionname4", localStorage.getItem("scorepositionname3"));
        localStorage.setItem("scoreposition3", localStorage.getItem("scoreposition2"));
        localStorage.setItem("scorepositionname3", localStorage.getItem("scorepositionname2"));
        localStorage.setItem("scoreposition2", localStorage.getItem("scoreposition1"));
        localStorage.setItem("scorepositionname2", localStorage.getItem("scorepositionname1"));
        localStorage.setItem("scoreposition1", localStorage.getItem("scoreposition0"));
        localStorage.setItem("scorepositionname1", localStorage.getItem("scorepositionname0"));
        localStorage.setItem("scoreposition0", score);
        localStorage.setItem("scorepositionname0", personname);
    } else {
        if (k == 1) {
            localStorage.setItem("scoreposition4", localStorage.getItem("scoreposition3"));
            localStorage.setItem("scorepositionname4", localStorage.getItem("scorepositionname3"));
            localStorage.setItem("scoreposition3", localStorage.getItem("scoreposition2"));
            localStorage.setItem("scorepositionname3", localStorage.getItem("scorepositionname2"));
            localStorage.setItem("scoreposition2", localStorage.getItem("scoreposition1"));
            localStorage.setItem("scorepositionname2", localStorage.getItem("scorepositionname1"));
            localStorage.setItem("scoreposition1", score);
            localStorage.setItem("scorepositionname1", personname);
        } else {
            if (k == 2) {
                localStorage.setItem("scoreposition4", localStorage.getItem("scoreposition3"));
                localStorage.setItem("scorepositionname4", localStorage.getItem("scorepositionname3"));
                localStorage.setItem("scoreposition3", localStorage.getItem("scoreposition2"));
                localStorage.setItem("scorepositionname3", localStorage.getItem("scorepositionname2"));
                localStorage.setItem("scoreposition2", score);
                localStorage.setItem("scorepositionname2", personname);
            } else {
                if (k == 3) {
                    localStorage.setItem("scoreposition4", localStorage.getItem("scoreposition3"));
                    localStorage.setItem("scorepositionname4", localStorage.getItem("scorepositionname3"));
                    localStorage.setItem("scoreposition3", score);
                    localStorage.setItem("scorepositionname3", personname);
                } else {

                } if (k == 4) {
                    localStorage.setItem("scoreposition4", score);
                    localStorage.setItem("scorepositionname4", personname);
                }
            }
        }
    }
}
