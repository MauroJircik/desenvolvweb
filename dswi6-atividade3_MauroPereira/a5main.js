/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 5
*/

console.log('Atividade 5. ');

const { lerArquivoSync, lerArquivoAsync } = require("./a5leitura_sincrona");
const { imprimirArquivoComStream } = require("./a5leitura_stream");
const { lerBytesEspecificos } = require("./a5leitura_baixo_nivel");

const caminhoArquivo = "a5data.csv";

//leitura síncrona:
let init = Date.now();
console.log(lerArquivoSync(caminhoArquivo));
console.log(`- síncrona => tempo de execução: ${Date.now() - init} ms\n`);

//leitura assíncrona:
init = Date.now();
lerArquivoAsync(caminhoArquivo)
    .then((data) => {
        console.log(data);
        console.log(`- assíncrona => tempo de execução: ${Date.now() - init} ms\n`);
    })
    .catch((err) => console.error("Erro na leitura assíncrona:", err));

//leitura com stream:
init = Date.now();
imprimirArquivoComStream(caminhoArquivo, () => {
    console.log(`\n- stream => tempo de execução: ${Date.now() - init} ms\n`);
});

//leitura com api de baixo nível:
init = Date.now();
lerBytesEspecificos(caminhoArquivo, 0, 400, (bytesLidos) => {
    console.log(bytesLidos);
    console.log(`- api de baixo nível => tempo de execução: ${Date.now() - init} ms\n`);
});
