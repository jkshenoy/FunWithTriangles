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
  'SSA',
  'Obtuse Scalene',
  'True',
];

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0,
    ansIndex = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[ansIndex]) score += 10;
    ansIndex++;
  }
  //show the result
  window.scrollTo(0, 0);
  // displayResult.innerText = `Your score is ${score}`;

  let output = 0;
  const timer = setInterval(() => {
    displayResult.style.display = 'block';
    if (score === 0) displayResult.textContent = `You got nothing right!`;
    else displayResult.textContent = `You got ${output}% answers right!`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
