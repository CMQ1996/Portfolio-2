const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerDisplay = document.getElementById('timer'); // Timer display
const finalScoreContainer = document.getElementById('final-score'); // Final score container
const finalScoreText = document.getElementById('final-score-text'); // Final score text element

let shuffledQuestions, currentQuestionIndex;
let timeLeft = 30; // 30 seconds for each question
let timerInterval; // Variable to hold the setInterval function
let score = 0; // Initialize score to 0
// Hides instruction message when the game starts
const instructions = document.getElementById('instructions');
const questionContainer = document.getElementById('question-container');

startButton.addEventListener('click', () => {
  instructions.classList.add('hide');
  questionContainer.classList.remove('hide');
});

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0; // Reset score at the start of the game
  questionContainerElement.classList.remove('hide');
  finalScoreContainer.classList.add('hide'); // Hide final score container at the start
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  startTimer(); // Start the timer when setting the next question
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  // This for loop iterates through the answers
  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  }
}



function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++; // Increment score for correct answer
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  clearInterval(timerInterval); // Clear the timer interval when an answer is selected
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    showFinalScore(); // Show the final score when the quiz is finished
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function startTimer() {
  timeLeft = 30; // Reset timer to 30 seconds for each question
  timerDisplay.innerText = `Time: ${timeLeft}s`; // Display initial time

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer
      nextButton.classList.remove('hide'); // Show the "Next" button after time is up
    }
  }, 1000); // 1000 ms = 1 second
}

// This function shows the final score at the end of the quiz, as well as the scoring.
function showFinalScore() {
  finalScoreContainer.classList.remove('hide'); // Removes hide so final score is shown
  finalScoreText.innerText = `Your final score is: ${score} out of ${shuffledQuestions.length}`; // Display score

  // This creates an element using the document. method
  const message = document.createElement('p');
  message.style.fontWeight = 'bold';

  // Display different messages based on the score
  if (score > 5) {
    console.log('if')
    message.innerText = "You are a history buff!";
    message.style.color = 'green';
  } else {
    console.log('else')
    message.innerText = "You need to go back to school!";
    message.style.color = 'red';
  }

  // Append the message to the final score container
  finalScoreContainer.appendChild(message);
}


const questions = [
  {
    question: 'What country signed the Magna Carta in 1215?',
    answers: [
      { text: 'Greece', correct: false },
      { text: 'Turkey', correct: false },
      { text: 'Italy', correct: false },
      { text: 'England', correct: true }
    ]
  },
  {
    question: 'Napoleon Boneapart was from which country?',
    answers: [
      { text: 'France', correct: true },
      { text: 'UK', correct: false },
      { text: 'Germany', correct: false },
      { text: 'Spain', correct: false }
    ]
  },
  {
    question: 'What Year did the US declare independence?',
    answers: [
      { text: '1750', correct: false },
      { text: '1776', correct: true },
      { text: '1308', correct: false },
      { text: '1806', correct: false }
    ]
  },
  {
    question: 'WW2 started in what year?',
    answers: [
      { text: '1936', correct: false },
      { text: '1939', correct: true },
      { text: '1932', correct: false },
      { text: '1949', correct: false }
    ]
  },
  {
    question: 'Julius Caesar ruled which Empire?',
    answers: [
      { text: 'The Byzantine Empire', correct: false },
      { text: 'The Ottoman Empire', correct: false },
      { text: 'The Roman Empire', correct: true },
      { text: 'The Greek Empire', correct: false }
    ]
  },
  {
    question: 'Which country was the first to grant women the right to vote?',
    answers: [
      { text: 'UK', correct: false },
      { text: 'US', correct: false },
      { text: 'Saudi Arabia', correct: false },
      { text: 'New Zealand', correct: true }
    ]
  },
  {
    question: 'In what year did the titanic sink?',
    answers: [
      { text: '1917', correct: false},
      { text: '1909', correct: false},
      { text: '1922', correct: false},
      {text: '1912', correct: true}
    ]
  },
  {
    question: 'When did the Soviet Union dissolve?',
    answers: [
      { text: '1916', correct: false},
      { text: '2008', correct: false},
      { text: '1991', correct: true},
      {text: '2016', correct: false}
    ]
  },
  {
    question: 'When did the Soviet Union dissolve?',
    answers: [
      { text: '1916', correct: false},
      { text: '2008', correct: false},
      { text: '1991', correct: true},
      {text: '2016', correct: false}
    ]
  },
  {
    question: 'in what year did the act of Union between Ireland and Great Britain take place?',
    answers: [
      {text: '1922', correct: false},
      {text: '1798', correct: false},
      { text: '1801', correct: true},
      { text: '1603', correct: false}

    ]
  }
];
