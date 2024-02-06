let num = Number(prompt("Digite um numero"));
let num2 = Number(num + 1);
let num3 = Number(num + 2);

console.log("primeiro numero");
for (let i = 0; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}
console.log("segundo numero");
for (let i = 0; i <= 10; i++) {
  console.log(num2 + " x " + i + " = " + num2 * i);
}
console.log("terceiro numero");
for (let i = 0; i <= 10; i++) {
  console.log(num3 + " x " + i + " = " + num3 * i);
}
