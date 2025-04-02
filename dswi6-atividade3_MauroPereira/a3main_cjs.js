/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 3
*/

console.log('Atividade 3. Crie um módulo chamado conversor.js que exporte as seguintes funções (CommonJS).');

//importar o módulo:
const { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit } = require('./a3conversor_cjs');

//-entradas:
const massa = 5;        // em kg
const comprimento = 10;      // em m
const temperatura = 25; // em °C

const kgParaLb = quilogramaParaLibra(massa);
const mParaFt = metroParaPe(comprimento);
const cParaF = celsiusParaFahrenheit(temperatura);

//-saídas:
console.log('Realize as seguintes conversões:');
console.log(`- quilogramas para libras: ${massa} kg = ${kgParaLb.toFixed(4)} lb`);
console.log(`- metros para pés: ${comprimento} m = ${mParaFt.toFixed(4)} ft`);
console.log(`- celsius para fahrenheit: ${temperatura}°C = ${cParaF.toFixed(0)}°F`);


