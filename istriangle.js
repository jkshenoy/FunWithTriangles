const inputAngles = document.querySelectorAll('.input-angle');
const checkTriangle = document.querySelector('#check-triangle');
const outputText = document.querySelector('.output');

checkTriangle.addEventListener('click', isTriangle);

function isTriangle() {
  if (
    inputAngles[0].value === '' ||
    inputAngles[1].value === '' ||
    inputAngles[2].value === ''
  )
    outputText.innerText = 'Please enter values for all angles❗ ';
  else if (
    inputAngles[0].value <= 0 ||
    inputAngles[1].value <= 0 ||
    inputAngles[2].value <= 0
  ) {
    outputText.innerText =
      "input can't be negative or zero ❗Please retry with a valid input ";
  } else {
    const angleSum =
      Number(inputAngles[0].value) +
      Number(inputAngles[1].value) +
      Number(inputAngles[2].value);

    if (angleSum === 180) outputText.innerText = "Yay! it's a triangle!";
    else outputText.innerText = "Opps! it's NOT a triangle!";
  }
}
