/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 6
*/

console.log('Atividade 6. Crie uma função chamada nth, que recebe uma lista e um número, e retorna o elemento na posição fornecida na lista (com zero referindo-se ao primeiro elemento) ou undefined quando não há tal elemento.');

//função nth:
function nth(lista, numero) {
    //se lista é null ou número negativo => undefined:
    if (lista === null || numero < 0) {
        return undefined;
    }
    //se número é zero => valor:
    if (numero === 0) {
        return lista.valor;
    }
    //se número é maior que zero:
    return nth(lista.restante, numero - 1);
}

//função arrayToList:
function arrayToList(array) {
    //lista:
    let list = null;
    //iteração valor/restante:
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    return list;
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
let lista = arrayToList([1, 2, 3]);

//-saídas:
console.log('- Dados: lista de entrada =', JSON.stringify(lista));
console.log('- ListToArray:', listToArray(lista));
console.log('  - 1o elemento da lista é:', nth(lista, 0));
console.log('  - 2o elemento da lista é:', nth(lista, 1));
console.log('  - 3o elemento da lista é:', nth(lista, 2));
console.log('  - 5o elemento da lista é:', nth(lista, 5));

