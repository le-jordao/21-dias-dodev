let nome = prompt("Insira seu nome");
let idade = parseInt(prompt("Insira sua idade"));
let altura = prompt("insira sua altura");
let peso = parseInt(prompt("insira seu peso"));
const ano_de_nascimento = 2023 - idade;
let imc = peso / (altura * altura);
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + ano_de_nascimento + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imc + " Kg/m2.")