/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 4
*/

console.log('Atividade 4. Implemente as funções que retornam Promises seguindo a seguinte lógica:');
console.log('- firstPromise: deve ser resolvida se numInt é maior que 2 e rejeitada caso contrário');
console.log('- secondPromise: deve ser resolvida se data + 1 é par e rejeitada caso contrário.');


//função firstPromise:
function firstPromise(num,comp) {
    //retorna uma promise:
    return new Promise((resolve, reject) => {
        //operaçãotempo:
        if (num > comp) {
            //se é maior que comp:
            console.log(`- 1a verificação: sucesso, o número ${num} é maior que ${comp}.`);
            resolve(num);
        } else {
            reject(`- 1a verificação: erro, o número deve ser maior que ${comp}.`);
        }
    });
}

//função secondPromise:
function secondPromise(data) {
    //retorna uma promise:
    return new Promise((resolve, reject) => {
        if ((data + 1) % 2 === 0) {
            //se é par:
            resolve(`- 2a verificação: sucesso, o resultado de ${data} + 1 = ${data + 1}, é par.`);
        } else {
            //se não é par:
            reject(`- 2a verificação: erro, o resultado de ${data} + 1 = ${data+1}, não é par.`);
        }
    });
}

// main:
//-atributos:
const num = 6;
const comp = 2;

//-entrada:
console.log(`Pergunta: O número ${num} é maior que ${comp}? Se somar 1, será par ou ímpar?`);

// - 1a: verifica se é maior que comp:
firstPromise(num, comp)
    // - 2a: se for maior, verifica se é par ou ímpar:
    .then(data => secondPromise(data))
    // - saídas:
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    });


