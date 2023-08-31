class Calculator {
  prevOperationText = document.querySelector(".prev-operation");
  curOperationText = document.querySelector(".cur-operation");
  currentOperantion = "";
  allOperations = ["+", "-", "*", "/"];
  nowOperation;

  addCalc(num) {
    if (num === "." && this.curOperationText.innerText.includes(".")) return;

    this.currentOperantion = num;
    this.updateScreen();
  }

  addOperation(operation) {
    if (this.curOperationText.innerText === "" && operation !== "C") {
      if (this.prevOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    } else if (
      isNaN(+this.prevOperationText.innerText) &&
      this.allOperations.includes(operation) &&
      operation !== this.nowOperation
    ) {
      return;
    }

    let operationValue;
    const prev = +this.prevOperationText.innerText.split(" ")[0];
    const cur = +this.curOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = prev + cur;
        this.updateScreen(operationValue, operation, cur, prev);
        break;
      case "-":
        operationValue = prev - cur;
        this.updateScreen(operationValue, operation, cur, prev);
        break;
      case "*":
        operationValue = prev * cur;
        this.updateScreen(operationValue, operation, cur, prev);
        break;
      case "/":
        operationValue = prev / cur;
        this.updateScreen(operationValue, operation, cur, prev);
        break;
      case "DEL":
        this.delDigit();
        break;
      case "CE":
        this.clearCur();
        break;
      case "C":
        this.clearAll();
        break;
      case "=":
        this.resultOperator();
        break;
      default:
        return;
    }
  }

  updateScreen(
    operationValue = null,
    operation = null,
    cur = null,
    prev = null
  ) {
    if (operationValue === null) {
      this.curOperationText.innerText += this.currentOperantion;
    } else {
      if (prev === 0) {
        operationValue = cur;
      }

      this.prevOperationText.innerText = `${operationValue} ${operation}`;
      this.curOperationText.innerText = "";
    }
  }

  changeOperation(operation) {
    const allOperations = ["+", "-", "*", "/"];

    if (this.allOperations.includes(operation)) {
      this.prevOperationText.innerText =
        this.prevOperationText.innerText.slice(0, -1) + operation;
    } else {
      return;
    }
  }

  delDigit() {
    this.curOperationText.innerText = this.curOperationText.innerText.slice(
      0,
      -1
    );
  }

  clearCur() {
    this.curOperationText.innerText = "";
  }

  clearAll() {
    this.prevOperationText.innerText = "";
    this.curOperationText.innerText = "";
  }

  resultOperator() {
    this.nowOperation = this.prevOperationText.innerText.split(" ")[1];
    const operation = this.prevOperationText.innerText.split(" ")[1];

    this.addOperation(operation);
  }
}

export default new Calculator();
