const sideInput = document.querySelectorAll('.side-input');
const hypoBtn = document.querySelector('#button');
const outputAns = document.querySelector('.output');

function calcHypotenuse() {
  if (sideInput[0].value === '' || sideInput[1].value === '') {
    outputAns.innerText = 'Please enter values for all sides❗ ';
  } else if (sideInput[0].value <= 0 || sideInput[1].value <= 0) {
    outputAns.innerText =
      "input can't be negative or zero ❗Please retry with a valid input ";
  } else {
    const addSides = sumOfsquares(
      Number(sideInput[0].value),
      Number(sideInput[1].value)
    );
    const lengthOfHypo = Math.sqrt(addSides);
    outputAns.innerText = `The length of Hypotenuse is ${lengthOfHypo} units`;
  }
}

function sumOfsquares(a, b) {
  const result = a * a + b * b;
  return result;
}

hypoBtn.addEventListener('click', calcHypotenuse);
