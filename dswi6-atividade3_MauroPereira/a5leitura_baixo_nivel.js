//leitura com api de baixo nível

//-atributos:
const fs = require("fs");

//- função lerBytesEspecificos:
function lerBytesEspecificos(filename, start, length, callback) {
    fs.open(filename, "r", (err, fd) => {
        //
        let buffer = Buffer.alloc(length);
        fs.read(fd, buffer, 0, length, start, (error, nReadBytes) => {
            let result = buffer.toString("utf8", 0, nReadBytes).trim();
            callback(result);
        });
    });
}

//-saída do módulo:
module.exports = { lerBytesEspecificos };

