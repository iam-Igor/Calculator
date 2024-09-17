import { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

const Calc = () => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["+", "-", "x", "/"];
  const [operation, SetOperation] = useState("0");
  const [error, SetError] = useState(false);
  const [errorText, SetErrorText] = useState("");

  const setTheError = () => {
    SetError(true);
    setTimeout(() => {
      SetError(false);
      SetOperation("0");
    }, 2000);
  };

  const check = () => {
    const symbols = /[-/x+]/g;
    const symbolsInTheOperation = operation.match(symbols);

    const newArraySy = Array.from(operators);
    newArraySy.push(".");

    const startsWith = newArraySy.some((value) => operation.startsWith(value));
    const endsWith = newArraySy.some((value) => operation.endsWith(value));

    if (startsWith) {
      console.log("Devi prima inserire un numero valido");
      SetErrorText("Devi prima inserire un numero valido");
      setTheError();
      return;
    } else if (endsWith) {
      console.log("L'operazione non può terminare con un simbolo");
      SetErrorText("L'operazione non può terminare con un simbolo");
      setTheError();
      return;
    } else if (symbolsInTheOperation && symbolsInTheOperation.length > 1) {
      console.log("Troppi simboli");
      SetErrorText("Troppi simboli");
      setTheError();
      return;
    } else {
      return true;
    }
  };

  const calculate = () => {
    const [left, right] = operation.split(/[-/x+]/);
    const symbol = operation.match(/[-/x+]/)?.[0];
    let result = 0;

    if (check()) {
      if (right && left) {
        switch (symbol) {
          case "+":
            result = parseFloat(left) + parseFloat(right);
            SetOperation(result.toFixed(2).toString());
            break;
          case "-":
            result = parseFloat(left) - parseFloat(right);
            SetOperation(result.toFixed(2).toString());
            break;
          case "x":
            result = parseFloat(left) * parseFloat(right);
            SetOperation(result.toFixed(2).toString());
            break;
          case "/":
            result = parseFloat(left) / parseFloat(right);
            SetOperation(result.toFixed(2).toString());
            break;
          default:
            return result;
        }
      } else {
        console.log("mancano numeri");
        SetErrorText("Mancano numeri");
        setTheError();
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
    <Container className="px-5 mt-5 vh-100 d-flex flex-column align-items-center justify-content-center">
      <Row className="calc-body pt-3 shadow-btm z-1 bg-white">
        <Col className="display">
          <h1 className="text">{operation}</h1>
        </Col>
        <Col className="operators px-md-4">
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

      <Row
        className={`justify-content-center mt-2 ${
          error ? "slide-bottom" : "slide-top"
        }`}
      >
        <Col>
          <Alert variant="danger">
            <Alert.Heading className="d-flex justify-content-center">
              <p>Error!</p>
            </Alert.Heading>
            <p>{errorText}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export { Calc };
