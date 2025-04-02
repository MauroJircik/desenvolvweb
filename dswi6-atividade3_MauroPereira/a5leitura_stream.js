//leitura com API de baixo nível

//-atributos:
const fs = require("fs");

//função imprimirArquivStream:
function imprimirArquivoComStream(filename, callback) {
    //-atributos:
    let stream = fs.createReadStream(filename, "utf8");
    //-leitura do arquivo:
    stream.on("data", (chunk) => process.stdout.write(chunk));
    stream.on("end", callback);
}

//-saída do módulo:
module.exports = { imprimirArquivoComStream };
