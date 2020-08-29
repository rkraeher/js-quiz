# js-quiz
A timed quiz testing a new student's knowledge of JavaScript fundamentals

// # Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// #Pseudo Code
// I want a welcome page that describes the quiz
// The welcome page has a start quiz button that begins the quiz
// Pressing the start button also begins a timer that counts down
// There are multiple choice and true/false questions with multiple buttons for the user to press to answer
// There is a score counter that keeps track of every correct answer
// If a user answers a question incorrectly, time is subtracted from the timer as a penalty
// Either when the user answers all questions OR the timer reaches 0, the game ends
// At the end of the game, a page is displayed with the final score and an input for user initials
// The user intials and score are saved in local storage and displayed as the last saved input (View High Scores)
// There is a button to restart the quiz.

https://www.softwaretestinghelp.com/css-interview-questions/
https://www.javatpoint.com/html-interview-questions
https://www.guru99.com/javascript-interview-questions-answers.html


// Backup Code

function quiz (){      //TODO Fill in the function parameters with a placeholder, so that where "voidElement" is now can be interchangeable. 
    questionText.textContent = voidElement.question;
    lead.textContent = "";
    lead2.textContent = "";
    startButton.parentNode.removeChild(startButton);
    correctButton();
    
};

// Correct and Wrong Answer Button Generators

function correctButton () {    
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = voidElement.correct;
    answerBtn.setAttribute("class", "btn btn-info btn-lg m-2");
    answers.appendChild(answerBtn);
};

function buttonGenerator (questionObject){          // Work in Progress. For testing purposes this function is called in the quizProgress function. 
    questionText.textContent = questionObject.question;
    lead.textContent = "";
    lead2.textContent = "";
    
    //TODO: Remove/replace the previous buttons. 
    // #previousButton.parentNode.removeChild(#previousButtons);
    
    // correctButton(questionObject);
    // wrongButtons(questionObject);
};

/////
Dynamically generate paragraphs: 
      // var para = document.createElement("p");                       
        // var t = document.createTextNode("Correct!");     
        // var hr = document.createElement("hr");
        // para.style.color = "grey";
        // answers.appendChild(hr); 
        // para.appendChild(t);                                         
        // answers.appendChild(para); 

         // var para = document.createElement("p");                       
        // var t = document.createTextNode("Wrong!");     
        // var hr = document.createElement("hr");
        // para.style.color = "red";
        // answers.appendChild(hr); 
        // para.appendChild(t);                                         
        // answers.appendChild(para);




// Tutoring

// Solution

// arranged the objectarray as an array, isntead of as variables. 

// They used css display: none (hide) for questions area. 
var currentQuestionIndex = 0;

get Question function
var currentQuestion = questions[currentQuestionIndex];

//This is all the dynamically generating the questions and buttons
var titleEl = document.get element by id("questionObject property title")

when you use () that calls it immediately or when the page runs; when you write it without the parenthese it only runs with the click event

//

On question click function
if (this.value !== questions[currentquestionindex].answer);

move to next question; 
currentQuestionIndex++;

check if (currentQuestionIndex === questions.length) (questions here is the name of the questionObject array)
    quizEnd (game over)
    else, getNewQuestion



    LOOP
    for(let i = 0; i < allObjects.length; i++){ 
};