/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 1
*/

console.log('Atividade 1. Escreva uma classe Vec que represente um vetor no espaço bidimensional.');

//classe Vec:
class Vec {
    //atributos:

    //construtor:
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //getteresetter:

    //métodos:
    //-plus:
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    //-minus:
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
        //pitágoras: a² = b² + c²
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

//main:
//-entradas:
const v1 = new Vec(3, 4);
const v2 = new Vec(1, 2);

//-saídas:
console.log('- v1:', v1);
console.log('- v2:', v2);
console.log('- plus: v1 plus v2:', v1.plus(v2));
console.log('- minus: v1 minus v2:', v1.minus(v2));
console.log(`- distância de {0,0} a v1{${v1.x},${v1.y}} é:`, v1.length);



