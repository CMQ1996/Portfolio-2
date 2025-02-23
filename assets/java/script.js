const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerDisplay = document.getElementById('timer');
const finalScoreContainer = document.getElementById('final-score');
const finalScoreText = document.getElementById('final-score-text');

let shuffledQuestions, currentQuestionIndex;
let timeLeft = 30;
let timerInterval;
let score = 0;

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
  try {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    finalScoreContainer.classList.add('hide');
    setNextQuestion();
  } catch (error) {
    console.error("Error starting the game:", error);
  }
}

function setNextQuestion() {
  try {
    resetState();
    startTimer();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } catch (error) {
    console.error("Error setting the next question:", error);
  }
}

function showQuestion(question) {
  try {
    questionElement.innerText = question.question;
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
  } catch (error) {
    console.error("Error displaying the question:", error);
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
  try {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) score++;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    clearInterval(timerInterval);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      showFinalScore();
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  } catch (error) {
    console.error("Error selecting answer:", error);
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
  try {
    timeLeft = 30;
    timerDisplay.innerText = `Time: ${timeLeft}s`;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = `Time: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        nextButton.classList.remove('hide');
      }
    }, 1000);
  } catch (error) {
    console.error("Error with the timer:", error);
  }
}

function showFinalScore() {
  try {
    finalScoreContainer.classList.remove('hide');
    finalScoreText.innerText = `Your final score is: ${score} out of ${shuffledQuestions.length}`;
    const message = document.createElement('p');
    message.style.fontWeight = 'bold';
    if (score > 5) {
      message.innerText = "You are a history buff!";
      message.style.color = 'green';
    } else {
      message.innerText = "You need to go back to school!";
      message.style.color = 'red';
    }
    finalScoreContainer.appendChild(message);
  } catch (error) {
    console.error("Error showing final score:", error);
  }
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
    question: 'Napoleon Bonaparte was from which country?',
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
    question: 'In what year did the Titanic sink?',
    answers: [
      { text: '1917', correct: false },
      { text: '1909', correct: false },
      { text: '1922', correct: false },
      { text: '1912', correct: true }
    ]
  },
  {
    question: 'When did the Soviet Union dissolve?',
    answers: [
      { text: '1916', correct: false },
      { text: '2008', correct: false },
      { text: '1991', correct: true },
      { text: '2016', correct: false }
    ]
  },
  {
    question: 'In what year did the Act of Union between Ireland and Great Britain take place?',
    answers: [
      { text: '1922', correct: false },
      { text: '1798', correct: false },
      { text: '1801', correct: true },
      { text: '1603', correct: false }
    ]
  }
];
