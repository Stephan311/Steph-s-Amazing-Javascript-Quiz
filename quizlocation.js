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
    }

}