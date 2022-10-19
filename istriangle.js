const inputAngles = document.querySelectorAll('.input-angle');
const checkTriangle = document.querySelector('#check-triangle');
const outputText = document.querySelector('.output');

checkTriangle.addEventListener('click', isTriangle);

function isTriangle() {
  const angleSum =
    Number(inputAngles[0].value) +
    Number(inputAngles[1].value) +
    Number(inputAngles[2].value);

  if (angleSum === 180) outputText.innerText = "Yay! it's a triangle!";
  else outputText.innerText = "Opps! it's NOT a triangle!";
}
