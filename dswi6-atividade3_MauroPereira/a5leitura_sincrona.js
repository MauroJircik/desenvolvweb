//leitura por fluxo de dados - stream

//atributos:
const fs = require("fs");

//-leitura síncrona:
function lerArquivoSync(filename) {
    //-retorna o conteúdo do arquivo:
    return fs.readFileSync(filename, "utf8").trim();
}

//-leitura assíncrona:
async function lerArquivoAsync(filename) {
    //-
    try {
        return (await fs.promises.readFile(filename, "utf8")).trim();
    } catch (err) {
        console.error("Erro ao ler arquivo:", err);
        return "";
    }
}

//-saída do módulo:
module.exports = { lerArquivoSync, lerArquivoAsync };

