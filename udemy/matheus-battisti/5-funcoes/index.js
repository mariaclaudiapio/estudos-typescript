"use strict";
// 1 -void (funções sem retorno)
function withoutReturn() {
    console.log('Essa função não tem retorno!');
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função.');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Maria');
preGreeting(greeting, 'João');
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c', true]));
// console.log(firstElement('Não é um array.'))
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObject({ name: 'Matheus' }, { age: 30, job: 'Programmer' });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// console.log(biggestNumber(true, false)) //aqui não há number nem string
// console.log(biggestNumber('5', 3)) //também não são aceitos tipois diferentes
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Maria'));
console.log(modernGreeting('Maria', 'Srta.'));
// 7 - parâmetros padrão (default)
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(12, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log(`X é um número. Ele é o ${x}.`);
    }
    else {
        console.log('X não é um número.');
    }
}
doSomething('1');
doSomething([3, 2, 1]);
doSomething(5);
// // 9 - never
// function showErrorMessage(msg: string): never {
//     throw new Error(msg)
// }
// showErrorMessage('Algum erro!') // aqui ele mostra o erro e trava o código.
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// console.log(sumAll('Joaquim', 'Maria'))
// 11 - destructuring como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa ${price}.`;
}
const shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
console.log(showProductDetails({ name: 'saia', price: 89.90 }));
// console.log(showProductDetails(['vestido', 250.00]) // typescript reclama porque não é do mesmo tipo determinado na função
