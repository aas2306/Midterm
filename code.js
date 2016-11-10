// quiz question 1

function checkAnswer1() {
  var userAnswerEl1 = document.querySelector('[name="q1"]:checked');
  var correctAnswerEl1 = document.querySelector('[id="correctAnswer1"]');
  var userAnswer1 = userAnswerEl1.value;
  var correctAnswer1 = correctAnswerEl1.value;

  if (userAnswer1 == correctAnswer1) {
    correctAnswerEl1.parentNode.classList.add('correct');
    alert("You got the right answer!");
  } else {
    userAnswerEl1.parentNode.classList.add('incorrect');
    correctAnswerEl1.parentNode.classList.add('correct');
    alert("Sorry, wrong answer!");
  }
}

document.getElementById('submit1').addEventListener('click', checkAnswer1);


// quiz question 2:

function checkAnswer2() {
  var userAnswerEl2 = document.querySelector('[name="q2"]:checked');
  var correctAnswerEl2 = document.querySelector('[id="correctAnswer2"]');
  var userAnswer2 = userAnswerEl2.value;
  var correctAnswer2 = correctAnswerEl2.value;

  if (userAnswer2 == correctAnswer2) {
    correctAnswerEl2.parentNode.classList.add('correct');
    alert("You got the right answer!");
  } else {
    userAnswerEl2.parentNode.classList.add('incorrect');
    correctAnswerEl2.parentNode.classList.add('correct');
    alert("Sorry, wrong answer!");
  }
}

document.getElementById('submit2').addEventListener('click', checkAnswer2);



// This code gives the user immediate feedback on whether they answered the multiple choice questions correctly
// It does this in the form of an alert as well as a color change for the correct/incorrect responses
// This javascript code can be improved by making one function that is "universal" for different questions instead of having a separate function for each question
