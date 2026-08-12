function exibir(){
    document.writeln("Nome: Mario Dias <br> ");
    document.writeln("Idade: 18 anos <br>");
    document.writeln("Cidade: Pariquera-Açu <hr> ");
} 
exibir();

const n1 = 4;
const n2 = 2;

function div(n1,n2){
    const divisao = n1/n2;
    document.write(`<br> A divisão de ${n1} por ${n2} resulta em ${divisao} <br> <hr>`);
}

div(n1,n2);

function mult(num1,num2,num3){
    return num1*num2*num3;
}
const num1 = 10;
const num2 = 5;
const num3 = 2;

document.write(`A multiplicação de ${num1} por ${num2} por ${num3} é igual a ${mult(num1,num2,num3)}<hr>`);

const idade = 20;

function maiorIdade(idade){
    if(idade >=18){
        return `Maior de idade!`;
    } else {
        return `Menor de idade!`;
    }
}

document.write(`Idade: ${idade} é ${maiorIdade(idade)} <hr>`);

const nota1 = 10;
const nota2 = 5;
const aprovado = function(nota1, nota2){
    const media = (nota1+nota2)/2;

    if(media <=5){
        return `Reprovado!`;
    } else {
        return `Aprovado!`;
    }
    
}

document.write(`Aluno: ${aprovado(nota1,nota2)} <hr>`);

const y = 3;
const triplo = (y) =>{
    return y * 3;
};
document.write(`O triplo do número ${y} é ${triplo(y)} <hr>`);

const nu1 = 1;
const nu2 = 2;
const nu3 = 3;
const nu4 = 4;

const soma4numeros = (nu1, nu2, nu3, nu4) => {
    return soma = nu1+nu2+nu3+nu4;
}
document.write(`A soma dos números é ${soma4numeros(nu1,nu2,nu3,nu4)}<hr>`);

const bemVindo = (function (user){
    document.write(`Seja bem vindo ${user}!`);
})("Mario");

