let fome = prompt("Você está com fome? (sim ou não)");
let dinheiro = prompt("Você tem dinheiro? (sim ou não)");
let restaurante = prompt("O restaurante está aberto? (sim ou não)");

if (fome === "não" || dinheiro === "não") {
  console.log("Hoje a janta será em casa");
} else if (dinheiro === "sim" && restaurante === "sim") {
  console.log("Hoje o jantar será no seu restaurante preferido!");
} else {
  console.log("Peça um delivery!");
}
