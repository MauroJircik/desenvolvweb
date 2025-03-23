/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 5
*/

console.log('Atividade 5. Adicione uma função auxiliar prepend, que recebe um elemento e uma lista, e cria uma nova lista que adiciona o elemento na frente da lista de entrada ');

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

//função prepend:
function prepend(element, list) {
    //lista:
    lista = { valor: element, restante: list };
    return JSON.stringify(lista);
}

//main:
//-entradas:
let lista = JSON.parse(arrayToList([1, 2, 3]));
const elemento = 0;

//-saídas:
console.log('- listToArray:', listToArray(lista));
console.log('- prepend:', prepend(elemento, lista));

