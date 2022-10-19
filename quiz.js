const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-answers-btn');
const displayOutput = document.querySelector('.output');

const correctAnswers = ['70°', 'right', '2'];

submitBtn.addEventListener('click', calcScore);

function calcScore() {
  let score = 0,
    ansIndex = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[ansIndex]) score++;
    ansIndex++;
  }
  displayOutput.innerText = `Your score is ${score}`;
}
