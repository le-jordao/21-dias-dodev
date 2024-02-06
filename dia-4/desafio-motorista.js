let nome = prompt("insira seu nome");
let idade = Number(prompt("insira a sua idade"));
let carro = prompt("possui carro próprio? (sim/não)");
let cnh = prompt("é habilitado? (sim/não)");

if (idade >= 18 && cnh === "sim" && carro === "sim") {
  console.log(nome + ", você será o motorista!");
} else if (idade >= 18 && cnh === "sim" && carro === "não") {
  console.log(nome + ", você pode dirigir mas não tem um carro.");
} else {
  console.log(nome + ", você não pode dirigir.");
}
