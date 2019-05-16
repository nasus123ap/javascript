// Desestruturação de Array

//Criando as variaveis
let a, b, resto;
//Criando Array
const pessoas = ['Joao', 'Nikao', 'Ygor', 'Rodrigo'];
//Pegando as duas primeiras posições
//E pegando todo resto
//utilizado o ... 
[a, b, ...resto] = pessoas;

console.log(resto);