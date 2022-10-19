const sideInput = document.querySelectorAll('.side-input');
const hypoBtn = document.querySelector('#button');
const outputAns = document.querySelector('.output');

function calcHypotenuse() {
  const addSides = sumOfsquares(
    Number(sideInput[0].value),
    Number(sideInput[1].value)
  );
  const lengthOfHypo = Math.sqrt(addSides);
  outputAns.innerText = `The length of Hypotenuse is ${lengthOfHypo} units`;
}

function sumOfsquares(a, b) {
  const result = a * a + b * b;
  return result;
}

hypoBtn.addEventListener('click', calcHypotenuse);
