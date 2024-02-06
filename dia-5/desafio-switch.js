let num1 = Number(prompt("insira o primeiro numero"));
let operação = prompt("insira a operação desejada (+ , - , * ou /)");
let num2 = Number(prompt("insira o segundo numero"));

switch (operação) {
  case "+":
    console.log("resultado da soma: " + (num1 + num2));
    break;
  case "-":
    console.log("resultado da subtração: " + (num1 - num2));
    break;
  case "*":
    console.log("resultado da multiplicação: " + num1 * num2);
    break;
  case "/":
    console.log("resultado da divisão: " + num1 / num2);
    break;
  default:
    console.log("default");
    break;
}
