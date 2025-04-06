/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 2
*/

console.log('Atividade 2. Implemente uma função chamada doAction que retona uma Promise. A promise deve ser resolvida 2 segundos após a sua chamada e deve retornar a mensagem olá mundo');

//função doAction:
function doAction(t,msn) {
    //retorna uma promise:
    return new Promise((resolve) => {
        //operaçãotempo:
        setTimeout(() => {
            //operação:
            resolve(msn);
        //tempo [seg]:
        }, (t*1000));
    });
}

//main:
//-atributos:
const msn = "Olá mundo!";
const t = 2;

//-entrada:
console.log(`- Aguardando mensagem em ${t} segundos...`);

doAction(t,msn).then((mensagem) => {
    //saída:
    console.log("  - Mensagem: ", mensagem);
});

