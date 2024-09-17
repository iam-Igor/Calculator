import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Calc = () => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["+", "-", "x", "/"];
  const [operation, SetOperation] = useState("0");
  const [error, SetError] = useState(false);

  const check = () => {
    const symbols = /[-/*+]/g;
    const symbolsInTheOperation = operation.match(symbols);

    const newArraySy = Array.from(operators);
    newArraySy.push(".");

    const startsWith = newArraySy.some((value) => operation.startsWith(value));
    const endsWith = newArraySy.some((value) => operation.endsWith(value));

    if (startsWith) {
      console.log("Devi prima inserire un numero valido");
      SetError(true);
      return;
    } else if (endsWith) {
      console.log("L'operazione non può terminare con un simbolo");
      SetError(true);
      return;
    } else if (symbolsInTheOperation && symbolsInTheOperation.length > 1) {
      console.log("Troppi simboli");
      SetError(true);
      return;
    } else {
      return true;
    }
  };

  const calculate = () => {
    const [left, right] = operation.split(/[-/*+]/);
    const symbol = operation.match(/[-/*+]/)?.[0];
    let result = 0;

    if (check()) {
      if (right && left) {
        switch (symbol) {
          case "+":
            result = parseFloat(left) + parseFloat(right);
            SetOperation(result.toString());
            break;
          case "-":
            result = parseFloat(left) - parseFloat(right);
            SetOperation(result.toString());
            break;
          case "x":
            result = parseFloat(left) * parseFloat(right);
            SetOperation(result.toString());
            break;
          case "/":
            result = parseFloat(left) / parseFloat(right);
            SetOperation(result.toString());
            break;
          default:
            return result;
        }
      } else {
        console.log("mancano numeri");
      }
    }
  };

  const showNumbers = (n) => {
    if (operation === "0") {
      SetOperation("");
    }
    SetOperation((prevOperation) => prevOperation + n);
  };

  return (
    <Container className="px-5 mt-5 vh-100">
      <Row className="calc-body pt-3 shadow-btm ">
        <Col className="display">
          <h1 className="text">{operation}</h1>
        </Col>
        <Col className="operators">
          {operators.map((sy, i) => {
            return (
              <div
                key={i}
                className="operators2 rounded-3 shadow-btm"
                onClick={() => {
                  showNumbers(sy.toString());
                }}
              >
                {sy}
              </div>
            );
          })}
        </Col>
        <Col className="numb-equal">
          <div className="numb">
            {numbers.map((n, i) => {
              return (
                <div
                  key={i}
                  className="rounded-3 shadow-btm"
                  onClick={() => {
                    showNumbers(n.toString());
                  }}
                >
                  {n}
                </div>
              );
            })}

            <div
              className="shadow-btm rounded-3"
              onClick={() => {
                showNumbers(".");
              }}
            >
              .
            </div>
            <div
              className="shadow-btm rounded-3"
              onClick={() => SetOperation("0")}
            >
              C
            </div>
          </div>
          <Button className="equal ms-2 mb-3 shadow-btm" onClick={calculate}>
            =
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export { Calc };
