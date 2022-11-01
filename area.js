const userInput = document.querySelectorAll('.user-input');
const areaBtn = document.querySelector('#button');
const outputAns = document.querySelector('.output');

function calcArea() {
  if (userInput[0].value === '' || userInput[1].value === '') {
    outputAns.innerText = 'Please enter values for all sides';
  } else if (userInput[0].value < 0 || userInput[1].value < 0) {
    outputAns.innerText =
      "input can't be negative or zero ❗Please retry with a valid input ";
  } else {
    const addSides = areaOfsqr(
      Number(userInput[0].value),
      Number(userInput[1].value)
    );
    outputAns.innerText = `The Area of Triangle is ${addSides} square units`;
  }
}

function areaOfsqr(a, b) {
  const addSides = 0.5 * (a * b);
  return addSides;
}

areaBtn.addEventListener('click', calcArea);
