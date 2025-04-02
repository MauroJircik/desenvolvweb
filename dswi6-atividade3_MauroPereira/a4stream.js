/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 4
*/

console.log('Atividade 4. Crie dois scripts no Node para ler um mesmo arquivo (stream).');

//carregar ler o arquivo aos poucos, economiza memória para arquivos grandes.

const fs = require('fs');

let init = Date.now();

const stream = fs.createReadStream('a4dados.csv', { encoding: 'utf-8' });

//-cabeçalho do arquivo:
stream.on('data', (chunk) => {
    console.log(chunk); // Exibe cada parte do arquivo lida
});

//-fim do arquivo:
stream.on('end', () => {
    let end = Date.now();
    console.log(`- tempo de execução: ${end - init} ms`);
});

stream.on('error', (error) => {
    console.error("Erro ao ler o arquivo:", error);
});

