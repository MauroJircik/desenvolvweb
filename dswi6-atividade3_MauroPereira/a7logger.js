
//-
const util = require("util");
const debug = util.debuglog("dev");
const logLevels = {
    ERROR: "\x1b[31mERROR\x1b[0m",      //vermelho
    WARNING: "\x1b[33mWARNING\x1b[0m",  //amarelo
    INFO: "\x1b[32mINFO\x1b[0m"         //verde
};

//função log:
function log(message, level = "INFO") {
    //-atributos:
    const formattedMessage = ` ${logLevels[level]}: ${message}`;
    //-saídas:
    console.log(formattedMessage);
    debug(formattedMessage);
}

//-saídas:
module.exports = { log, ...logLevels };

