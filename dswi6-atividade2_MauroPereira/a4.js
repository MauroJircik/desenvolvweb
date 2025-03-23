/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 4
*/

console.log('Atividade 4. Escreva uma função listToArray que produza um array a partir de uma lista.');

//função arrayToList:
function arrayToList(array) {
    //lista:
    let list = null;
    //iteração valor/restante:
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    return JSON.stringify(list);
}

//função listToArray:
function listToArray(list) {
    //array:
    let array = [];
    //iteração:
    while (list !== null) {
        array.push(list.valor);
        list = list.restante;
    }
    return array;
}

//main:
//-entradas:
let lista = JSON.parse(arrayToList([1, 2, 3]));

//-saídas:
console.log('- listToArray:', listToArray(lista));

