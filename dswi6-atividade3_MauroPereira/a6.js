/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 6
*/
//para executar, nalinha de comando: C:\projeto\>node a6.js a6.txt

console.log('Atividade 6. ');

//-atributos:
const fs = require("fs");
const readline = require("readline");

//-atribui o nome do arquivo da linha de comando:
const arquivo = process.argv[2];

//-passa o nome do arquivo para a função de leitura:
const stream = fs.createReadStream(arquivo, "utf8");
const rl = readline.createInterface({ input: stream });

//-saída do módulo:
rl.on("line", console.log);

