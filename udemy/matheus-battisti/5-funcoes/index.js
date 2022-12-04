"use strict";
// 1 -void (função sem retorno)
function withoutReturn() {
    console.log('Esta função não tem retorno.');
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá, ${name}! 🙋🏽‍♀️`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função.');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Matheus');
preGreeting(greeting, 'Maria');
// preGreeting(greeting, 1)
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement(['Maria', true]));
// console.log(firstElement('Mary'))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: 'Matheus' }, { age: 30, job: 'Programmer' });
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
console.log(biggestNumber(12, 5));
console.log(biggestNumber('12', '5'));
console.log(biggestNumber('Maria', 'Matheus'));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
