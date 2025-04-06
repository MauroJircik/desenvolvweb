/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 5
*/

console.log('Atividade 5. Considere a função a seguir. Ela é uma função de soma que precisará ter como resultado um número par. ');
console.log('Criar promise:');
console.log('- callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par.');
console.log('- callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).');

//função somar:
function somarComPromise(a, b) {
    //retorna uma promise:
    return new Promise((resolve, reject) => {
        //-atributos:
        const resultado = a + b;
        //-saídas:
        if (resultado % 2 === 0) {
            //se o resultado for par:
            resolve(`- sucesso: o resultado é o número ${resultado}, que é par.`);
        } else {
            //se o resultado for ímpar:
            reject(`- erro: o resultado é o número ${resultado}, que é ímpar.`);
        }
    });
}

// main:
//-atributos:
const a = 5;
const b = 3;

//-entrada:
console.log(`Pergunta: A soma de ${a} + ${b} é par?`);
somarComPromise(a, b)
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.log(erro));



