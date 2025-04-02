/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 4
*/

console.log('Atividade 4. Crie dois scripts no Node para ler um mesmo arquivo (async).');

//carregar o arquivo inteiro de uma só vez.
const fs = require('fs').promises;

(async () => {
    let init = Date.now();

    //-cabeçalho do arquivo:
    try {
        const data = await fs.readFile('a4dados.csv', 'utf-8');
        const linhas = data.split("\n");
        console.log(linhas);  // Exibe o conteúdo do arquivo
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error);
    }

    //- fim do arquivo:
    let end = Date.now();
    console.log(`- tempo de execução: ${end - init} ms`);
})();


