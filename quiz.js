const quizForm = document.querySelector('.quiz-form');

const displayResult = document.querySelector('.quizresult');

const correctAnswers = [
  '70°',
  'right',
  '2',
  'equilateral',
  '2',
  'no',
  'polygon',
];

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0,
    ansIndex = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[ansIndex]) score += 20;
    ansIndex++;
  }
  //show the result
  // displayResult.innerText = `Your score is ${score}`;

  let output = 0;
  const timer = setInterval(() => {
    displayResult.style.display = 'block';
    displayResult.textContent = `You got ${output}% answers right!`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
