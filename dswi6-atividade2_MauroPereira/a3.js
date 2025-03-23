/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 3
*/

console.log('Atividade 3. Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando fornecido [1, 2, 3] como argumento.');

//função arrayToList:
function arrayToList(array) {
    //lista:
    let list = null;
    //iteração valor/restante:
    for (let i = array.length - 1; i >= 0; i--) {
        list = { valor: array[i], restante: list };
    }
    //return list;
    return JSON.stringify(list);
}

//main:
//-entradas:
let List = arrayToList([1, 2, 3]);

//-saídas:
console.log('- arrayList:', List);


