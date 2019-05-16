class Pessoa {
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF:${this.cpf}`, `Sexo: ${this.sexo}`);
    }

    //Metodo não estatico
    //com retorno
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        } else {

            console.log(`${this.nome} é FEMININO`);
        }
    }

    Maioridade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }


    //Metodo estatico -> static
    //comretorno vold
    static exemplo(Sexo) {
        //MASCULINO
        //FEMININO
        console.log(Sexo)
        if (Sexo == 'M') {
            console.log('MASCULINO');
        } else {
            console.log('FEMININO')
        }
        console.log('Este é um metodo estatico.')

    }


    static verificanome(nome) {
        if (nome.toUpperCase() == nome) {
            return true;
        } else {
            return false;
        }
    }
}
//Estou instanciando um novo objeto(Classe)
const Joao = new Pessoa('666.666.666-06', 'Joao', 18, 'M');

//Estou adessando um metodo não estatico
//Que o retorno vold
Joao.compararSexo();


//Este metodo estático
//Não precisa instanciar
//Verificar maiusculo
Pessoa.exemplo(Joao.Sexo);
if (!Pessoa.verificanome(Joao.nome)) {
    Joao.nome = Joao.nome.toUpperCase();
}



if (Joao.Maioridade()) {
    console.log(`${Joao.nome} É MAIOR DE IDADE!`);
} else {
    console.log(`${Joao.nome} É MENOR DE IDADE!`);
}

console.info(Pessoa);