import calculatorView from "./view.js/calculatorView.js";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((el) =>
  el.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calculatorView.addCalc(value);
    } else {
      calculatorView.addOperation(value);
    }
  })
);
