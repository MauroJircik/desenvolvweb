/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 3
*/

console.log('Atividade 3.  Crie uma função que retorne uma Promise seguindo as seguintes orientações:');
console.log('- Se o argumento da função não for um número, retorne uma promessa rejeitada instantaneamente e forneça uma mensagem de "erro" aos dados (em uma string)');
console.log('- Se os dados forem um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os dados "ímpares" (em uma string)');
console.log('- Se os dados forem um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os dados "par" (em uma string).');

//função verificaNumero:
function verificaNumero(num, tpar, timpar) {
    //retorna uma promise:
    return new Promise((resolve, reject) => {
        //operaçãotempo:
        if (typeof num !== "number") {
            //se não é um número:
            reject("erro");
        //se é um número:
            //se é ímpar:    
        } else if (num % 2 !== 0) {
            setTimeout(() => resolve("ímpar"), (timpar*1000));
            //se é par:
        } else {
            setTimeout(() => reject("par"), (tpar*1000));
        }
    });
}

// main:
//-atributos:
const num = 4;
const tpar = 2;
const timpar = 1;

//-entrada:
console.log(`Pergunta: O número ${num} é ímpar?`);
console.log(`- aguardando...`);

verificaNumero(num, tpar, timpar)
    //-saídas:
    .then((res) => {
        //se é ímpar:
        console.log(`- resultado: o número ${num} é`, res,".");
    })
    .catch((err) => {
        //se é par:
        console.log(`- erro: o número ${num} é`, err,".");
    });


    
