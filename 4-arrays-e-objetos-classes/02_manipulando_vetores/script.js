// método de manipulação de vetores

let frutas = ['Laranja', 'Maçã', 'Banana'];

document.write(`<p> Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = 'Morango';

document.write(`<p>Agora a lista é ${frutas} </p>`)

// méotod push: insere um novo elemento no final do vetor
frutas.push(`Abacaxi`);
document.write(`<p>Agora a lista é ${frutas} </p>`)

// método unshift: insere um novo elemento no início do vetor

frutas.unshift(`Pera`);

document.write(`<p>Agora a lista é ${frutas} </p>`);

// método lenght: retorna o número de elementos no vetor

document.write(`Na nossa lista temos ${frutas.length} frutas.` );

// método sort: ordena os itens do vetor
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);
document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

// método sort: ordenando em ordem crescente e decrescente

let numeros = [6,8,2,9,3,800,200];

document.write(`<p>Os números ordenados de forma crescente: ${numeros.sort((a, b) =>(a - b))}</p>`);

document.write(`<p>Os números ordenados de forma decrescente: ${numeros.sort((a, b) =>(b - a))}</p>`);
