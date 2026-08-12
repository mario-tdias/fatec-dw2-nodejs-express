// Função anônima

const mult = function(x){
    return x * 2;
}
const x = 15;

document.write(`<p>O resultado da multiplicação é ${mult(x)}</p>`)

// Função seta - com um único parâmetro - arrow function

const triplo = (y) =>{
    return y * 3;
};

const y = 100;

document.write(`<p>O triploe de ${y} é ${triplo(y)}</p>`)

// Função seta - com mais de um parâmetro - arrow function

const calculadora = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
// eval no JS é uma função nativa que realiza cálculos matemáticos, a partir de dois números e um operador

const num1 = 8;
const operador = '*';
const num2 = 2;

document.write(`O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1,operador,num2)}`);

// função imediata (IIFE - immediately invoked function expression)

const imediata = (function (){
    document.write("<p>Estou sendo executada imediatamente!</p>")
})(); // Passando os parâmetros

// função imediata - com parâmetros
const loadUser = (function (user){
    document.write(`<p>Carregando as informações do usuário: <strong> ${user} </strong>...</p>`);
    // Mostrando as informações após 3 segundos
    setTimeout(() =>{
        document.write(`
            Nome: Mario Dias <br>
            Idade: 18 anos <br>
            Cidade: Pariquera-Açu <br>
            Hobby; Cubo mágico
            `)
    }, 3000)
})("Mario");