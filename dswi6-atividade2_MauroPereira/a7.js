/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 7
*/

console.log('Atividade 7. Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um array de arrays em um único array que contém todos os elementos dos arrays originais.');

//-entradas:
const inputArray = [[1, 2, 3], [4, 5], [6]];

//reduce e concat array:
//-reduce: iterar sobre cada elemento do array de arrays:
const flattenedArray = inputArray.reduce((accumulator, currentArray) => {
    //-concatenar cada array em um único array:
    return accumulator.concat(currentArray);
}, []);

//-saídas:
console.log('- array de arrays:', inputArray);
console.log('- array reduceconcat: ', flattenedArray);

