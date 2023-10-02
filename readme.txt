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
};

const calculateResult = function () {
  const operator = operatorsDisplay.innerText;
  const num1 = parseInt(firstNumber.innerText);
  const num2 = parseInt(secondNumber.innerText);

  switch (operator) {
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

for (let x = 0; x < operators.length; x++) {
  operators[x].addEventListener("click", function () {
    operatorsDisplay.innerText = operators[x].innerText;
    isfirstNum = false;
  });
}

equal.addEventListener("click", function () {
  if (!isNaN(calculateResult())) {
    firstNumber.innerText = calculateResult();
    secondNumber.innerText = "";
    operatorsDisplay.innerText = "";
    isfirstNum = true;
  }
});

addEventToNumbers();