const displayViewer = document.getElementById("display");

const dotSymbol = document.getElementById("dot");
const deleteSymbol = document.getElementById("delete");
const equal = document.getElementById("equal");

const allNumbers = document.querySelectorAll(".number-chosen");

const operators = document.getElementsByClassName("operators2");
const operatorsDisplay = document.getElementById("operatorsDisplay");

let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");

let isfirstNum = false;

const addEventToNumbers = function () {
  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener("click", function () {
      const number = parseInt(allNumbers[i].innerText);

      if (!isfirstNum) {
        firstNumber.innerText += number;
        isfirstNum = true;
      }

      for (let x = 0; x < operators.length; x++) {
        operators[x].addEventListener("click", function () {
          operatorsDisplay.innerText = operators[x].innerText;
        });

        if (
          operatorsDisplay.innerText === "+" ||
          operatorsDisplay.innerText === "-" ||
          operatorsDisplay.innerText === "x" ||
          operatorsDisplay.innerText === "/"
        ) {
          secondNumber.innerText = number;
        }
      }
      if (operatorsDisplay.innerText === "+") {
        equal.addEventListener("click", function () {
          let result =
            parseInt(firstNumber.innerText) + parseInt(secondNumber.innerText);
          firstNumber.innerText = result;
          operatorsDisplay.innerText = "";
          secondNumber.innerText = "";
        });
      } else if (operatorsDisplay.innerText === "-") {
        equal.addEventListener("click", function () {
          let result =
            parseInt(firstNumber.innerText) - parseInt(secondNumber.innerText);
          firstNumber.innerText = result;
          operatorsDisplay.innerText = "";
          secondNumber.innerText = "";
        });
      } else if (operatorsDisplay.innerText === "x") {
        equal.addEventListener("click", function () {
          let result =
            parseInt(firstNumber.innerText) * parseInt(secondNumber.innerText);
          firstNumber.innerText = result;
          operatorsDisplay.innerText = "";
          secondNumber.innerText = "";
        });
      } else if (operatorsDisplay.innerText === "/") {
        equal.addEventListener("click", function () {
          let result =
            parseInt(firstNumber.innerText) / parseInt(secondNumber.innerText);
          firstNumber.innerText = result;
          operatorsDisplay.innerText = "";
          secondNumber.innerText = "";
        });
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
