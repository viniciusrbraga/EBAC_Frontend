function Veiculo (marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;

    this.listaAtributos = function() {
        console.log(`Marca = ${this.marca}`)
        console.log(`Modelo = ${this.modelo}`)
        console.log(`Cor = ${this.cor}`)
    }

    this.acelerar = function() {
        console.log('Acelerar.');
    }

    this.virar = function() {
        console.log('Virar.');
    }
}

function Carro (marca, modelo, cor, numeroDePortas) {
    this.numeroDePortas = numeroDePortas;

    this.andarParaTras = function() {
        console.log('Andar para trás.');
    }

    Veiculo.call(this, marca, modelo, cor);
}

function Moto (marca, modelo, cor, cavaleteCentral) {
    this.cavaleteCentral = cavaleteCentral;

    this.enclinar = function() {
        console.log('Enclinar.');
    }

    Veiculo.call(this, marca, modelo, cor);
}

const testarossa = new Carro('Ferrari', 'Testarossa', 'Vermelha', 2);
testarossa.listaAtributos();
testarossa.andarParaTras();

const kombi = new Carro('Volkswagen', 'Kombi', 'Branca', 3);
kombi.listaAtributos();
kombi.virar();

const brutale = new Moto('MV Agusta', 'Brutale 1000 RR Assen', 'Preta', false);
brutale.listaAtributos();
brutale.enclinar();