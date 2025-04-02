/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 3
*/

console.log('Atividade 3. Crie um módulo chamado conversor.js que exporte as seguintes funções (ES6).');

//importar as funções:
import { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit } from './a3conversor_es6.js';

//-entradas:
const massa = 5;        // em kg
const comprimento = 10;      // em m
const temperatura = 25; // em °C

//-saídas:
console.log('Realize as seguintes conversões:');
console.log(`- quilogramas para libras: ${massa} kg = ${quilogramaParaLibra(5).toFixed(4)} lb`);
console.log(`- metros para pés: ${comprimento} m = ${metroParaPe(10).toFixed(4)} ft`);
console.log(`- celsius para fahrenheit: ${temperatura}°C = ${celsiusParaFahrenheit(25).toFixed(0)}°F`);

