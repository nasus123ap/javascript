class Pessoa {
    constructor(Nome, Idade) {

        this.nome = Nome;
        this.idade = Idade;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`);
    }

    verifiqueIdade() {
        if (this.idade >= 0 && this.idade < 15) {
            console.log('Crianca')
        } else if (this.idade >= 15 && this.idade < 30) {
            console.log('Jovem')
        } else if (this.idade >= 30 && this.idade < 60) {
            console.log('Adulto')
        } else if (this.idade >= 60) {
            console.log('Idoso')
            return true;
        } else {
            return false;
        }
    }
    static verifiqueNome(nome) {
        if (nome.toUpperCase() == nome) {
            return true;
        } else {
            return false;
        }
    }
}
const Shion = new Pessoa('shion', 25);
Pessoa.verifiqueNome(Shion.nome);
Shion.verifiqueIdade();
if (!Pessoa.verifiqueNome(Shion.nome)) {
    Shion.nome = Shion.nome.toUpperCase();
}

const Hades = new Pessoa('Hades', 19);
Pessoa.verifiqueNome(Hades.nome);
Hades.verifiqueIdade();
if (!Pessoa.verifiqueNome(Hades.nome)) {
    Hades.nome = Hades.nome.toUpperCase();
}
const Athena = new Pessoa('athena', 42);
Pessoa.verifiqueNome(Athena.nome);
Athena.verifiqueIdade();
if (!Pessoa.verifiqueNome(Athena.nome)) {
    Athena.nome = Athena.nome.toUpperCase();
}
const Seiya = new Pessoa('seiya', 61);
Pessoa.verifiqueNome(Seiya.nome);
Seiya.verifiqueIdade();
if (!Pessoa.verifiqueNome(Seiya.nome)) {
    Seiya.nome = Seiya.nome.toUpperCase();
}