let idade = Number(prompt('Insira a sua idade'))
let nome = prompt('insira seu nome')
// == igual | != diferente | < menor que; > maior que | <= menor ou igual a
// === igual o valor e o tipo | !== diferente o valor e o tipo!

if(idade === 23 && nome === "Leandro"){
    console.log('Seu nome é Leandro e você tem 23 anos')
}else if(idade === 23 || nome === "Leandro"){
    console.log('Você tem 23 anos ou seu nome é Leandro')
}else{
console.log('Seu nome não é Leandro e você não tem 23 anos')
}