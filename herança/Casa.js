class Casa {
    constructor(cor, QtdQuartos) {
        this.cor = cor;
        this.quarto = QtdQuartos;
    }

    getInformacao() {
        console.log(this.quarto)
        console.log(`cor: ${this.cor} Qtd. Quartos: ${this.quarto}`);
    }


    static abrirPortao() {
        console.log('Portão aberto!')
    }


}
module.exports = Casa;