/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 10
*/

console.log('Atividade 10. Implemente uma função toUpperCase que retorna o mesmo resultado da original.');

//função toUpperCase:
function toUpperCase(str) {
    //-atributos:
    const minúsculas = "abcdefghijklmnopqrstuvwxyz";
    const maiúsculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //-array de caracteres:
    let resultado = '';

    //-iterar em cada caracter:
    for (let i = 0; i < str.length; i++) {
        //caracter:
        let caractere = str[i];

        //verificar se é minúscula/maiúscula:
        let index = minúsculas.indexOf(caractere);
        if (index !== -1) {
            //se minúscula => maiúscula:
            resultado += maiúsculas[index];
        } else {
            //se não minúscula => mantém:
            resultado += caractere;
        }
    }
    return resultado;
}

//main:
//-entradas:
const texto = "Atividade!";
const resultado = toUpperCase(texto);

//-saídas:
console.log('- texto entrada:', texto);
console.log('- resultado upperCase:', resultado);

