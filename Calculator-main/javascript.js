function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operand) {
  if (operand === "+") return add(a, b);

  if (operand === "-") return subtract(a, b);

  if (operand === "x") return multiply(a, b);

  if (operand === "/")
    if (b === 0) {
      alert("No!?");
      return "no";
    }
  return divide(a, b);
}

let firstNumber = "h";
let secondNumber = "h";
let numOp = 0;
let calc = [];
calc[0] = "0";
calc[1] = null;
calc[2] = "9";
let result;
let operator = 7;

document.getElementById("equals").onclick = function () {
  result = 0;
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  //  console.log(result)
  //console.log(operator)
  //console.log(secondNumber)
  //console.log(firstNumber)
  if (operator === 7) {
    document.getElementById("screen").innerHTML = "No!";
  } else {
    result = operate(firstNumber, secondNumber, operator);
    document.getElementById("screen").innerHTML = result;
    firstNumber = result;
    secondNumber = "h";
    operator = 7;
  }
};

document.getElementById("one").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "1";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "1";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "1";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "1";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("two").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "2";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "2";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "2";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "2";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("zero").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "0";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "0";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "0";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "0";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("three").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "3";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "3";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "3";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "3";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("four").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "4";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "4";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "4";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "4";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("five").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "5";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "5";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "5";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "5";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("six").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "6";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "6";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "6";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "6";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("seven").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "7";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "7";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "7";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "7";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("eight").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "8";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "8";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "8";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "8";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("nine").onclick = function () {
  console.log(operator);
  if (firstNumber === "h" && operator === 7) {
    firstNumber = "9";
    calc[0] = firstNumber;
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
  } else if (operator === 7) {
    firstNumber += "9";
    document.getElementById("screen").innerHTML = firstNumber;
    console.log(firstNumber);
    calc[0] = firstNumber;
  }

  if (secondNumber === "h" && operator !== 7) {
    secondNumber = "9";
    calc[2] = secondNumber;
    document.getElementById("screen").innerHTML = secondNumber;
  } else if (operator !== 7) {
    secondNumber += "9";
    document.getElementById("screen").innerHTML = secondNumber;
    calc[2] = secondNumber;
  }
};

document.getElementById("AC").onclick = function () {
  window.location.reload();
};

document.getElementById("add").onclick = function () {
  if (operator !== 7) {
    result = 0;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    //  console.log(result)
    //console.log(operator)
    //console.log(secondNumber)
    //console.log(firstNumber)
    result = operate(firstNumber, secondNumber, operator);
    document.getElementById("screen").innerHTML = result;
    firstNumber = result;
    secondNumber = "h";
  } else {
    operator = "+";
    document.getElementById("screen").innerHTML = operator;
  }
};

document.getElementById("subtract").onclick = function () {
  if (operator !== 7) {
    result = 0;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    //  console.log(result)
    //console.log(operator)
    //console.log(secondNumber)
    //console.log(firstNumber)
    result = operate(firstNumber, secondNumber, operator);
    document.getElementById("screen").innerHTML = result;
    firstNumber = result;
    secondNumber = "h";
  } else {
    operator = "-";
    document.getElementById("screen").innerHTML = operator;
  }
};

document.getElementById("multiply").onclick = function () {
  if (operator !== 7) {
    result = 0;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    //  console.log(result)
    //console.log(operator)
    //console.log(secondNumber)
    //console.log(firstNumber)
    result = operate(firstNumber, secondNumber, operator);
    document.getElementById("screen").innerHTML = result;
    firstNumber = result;
    secondNumber = "h";
  } else {
    operator = "x";
    document.getElementById("screen").innerHTML = operator;
  }
};

document.getElementById("divide").onclick = function () {
  if (operator !== 7) {
    result = 0;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    result = parseInt(result);

    result = operate(firstNumber, secondNumber, operator);

    result = operate(firstNumber, secondNumber, operator);
    document.getElementById("screen").innerHTML = result;
    firstNumber = result;
    secondNumber = "h";
  } else {
    operator = "/";
    document.getElementById("screen").innerHTML = operator;
  }
};
