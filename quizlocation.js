console.log("hi")


//variables for correct and incorrect questions
// var correct = 20;
var wrong = 0;

var finalscore = 0;



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

localStorage.setItem("score", finalscore);
