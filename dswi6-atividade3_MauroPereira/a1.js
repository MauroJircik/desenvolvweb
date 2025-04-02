
//atributos:
const soma = (x, y) => x + y;
const quadrado = x => x * x;

//funções:
//- média:
function media(dados) {
    return dados.reduce(soma) / dados.length;
}

//- desvio padrão:
function desvioPadrão(dados) {
    let médiaCalculada = media(dados);
    return Math.sqrt(
        dados.map(x => x - médiaCalculada).map(quadrado).reduce(soma) / (dados.length - 1)
    );
}

//exportar as respostas p/ index1.js:
module.exports = { media, desvioPadrão };


