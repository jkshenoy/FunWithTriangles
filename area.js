const userInput = document.querySelectorAll('.user-input');
const areaBtn = document.querySelector('#button');
const outputAns = document.querySelector('.output');

function calcArea() {
  const addSides = areaOfsqr(
    Number(userInput[0].value),
    Number(userInput[1].value)
  );
  outputAns.innerText = `The Area of Triangle is ${addSides} square units`;
}

function areaOfsqr(a, b) {
  const addSides = 0.5 * (a * b);
  return addSides;
}

areaBtn.addEventListener('click', calcArea);
