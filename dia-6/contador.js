let tabuada = Number(prompt("Escolha a tabuada que deseja"));

for (let contador = 0; contador <= 100; contador++) {
  console.log(tabuada + " x " + contador + " = " + tabuada * contador);
}
//o "for" é usado para a inclementação de contador, primeiro é definido o começo da contagem "let contador = 0;" depois o intervalo de
//contagem "contador <= 2000" e por fim a geração da contagem se é crescente "++" ou decrescente "--".
