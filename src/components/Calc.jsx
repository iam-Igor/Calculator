import { useState } from "react";
import { Alert, Button, Col, Container, Fade, Row } from "react-bootstrap";

const Calc = () => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["+", "-", "x", "/"];
  const [operation, SetOperation] = useState("0");
  const [error, SetError] = useState(false);
  const [errorText, SetErrorText] = useState("");

  const check = () => {
    const symbols = /[-/x+]/g;
    const symbolsInTheOperation = operation.match(symbols);

    const newArraySy = Array.from(operators);
    newArraySy.push(".");

    const startsWith = newArraySy.some((value) => operation.startsWith(value));
    const endsWith = newArraySy.some((value) => operation.endsWith(value));

    if (startsWith) {
      SetErrorText("Devi prima inserire un numero valido");
      SetError(true);
      return;
    } else if (endsWith) {
      SetErrorText("L'operazione non può terminare con un simbolo");
      SetError(true);
      return;
    } else if (symbolsInTheOperation && symbolsInTheOperation.length > 1) {
      SetErrorText("Troppi simboli");
      SetError(true);
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
        SetError(true);
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
    <Container className="px-5 mt-5 d-flex flex-column align-items-center justify-content-start">
      <h1 className="mb-4 text-white fw-bold">Calculator App</h1>
      <Row className="calc-body pt-3 shadow-btm z-1 bg-white">
        <Col className="display rounded-1">
          <h1 className="text m-0 result">{operation}</h1>
        </Col>
        <Col className="operators px-md-4">
          {operators.map((sy, i) => {
            return (
              <div
                key={i}
                className="operators2 rounded-3 shadow-btm pointer"
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
                  className="rounded-3 shadow-btm pointer"
                  onClick={() => {
                    showNumbers(n.toString());
                  }}
                >
                  {n}
                </div>
              );
            })}

            <div
              className="shadow-btm rounded-3 pointer"
              onClick={() => {
                showNumbers(".");
              }}
            >
              .
            </div>
            <div
              className="shadow-btm rounded-3 pointer"
              onClick={() => {
                SetOperation("0");
                SetError(false);
              }}
            >
              C
            </div>
          </div>
          <Button className="equal ms-2 mb-3 shadow-btm" onClick={calculate}>
            =
          </Button>
        </Col>
      </Row>

      <Row className={`justify-content-center mt-2`}>
        <Col>
          {error && (
            <Alert
              variant="danger"
              dismissible
              onClose={() => {
                SetError(false);
                SetOperation("0");
              }}
            >
              <Alert.Heading>Error!</Alert.Heading>
              <p>{errorText}</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export { Calc };
