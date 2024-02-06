let idade = Number(prompt("insira sua idade"));

switch (idade) {
  case 10:
    console.log("voce tem 10 anos");
    console.log("segunda linha");
    break;
  case 15:
    console.log("voce tem 15 anos");
    console.log("segunda linha");
    break;
  default:
    console.log("default");
    break;
}
//break; é para "quebrar" o codigo em etapas, não deixar ele passar para o proximo sem passar pelo anterior.
