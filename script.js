const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let current = "";

for (const button of buttons) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    if (value === "C") {
      current = "";
      display.textContent = "0";
        } else if (value === "=") {
      const result = calculate(current);
      display.textContent = result;
            if (result === "Error") {
        current = "";
      } else {
        current = String(result);
      }
    } else {
      current = current + value;
      display.textContent = current;
    }
  });
}
function calculate(expression) {
  const match = expression.match(/^(-?\d*\.?\d+)([+\-*/])(\d*\.?\d+)$/);

  if (match === null) {
    return "Error";
  }

  const a = Number(match[1]);
  const operator = match[2];
  const b = Number(match[3]);

  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return b === 0 ? "Error" : a / b;
}