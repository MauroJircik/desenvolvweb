/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 3 - Atividade 2
*/

console.log('Atividade 2. Faça um programa em javascript que utilize os seguintes módulos: express, user.js');
console.log('- aperte ctrl e clique com o botão do mouse sobre o link abaixo:');

//importar o módulo express:
const express = require('express');
const { User, printName, printAge } = require('./a2user');

//importar o módulo user.js:
const app = express();
const PORT = 8080;

//criar o usuário:
const user = new User("Amazing", 100);

// Definindo a rota GET
app.get('/user_data', (req, res) => {
    const nameMessage = `User's name is ${user.name}`;
    const ageMessage = `User's age is ${user.age}`;

    console.log('- aparecerá uma página web com:');
    printName(user.name);
    printAge(user.age);

    res.send(`${nameMessage} and ${ageMessage}`);
});

//iniciar o servidor:
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/user_data`);
});


