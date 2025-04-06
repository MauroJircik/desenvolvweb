/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 5
*/

console.log('Atividade 5. Considere a função a seguir. Ela é uma função de soma que precisará ter como resultado um número par. ');
console.log('Criar os seguintes callbacks:');
console.log('- callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par.');
console.log('- callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).');

//função somar:
function somar(a, b, callbackSucesso, callbackError) {
    //-atributos:
    const resultado = a + b;
    //se o resultado for par:
    if (resultado % 2 === 0) {
    //-saídas:
        callbackSucesso(resultado);
    } else {
        callbackError(resultado);
    }
}

//funções de callback:
//-callbackSucesso:
function callbackSucesso(resultado) {
    console.log(`- sucesso: o resultado é o número ${resultado}, que é par.`);
}
//-callbackError:
function callbackError(resultado) {
    console.log(`- falha: o resultado é o número ${resultado}, que é ímpar.`);
}

// main:
//-atributos:
const a = 3;
const b = 4;

//-entrada:
console.log(`Pergunta: A soma de ${a} + ${b} é par?`);
somar(a, b, callbackSucesso, callbackError);


