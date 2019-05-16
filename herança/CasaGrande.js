const Casa = require('./Casa');
class CasaGrande extends Casa {
    constructor(cor, qtdQuartos) {
        super(cor, qtdQuartos);
    }

    getCor() {
        console.log(`COR: ${this.cor}`);
    }

    abrirJanelaCasaGrande(tipodecasa) {
        console.log(`${this.abrirJanelaCasaGrande()} ${tipodeCasa}`)
    }
}
const casaGrande = new CasaGrande('PRETO', 2);
const casaGrande = new CasaGrande('AZUL', 4);
casaGrande.getInformacao();
casaGrande.abrirJanelaCasaGrande('Casa Grande');
casaPequena.abrirJanelaCasaPequena('Casa Pequena');