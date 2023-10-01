const displayViewer = document.getElementById("display");

const sum = document.getElementById("sum");
const diff = document.getElementById("diff");
const multiply = document.getElementById("molt");
const divided = document.getElementById("divided");

const arrayOfNumbers = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0];

const dotSymbol = document.getElementById("dot");
const deleteSymbol = document.getElementById("delete");
const equal = document.getElementById("equal");

const allNumbers = document.querySelectorAll(".number-chosen");
const operators = document.getElementById("operators2");

let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");

let firstNumbertext = "";
let secondNumbertext = "";

let isfirstNum = false;

const addEventToNumbers = function () {
  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener("click", function () {
      const number = parseInt(allNumbers[i].innerText);

      if (!isfirstNum) {
        firstNumbertext += number.toString();
        firstNumber.innerText = firstNumbertext;
        isfirstNum = false;
      }
      if (
        operators.innerText === "+" ||
        operators.innerText === "-" ||
        operators.innerText === "/" ||
        operators.innerText === "x"
      ) {
        isfirstNum = true;
        secondNumbertext += number.toString();
        secondNumber.innerText = secondNumbertext;
      }
    });
  }
};
addEventToNumbers();

dotSymbol.addEventListener("click", function () {
  displayViewer.innerText += dotSymbol.innerText;
});

deleteSymbol.addEventListener("click", function () {
  displayViewer.innerText = "";
});

sum.addEventListener("click", function () {
  operators.innerText += sum.innerText;
});

diff.addEventListener("click", function () {
  operators.innerText += diff.innerText;
});

multiply.addEventListener("click", function () {
  operators.innerText += multiply.innerText;
});

divided.addEventListener("click", function () {
  operators.innerText += divided.innerText;
});
