/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 9
*/

console.log('Atividade 9. Escreva um loop que realiza sete chamadas para console.log para exibir um triângulode #.');

//loop de construção:
for (let i = 1; i <= 7; i++) {
    //-entradas:
    let linha = '#'.repeat(i);
    
    //-saídas:
    console.log(i+`-`+linha);
}

