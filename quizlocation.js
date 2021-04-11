console.log("hi")

//variables for correct and incorrect questions
// var correct = 20;
var wrong = 0;

var finalscore = 0;
//function that counts down time

var display = 0;

//20 seconds deducted for a wrong question;


function quizTimer(duration, display) {
    var quizTimer1 = duration, seconds;
    setInterval(function () { 
        seconds = parseInt(quizTimer1 % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time Left: " + seconds;

        if (--quizTimer1 < 0) {
           document.location.href = "file:///C:/Users/Stephan/Pictures/Course/Steph-s-Amazing-Javascript-Quiz/finalscore.html";
        }
    }, 1000)
}

window.onload = function() {
    var oneminute = 60,
    display = document.querySelector("#seconds");
    quizTimer(oneminute, display);
};



//function to store correct answer score to local storage

function question1(answer) {
    
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);  
        localStorage.setItem("score", finalscore);
        $(".question1").hide();
        $(".question2").addClass("show");
    } else {
        debugger
        (display -= 20);
        console.log(display);
        $(".question1").hide();
        $(".question2").addClass("show");
    }

}

//stores answers into local storage for Q2
function question2(answer) {
    // debugger;
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
        $(".question2").hide();
        $(".question3").addClass("show");
    } else {
        $(".question2").hide();
        $(".question3").addClass("show");
    }

}

//stores answers into local storage for Q3
function question3(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
        $(".question3").hide();
        $(".question4").addClass("show");
    } else {
        $(".question3").hide();
        $(".question4").addClass("show");
    }
}

//stores answers into local storage for Q4
function question4(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
        $(".question4").hide();
        $(".question5").addClass("show");
    } else {
        $(".question4").hide();
        $(".question5").addClass("show");
    }
}

//stores answers into local storage for Q5
function question5(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
        document.location.href = "file:///C:/Users/Stephan/Pictures/Course/Steph-s-Amazing-Javascript-Quiz/finalscore.html"
    } else {
        document.location.href = "file:///C:/Users/Stephan/Pictures/Course/Steph-s-Amazing-Javascript-Quiz/finalscore.html"
       
    }
}

