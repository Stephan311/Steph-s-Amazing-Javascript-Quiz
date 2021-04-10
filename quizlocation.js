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
    }

}

//stores answers into local storage for Q2
function question2(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
    }

}

//stores answers into local storage for Q3
function question3(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
    }
}

//stores answers into local storage for Q4
function question4(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
    }
}

//stores answers into local storage for Q5
function question5(answer) {
    console.log(answer);
    if (parseInt(answer) === 20) {
        (finalscore += 20);
        console.log(finalscore);
        localStorage.setItem("score", finalscore);
    }
}

localStorage.setItem("score", finalscore);
