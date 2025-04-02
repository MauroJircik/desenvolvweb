/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 1
*/

console.log('Atividade 1. Considere o programa em javascript abaixo que faz cáculos estatíticos (stats) de média (mean) e desvio padrão (standard deviation stddev). ');

//-atributos:
let dados = [1, 3, 5, 7, 9];
const stats = require('./a1');

//-saída:
console.log('O conjunto de dados é: ', dados);
console.log('- a média é: ', stats.media([1, 3, 5, 7, 9]));
console.log('- o desvio padrão é:', stats.desvioPadrão([1, 3, 5, 7, 9]));


