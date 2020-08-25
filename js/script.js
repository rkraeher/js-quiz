var score = 0;
var timer = 0;
var totalTime = 60; 
var interval;

var timeDisplay = document.querySelector("#seconds");
var startButton = document.querySelector("#start");
var questionText = document.querySelector("h1");
var answers = document.querySelector(".jumbotron");
var lead = document.querySelector(".lead");
var lead2 = document.querySelector(".lead2");

// HTML Question Objects
var voidElement = {
    question: "Which of the following HTML elements is not a void element and needs a closing tag?",
    correct: "Anchor ",
    wrong: ["Img", "Break", "Input"]
};

var headings = {
    question: "How many types of HTML headings are there?",
    correct: 6,
    wrong: [3, 5, 7]
};

// CSS Question Objects
var positionStates = {
    question: "Which of the following is not a CSS position state?",
    correct: "flex",
    wrong: ["relative", "absolute", "fixed"]
}

startButton.addEventListener("click", quiz);       

function quiz (){      //TODO Fill in the function parameters with a placeholder, so that where "voidElement" is now can be interchangeable. 
    questionText.textContent = voidElement.question;
    lead.textContent = "";
    lead2.textContent = "";
    startButton.parentNode.removeChild(startButton);
    correctButton();
    
};

function correctButton () {       // If I set the parameters to something, that something can also go where voidElement is to make this more reusable. 
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = voidElement.correct;
    answerBtn.setAttribute("class", "btn btn-info btn-lg m-2");
    answers.appendChild(answerBtn);
};






// Timer 
function startTimer() {
    // setTime();      // This function controls how the time starts and when/if time gets added to it
        interval = setInterval(function() {
          timer--;
          renderTime();
        }, 1000);
    }; 

  // This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...;
    timeDisplay.textContent = getFormattedSeconds();
  
   // ..and then checks to see if the time has run out
    if (timer === 0) {
        // Game ends. Take them to the high score page. 
  
      stopTimer();
    }
  };

//   function stopTimer(){

//   }

//   function getFormattedSeconds(){

//   }

//   function setTime(){

//   }

// function correctAnswer {    // Code should show that they got it correct, add score points, and move to the next question. 

// }

// function wrongAnswer {      // Code should subtract time from the clock and move to the next question

// }