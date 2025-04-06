/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 4 - Atividade 6
*/

console.log('Atividade 6. Refatore o seguinte trecho de código para utilizar async/await.');
console.log('- o código deve imprimir 1s, 2s e 3s, com intervalo de t segundo(s) entre cada impressão.');

//função delay:
//const delay = () => new Promise(resolve => setTimeout(resolve, (t*1000)));
function delay() {
    return new Promise(function (resolve) {
        setTimeout(resolve, (t*1000));
    });
}

//função tporSegundo:
async function tPorSegundo() {
    //-saídas:
    await delay();
    console.log('- 1s');
    await delay();
    console.log('- 2s');
    await delay();
    console.log('- 3s');
}

// main:
//-atributos:
const t = 1;

//-entrada:
console.log(`Aguardando ${t} segundo(s) entre cada impressão...`);
tPorSegundo(t);

