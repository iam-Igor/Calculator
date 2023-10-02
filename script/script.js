const displayViewer = document.getElementById("display");

const dotSymbol = document.getElementById("dot");
const deleteSymbol = document.getElementById("delete");
const equal = document.getElementById("equal");

const allNumbers = document.querySelectorAll(".number-chosen");

const allOperators = document.getElementsByClassName("operators2");
const operatorsDisplay = document.getElementById("operatorsDisplay");

let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");

let isfirstNum = true;

const addEventToNumbers = function () {
  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener("click", function () {
      const number = parseInt(allNumbers[i].innerText);
      if (isfirstNum) {
        firstNumber.innerText += number;
      } else {
        secondNumber.innerText += number;
      }
    });
  }

  const calculateResult = function () {
    const num1 = parseInt(firstNumber.innerText);
    const num2 = parseInt(secondNumber.innerText);

    const operat = operatorsDisplay.innerText;

    switch (operat) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "x":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return NaN;
    }
  };

  for (let x = 0; x < allOperators.length; x++) {
    allOperators[x].addEventListener("click", function () {
      operatorsDisplay.innerText = allOperators[x].innerText;
      isfirstNum = false;
    });
  }
  equal.addEventListener("click", function () {
    firstNumber.innerText = calculateResult();
    secondNumber.innerText = "";
    operatorsDisplay.innerText = "";
    isfirstNum = true;
  });
};

addEventToNumbers();

deleteSymbol.addEventListener("click", function () {
  location.reload();
});
