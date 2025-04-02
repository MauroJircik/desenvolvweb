/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 7
*/

console.log('Atividade 7. Utilize o exemplo do módulo local logger.js e incorpore debuglog e inspect da biblioteca “util” para tornar as mensagens coloridas');

//-atributos:
const { log, ERROR, WARNING, INFO } = require("./a7logger");

//-logger coloridos para diferentes níveis:
log("isso é uma mensagem de informação.", "INFO");
log("isso é um aviso!", "WARNING");
log("isso é um erro grave!\n", "ERROR");

