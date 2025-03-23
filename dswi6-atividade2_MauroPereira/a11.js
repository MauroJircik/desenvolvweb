/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 11
*/

console.log('Atividade 11. Implemente a sua própria função every como uma função que recebe um array e uma função como parâmetros. Escreva essa versão utilizando um loop.');

//função myEvery:
function myEvery(array, callback) {
    //itera sobre o array:
    for (let i = 0; i < array.length; i++) {
        //se a função callback retornar false para algum elemento, retorna false
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    // Se a função callback retornar true para todos os elementos, retorna true
    return true;
}

//main:
//-entradas:
const numeros = [2, 4, 6, 8, 10];

//-todos os números são pares:
const todosPares = myEvery(numeros, (num) => num % 2 === 0);
//-todos os números são maiores que 5:
const nMaior = 5;
const todosMaioresQueN = myEvery(numeros, (num) => num > nMaior);
//-todos os números são menores que 100:
const nMenor = 100;
const todosMenoresQueN = myEvery(numeros, (num) => num < nMenor);

//-saídas:
console.log('- Dados: array de entrada =', numeros);
console.log('- Perg.1: todos os números são pares? resp.', todosPares);
console.log(`- Perg.2: todos os números são maiores que ${nMaior}? resp.`, todosMaioresQueN);
console.log(`- Perg.3: todos os números são menores que ${nMenor}? resp.`, todosMenoresQueN);

