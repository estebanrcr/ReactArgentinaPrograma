var selectedOperator = "";

function setOperador(operator) {
  selectedOperator = operator;
  calculate();
}

function calculate() {
  var operando1 = parseFloat(document.getElementById("operando1").value);
  var operando2 = parseFloat(document.getElementById("operando2").value);


  var result;
  switch (selectedOperator) {
    case '+':
      result = operando1 + operando2;
      break;
    case '-':
      result = operando1 - operando2;
      break;
    case '*':
      result = operando1 * operando2;
      break;
    case '/':
      result = operando1 / operando2;
      break;
    default:
      alert("Please select an operator.");
      return;
  }

  document.getElementById("result").value = result;
}
