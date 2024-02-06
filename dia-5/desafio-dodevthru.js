let opção = prompt(
  'o que deseja fazer? Para gasolina digite: "gasolina"| Para alcool digite "alcool"| Para calibrar os pneus digite "calibrar"'
);

switch (opção) {
  case "gasolina":
    let valor1 = Number(prompt("Insira o valor em reais desejado"));
    console.log("Você abasteceu " + valor1 / 5 + "L de gasolina.");
    break;
  case "alcool":
    let valor2 = Number(prompt("Insira o valor em reais desejado"));
    console.log("Você abasteceu " + valor2 / 3 + "L de alcool.");
    break;
  case "calibrar":
    console.log("Pneus calibrados com sucesso.");
    break;
}
