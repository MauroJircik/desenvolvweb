/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 8
*/

console.log('Atividade 8. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso.');

//função dataPorExtenso:
function dataPorExtenso(data) {
    //meses:
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    //separar dia, mês e ano:
    const [dia, mes, ano] = data.split("/");

    //data por extenso:
    return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
}

//main:
//-entradas:
const dataEntrada = "22/03/2025";
const resultado = dataPorExtenso(dataEntrada);

//-saídas:
console.log('- data entrada:', dataEntrada);
console.log('- data por extenso:', resultado);

