
function quilogramaParaLibra(quilogramas) {
    return quilogramas * 2.20462;
}

function metroParaPe(metros) {
    return metros * 3.28084;
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Exportação usando named exports (CommonJS)
module.exports = { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit };

