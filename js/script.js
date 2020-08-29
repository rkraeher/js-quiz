// Global Variable Declarations
var score = 0;
var timer = 60;
var interval;
var points;

var para = document.getElementById("hideCorrect");
var para2 = document.getElementById("hideWrong");

var timeDisplay = document.querySelector("#seconds");
var questionText = document.querySelector("h1");
var answers = document.querySelector(".jumbotron");
var lead = document.querySelector(".lead");
var lead2 = document.querySelector(".lead2");

var userInitials = document.querySelector("#user-initials");
var savedScore = document.querySelector("#last-score");
var scoreDiv = document.querySelector("#high-score");
scoreDiv.style.display = "none";

var startButton = document.querySelector("#start");
var answerBtn;
var wrongBtn1;
var wrongBtn2;
var wrongBtn3;

// HTML Question Objects
var voidElement = {
    question: "Which of the following HTML elements is not a void element and needs a closing tag?",
    correct: "Anchor &lta&gt",
    wrong: ["Img &ltimg&gt", "Break &ltbr&gt", "Input &ltinput&gt"]
};

var headingTypes = {
    question: "How many types of HTML headings are there?",
    correct: 6,
    wrong: [3, 5, 7]
};

// CSS Question Objects
var positionStates = {
    question: "Which of the following is not a CSS position state?",
    correct: "flex",
    wrong: ["relative", "absolute", "fixed"]
};

var inheritanceConcept = {
    question: "Inheritance is the concept in which the child class will inherent the _____ of its parent class.",
    correct: "Properties",
    wrong: ["Values", "Class Name", "Specificity"]
};

// JavaScript Question Objects
var jsDeveloper = {
    question: "Which company developed Javascript?",
    correct: "Netscape",
    wrong: ["Microsoft", "Macintosh", "IBM"]
};

var thisKeyword = {
    question: "'This' keyword refers to the _____ from where it was called.",
    correct: "Object",
    wrong: ["Parent Element", "Function", "File"]
};

// This function automates the selection of question content for the quiz. 
var allObjects = [voidElement, headingTypes, positionStates, inheritanceConcept, jsDeveloper, thisKeyword]; 
var currentQuestionIndex = 0;
var currentQuestion = allObjects[currentQuestionIndex];

var getQuestion = function () {
    currentQuestionIndex++;
    currentQuestion = allObjects[currentQuestionIndex];
    if (currentQuestionIndex === allObjects.length) {
        gameOver();
    }
};
                                        
//  Start Quiz                                                    
startButton.addEventListener("click", function(){        
    currentQuestion = allObjects[currentQuestionIndex];                               
    questionText.textContent = currentQuestion.question;
    lead.textContent = "";
    lead2.textContent = "";
    startButton.parentNode.removeChild(startButton);
    correctButton(currentQuestion);     
    wrongButtons(currentQuestion);
    startTimer();
});


// Correct and Wrong Answer Button Generators
function correctButton (questionObject) {  
    var answerBtn = document.createElement("button");
    var breakR = document.createElement("br");
    answerBtn.innerHTML = questionObject.correct;
    answerBtn.setAttribute("class", "btn btn-info btn-lg m-2");
    answerBtn.setAttribute("id", "correct");
    answers.appendChild(answerBtn);
    answers.appendChild(breakR);
};

function wrongButtons (questionObject) {   
    var wrongBtn1 = document.createElement("button");
    var wrongBtn2 = document.createElement("button");
    var wrongBtn3 = document.createElement("button");
    var breakR = document.createElement("br");
    var breakR2 = document.createElement("br");
    wrongBtn1.innerHTML = questionObject.wrong[0];
    wrongBtn2.innerHTML = questionObject.wrong[1];
    wrongBtn3.innerHTML = questionObject.wrong[2];
    wrongBtn1.setAttribute("class", "btn btn-info btn-lg m-2");
    wrongBtn1.setAttribute("id", "wrong1");
    wrongBtn2.setAttribute("class", "btn btn-info btn-lg m-2");
    wrongBtn2.setAttribute("id", "wrong2");
    wrongBtn3.setAttribute("class", "btn btn-info btn-lg m-2");
    wrongBtn3.setAttribute("id", "wrong3");
    answers.appendChild(wrongBtn1);
    answers.appendChild(breakR);
    answers.appendChild(wrongBtn2);
    answers.appendChild(breakR2);
    answers.appendChild(wrongBtn3);
};


