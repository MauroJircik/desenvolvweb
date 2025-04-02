
//classe User:
class User {
    //atributos:

    //construtor:
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //getteresetters:

    //métodos:
    //-nome:
    printName() {
        console.log(this.name);
    }
    //-idade:
    printAge() {
        console.log(this.age);
    }
}

//funções:
//-nome:
function printName(user) {
    console.log(`User's name is ${user}`);
}
//-idade:
function printAge(age) {
    console.log(`User's age is ${age}`);
}

//exportar:
module.exports = { User, printName, printAge };

