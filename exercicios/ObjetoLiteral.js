//Objeto Literal
const Pessoa = {
    nome: 'Joao',
    idade: '19',
    cpf: '666.666.666-66',
    sexo: 'M',
    compararSexo: function() {
        if (this.sexo.toUpperCase() == 'M') {
            console.log(`${this.nome} é  MASCULINO`);
        } else {
            console.log(`${this.nome} é FEMININO`)
        }
    }
}

Pessoa.compararSexo();
// Desestruturação de objeto Literal
const { sexo, cpf, ...resto1 } = Pessoa;

console.log(sexo);