// Change Button and Question Text Conent for a newQuestion. 
function newQuestion (){
                                       
    var newWrong1 = document.querySelector("#wrong1");
    var newWrong2 = document.querySelector("#wrong2");
    var newWrong3 = document.querySelector("#wrong3");
    var newAnswer = document.querySelector("#correct");

    questionText.textContent = currentQuestion.question;  
    lead.textContent = "";
    lead2.textContent = "";

    newWrong1.innerHTML = currentQuestion.wrong[0];
    newAnswer.innerHTML = currentQuestion.correct;
    newWrong2.innerHTML = currentQuestion.wrong[1];
    newWrong3.innerHTML = currentQuestion.wrong[2];

    newWrong1.setAttribute("class", "btn btn-info btn-lg m-2");
    newWrong2.setAttribute("class", "btn btn-info btn-lg m-2");
    newWrong3.setAttribute("class", "btn btn-info btn-lg m-2");

};

// This function controls the flow of the quiz and checks user input.      
var quizProgress = function (event) {
    var element = event.target;                                                                 
    para.style.display = "none";
    para2.style.display = "none";
    if (element.matches("button") === true && element.id === "correct") {
        para.style.display = "block";
        setTimeout(() => {newQuestion(currentQuestion); }, 1000);                                        
        score = score + 10;
        getQuestion();
    } 
    else if (element.matches("button") === true && element.id === "wrong1" || element.id === "wrong2" || element.id === "wrong3") {
        timer = timer - 10;
        renderTime();
        element.setAttribute("class", "btn btn-danger btn-lg m-2");
        para2.style.display = "block";
        setTimeout(() => {  newQuestion(currentQuestion);  }, 1000);                                 
        getQuestion();
    }
};
answers.addEventListener("click", quizProgress);


// Timer Functions
function startTimer() {
        interval = setInterval(function() {
          timer--;
          renderTime();
        }, 1000);
    }; 

// Display time and checks to see if time is up.
function renderTime() {
    timeDisplay.textContent = "Time Remaining: " + timer;
    if (timer <= 0) { 
        timer = 0;
      stopTimer();
    }
  };

  function stopTimer(){
      clearInterval(interval);
      gameOver(); 
  }

  // Game Over
function gameOver(){
    questionText.textContent = "Game Over!";
    lead.textContent = "Your Score: " + score;
    
    newWrong1 = document.querySelector("#wrong1");
    newWrong2 = document.querySelector("#wrong2");
    newWrong3 = document.querySelector("#wrong3");
    newAnswer = document.querySelector("#correct");

    newWrong1.parentNode.removeChild(newWrong1);
    newWrong2.parentNode.removeChild(newWrong2);
    newWrong3.parentNode.removeChild(newWrong3);
    newAnswer.parentNode.removeChild(newAnswer);

    answers = document.querySelector(".jumbotron");
    
    var initials = document.createElement("p");
    var highScore = document.createElement("input");
    var submitScore = document.createElement("button");
    breakR = document.createElement("br");
    
    initials.textContent = "Enter your name to save your score.";
    submitScore.setAttribute("class", "btn btn-info btn-lg m-2");
    submitScore.innerHTML = "Submit";
    answers.appendChild(initials);
    answers.appendChild(highScore);
    answers.appendChild(breakR);
    answers.appendChild(submitScore);

    // Clears Local Storage High Scores
    var clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear HighScores";
    clearButton.setAttribute("class", "btn btn-info btn-lg m-2");
    scoreDiv.appendChild(clearButton);

    // Reloads the page to restart the game
    var restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Restart";
    restartBtn.setAttribute("class", "btn btn-info btn-lg m-2");
    scoreDiv.appendChild(restartBtn);

// Score Functions
submitScore.addEventListener("click", saveMyScore);
    
    // Saves score and username to local storage
function saveMyScore (){

    var user = highScore.value.trim();
    console.log(user);

    var storedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var recentScore = {
        player: user,
        score: score
    };

    storedScores.push(recentScore);
    window.localStorage.setItem("highscores", JSON.stringify(storedScores));

    storedScores.forEach(function (recentScore) {
        var liTag = document.createElement("li");
        liTag.textContent = recentScore.player + " : " + recentScore.score;
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
        scoreDiv.style.display = "block";

      });
    };

    // Clears high scores from local storage and reloads the quiz. 
function clear() {
        window.localStorage.removeItem("highscores");
        window.location.reload();
      };
    
clearButton.addEventListener("click", clear);
restartBtn.addEventListener("click", function(){
    location.reload();
})
 
}; 
