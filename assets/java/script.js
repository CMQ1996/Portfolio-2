// Get DOM elements for buttons, question container, timer, and score
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
let acceptingAnswers = false;

const instructions = document.getElementById('instructions');
const questionContainer = document.getElementById('question-container');

// Start button event listener to begin the game
startButton.addEventListener('click', () => {
  instructions.classList.add('hide');
  questionContainer.classList.remove('hide');
  startGame();
});

// Next button event listener to load the next question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// Function to start the quiz game
function startGame() {
  try {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    finalScoreContainer.classList.add('hide');
    setNextQuestion();
  } catch (error) {
    console.error("Error starting the game:", error);
  }
}

// Load the next question or end the game if no questions remain
function setNextQuestion() {
  try {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
      startTimer();
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
      showFinalScore();
    }
  } catch (error) {
    console.error("Error setting the next question:", error);
  }
}

// Display the current question and possible answers
function showQuestion(question) {
  try {
    questionElement.innerText = question.question;
    acceptingAnswers = true;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn', 'historical-btn'); // Style the answer buttons
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  } catch (error) {
    console.error("Error displaying the question:", error);
  }
}

// Reset the state before displaying a new question
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Handle answer selection and update the score
function selectAnswer(e) {
  try {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
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

// Apply correct/wrong class based on the answer
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

// Remove correct/wrong classes
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// Start countdown timer for each question
function startTimer() {
  try {
    timeLeft = 30;
    timerDisplay.innerText = `Time: ${timeLeft}s`;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = `Time: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        acceptingAnswers = false;
        nextButton.classList.remove('hide');
        setStatusClass(document.body, false);
        Array.from(answerButtonsElement.children).forEach(button => {
          setStatusClass(button, button.dataset.correct);
        });
      }
    }, 1000);
  } catch (error) {
    console.error("Error with the timer:", error);
  }
}

// Display the final score and feedback
function showFinalScore() {
  try {
    clearInterval(timerInterval);
    finalScoreContainer.classList.remove('hide');
    const message = document.getElementById('final-score-text');
    message.style.fontWeight = 'bold';

    const normalizedScore = Math.round((score / shuffledQuestions.length) * 10);

    let feedback = `Your final score is: ${score} out of ${shuffledQuestions.length}. `;

    if (normalizedScore > 5) {
      feedback += "Well done, noble scholar!";
      message.style.color = 'green';
    } else {
      feedback += "Back to the scrolls with you!";
      message.style.color = 'red';
    }

    message.innerText = feedback;
  } catch (error) {
    console.error("Error showing final score:", error);
  }
}

// Event listener to allow users to share their results
try {
  document.getElementById('share-btn').addEventListener('click', function() {
    const scoreText = document.getElementById('final-score-text').innerText;
    const shareData = {
      title: 'The Great History Quiz',
      text: `I just completed The Great History Quiz! ${scoreText}`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser.');
    }
  });
} catch (error) {
  console.error('An unexpected error occurred:', error);
}

// Array of quiz questions and answers
const questions = [
  { question: 'What country signed the Magna Carta in 1215?', answers: [ { text: 'Greece', correct: false }, { text: 'Turkey', correct: false }, { text: 'Italy', correct: false }, { text: 'England', correct: true } ] },
  { question: 'Napoleon Bonaparte was from which country?', answers: [ { text: 'France', correct: true }, { text: 'UK', correct: false }, { text: 'Germany', correct: false }, { text: 'Spain', correct: false } ] },
  { question: 'What Year did the US declare independence?', answers: [ { text: '1750', correct: false }, { text: '1776', correct: true }, { text: '1308', correct: false }, { text: '1806', correct: false } ] },
  { question: 'WW2 started in what year?', answers: [ { text: '1936', correct: false }, { text: '1939', correct: true }, { text: '1932', correct: false }, { text: '1949', correct: false } ] },
  { question: 'Julius Caesar ruled which Empire?', answers: [ { text: 'The Byzantine Empire', correct: false }, { text: 'The Ottoman Empire', correct: false }, { text: 'The Roman Empire', correct: true }, { text: 'The Greek Empire', correct: false } ] },
  { question: 'Which country was the first to grant women the right to vote?', answers: [ { text: 'UK', correct: false }, { text: 'US', correct: false }, { text: 'Saudi Arabia', correct: false }, { text: 'New Zealand', correct: true } ] },
  { question: 'In what year did the Titanic sink?', answers: [ { text: '1917', correct: false }, { text: '1909', correct: false }, { text: '1922', correct: false }, { text: '1912', correct: true } ] },
  { question: 'When did the Soviet Union dissolve?', answers: [ { text: '1916', correct: false }, { text: '2008', correct: false }, { text: '1991', correct: true }, { text: '2016', correct: false } ] },
  { question: 'In what year did the Act of Union between Ireland and Great Britain take place?', answers: [ { text: '1922', correct: false }, { text: '1798', correct: false }, { text: '1801', correct: true }, { text: '1603', correct: false } ] },
  { question: 'In what year did Constantinople fall to the Ottoman Empire?', answers: [ { text: '1922', correct: false }, { text: '1453', correct: true}, { text: '1204', correct: false}, { text: '1298', correct: false} ] }
];
