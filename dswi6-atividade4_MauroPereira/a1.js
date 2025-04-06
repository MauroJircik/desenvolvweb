/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 1
*/

console.log('Atividade 1. Crie uma função que após 5 segundos dobre o resultado de um número passado como argumento. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.');

//função dobrarEmtSegundos:
function dobrarEmtSegundos(x,v,t) {
    //retorna uma promise:
    return new Promise((resolve) => {
        //operaçãotempo:
        setTimeout(() => {
            //operação:
            resolve(x * v);
        //tempo [seg]:    
        }, (t*1000));
    });
}

//main:
//-atributos:
const x = 7;
const v = 2;
const t = 5;

//-entrada:
console.log(`- Aguardando o resultado de ${x} vezes ${v} em ${t} segundos...`);

dobrarEmtSegundos(x,v,t).then(resultado => {
    //saída:
    console.log(`  - resposta: ${x} x ${v} = ${resultado}`);
});
