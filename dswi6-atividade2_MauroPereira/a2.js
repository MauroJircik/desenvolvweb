/*     IFSP - Campus Bragança Paulista

        Desenvolv. de Sistemas WEB

   Mauro Sérgio JAMRL Pereira BP3032116

       Participação 2 - Atividade 2
*/

console.log('Atividade 2. Escreva uma função deepEqual para comparar objetos profundamente.');

//função deepEqual:
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    //chaves:
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    //comparação de quantidade de chaves:
    if (keysA.length !== keysB.length) {
        return false;
    }
    //comparação de chaves:
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

//main:
//-entradas:
const obj1 = { param1: "valor1", param2: "valor2" };
const obj2 = { param1: "valor1", param2: "valor2" };
const obj3 = { param1: "valor1", param2: "diferente" };

//-saídas:
console.log(`- {${obj1.param1},${obj1.param2}} === {${obj2.param1},${obj2.param2}}: `, deepEqual(obj1, obj2));
console.log(`- {${obj1.param1},${obj1.param2}} === {${obj3.param1},${obj3.param2}}: `, deepEqual(obj1, obj3));
console.log(`- {${obj1.param1},${obj1.param2}} === {"valor1"}: `, deepEqual(obj1, { param1: "valor1" }));
console.log(`- null === {${obj1.param1},${obj1.param2}}: `, deepEqual(null, obj1));



