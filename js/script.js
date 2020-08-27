var score = 0;
var timer = 60;
var interval;
var points;

var timeDisplay = document.querySelector("#seconds");
var questionText = document.querySelector("h1");
var answers = document.querySelector(".jumbotron");
var lead = document.querySelector(".lead");
var lead2 = document.querySelector(".lead2");

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

// Question Object Array

var allObjects = [voidElement, headingTypes, positionStates, inheritanceConcept, jsDeveloper, thisKeyword]; 
allObjects.forEach(function (item, index) {
  console.log(item, index);
  // Do something; select one (randomly?) and pass it through the button generator.
});


//  Start Button and First Question         //TODO: Eventually just have this click event trigger the button generator. 
startButton.addEventListener("click", function(questionObject){        
    questionObject = voidElement;       // Testing arguments to pass through my button generators
    questionText.textContent = questionObject.question;
    lead.textContent = "";
    lead2.textContent = "";
    startButton.parentNode.removeChild(startButton);
    correctButton(questionObject);     
    wrongButtons(questionObject);
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
    wrongBtn1.setAttribute("id", "wrong");
    wrongBtn2.setAttribute("class", "btn btn-info btn-lg m-2");
    wrongBtn2.setAttribute("id", "wrong");
    wrongBtn3.setAttribute("class", "btn btn-info btn-lg m-2");
    wrongBtn3.setAttribute("id", "wrong");
    answers.appendChild(wrongBtn1);
    answers.appendChild(breakR);
    answers.appendChild(wrongBtn2);
    answers.appendChild(breakR2);
    answers.appendChild(wrongBtn3);
};

function buttonGenerator (questionObject){          // Work in Progress. For testing purposes this function is called in the quizProgress function. 
    questionText.textContent = questionObject.question;
    lead.textContent = "";
    lead2.textContent = "";
    
    //TODO: Remove/replace the previous buttons. 
    // #previousButton.parentNode.removeChild(#previousButtons);
    
    correctButton(questionObject);
    wrongButtons(questionObject);
};



// Progressing Through the Quiz: This function controls what happens when user clicks correct or wrong buttons.    

var quizProgress = function (event) {
    var element = event.target;
    if (element.matches("button") === true && element.id === "correct") {
        console.log("You clicked the correct button!");
        buttonGenerator(headingTypes);                                           //Test argument. 
        //Add points to score variable.
        score = score + 10;
        console.log(score);
        //TODO: Move to the next question.
    } 
    else if (element.matches("button") === true && element.id === "wrong") {
        console.log("You clicked the wrong button!");
        timer = timer + 10;
        renderTime();
        element.setAttribute("class", "btn btn-danger btn-lg m-2");
        //TODO: Display a modal window informing the user that they are wrong. 
        //TODO: Move to the next question. 
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
    if (timer === 0) { 
      stopTimer();
    }
  };

  function stopTimer(){
      clearInterval(interval);
      //Call the function that brings them to the high score page. 
  }

  // Game Over
function gameOver(){
    questionText.textContent = "Game Over!";
    lead.textContent = "Enter your initials to save your score.";
    lead2.textContent = "Score :" + score;
    // Remove all answer buttons
    // Input for initials
    // Locally store the score and use Submit button.
    // Another button to show the last saved score. 
}; 
