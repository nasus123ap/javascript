//Util com Strig

const nome = 'Joao Pedro Paixao Seixas';

//split serve para separar conforme parâmetro
console.log(nome.split(' '));

//replace servar para substituir o que for passado como parânetro;
console.log('Usando replace:' + nome.replace('Joao', 'Didi'));

//Utiliza REGEX
console.log('usando Replace: ' + nome.replace(new RegExp('', 'g'), '_'));

//Utilizando REPEAT
const texto = 'abc';
console.log('Utilizando REPAT: ' + texto.repeat(3));

//Utilizando Subtr para pegar parte do texto
//O método retorna uma parte da string iniciando no
//Indice especificado e estendendo para um determinado numero 
//De caracteres
console.log('Utilizando Subtr:' + nome.substr(10, 8));

//Slice extrair uma seção de uma string e retorna como uma nova
console.log('Utilizando Slice:' + nome.slice(9, 17))

//StartWinth inica com uma determinada palavra
//retorna boolean
console.log('Utilizando StartsWith:' + nome.startsWith('Joao'));

//endtWinth termina com uma determinada palavra
//retorna boolean
console.log('Utilizando EndWith:' + nome.endsWith('Seixas'));

//Length determina o tamanho da nossa string
console.log('Utilizando Length' + nome.length);


//Number

const numeroDecimal = 3.14852415;

//toPrecision conta apartir do primeiro número,
//e faz o arredondamento
console.log('Utilizando toPrecision:' + numeroDecimal.toPrecision(3));

//toFixed limita depois do ponto (casas decimal) a quantidade de casas decimais,
console.log('Utilizando toFixed:' + numeroDecimal.toFixed(2));

//isNAN
//retorna um booleano (false quando é numero)
console.log('Utilizando isNAN :' + isNaN('Joao'));

//Data no javascript

let date = new Date();
console.log('data completa: ' + date);
console.log('data : ' + date.getDate());
console.log('Mes: ' + date.getMonth());
console.log('Horas: ' + date.getHours());
console.log('Ano: ' + date.getFullYear());
console.log('Dia da semana: ' + date.getDay());
console.log('Segundos: ' + date.getSeconds());