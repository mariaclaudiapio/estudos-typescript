"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}.`);
    if (product.isAvailable) {
        console.log('O produto está disponível.');
    }
}
const shirt = {
    name: 'camisa',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'tênis', price: 100, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}.`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}.`);
    }
}
const u1 = { email: 'mateus@email.com', role: 'Admin' };
const u2 = { email: 'mariaclaudia@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: 'Matheus',
    age: 30
};
console.log(matheus);
const shiryu = {
    name: 'Shiryu',
    age: 18,
    superpowers: ['Cólera do Dragão', 'Último Dragão', 'Excalibur', 'Cólera dos 100 Dragões']
};
console.log(shiryu);
console.log(shiryu.superpowers[2]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array (permite alterações no array somente através de métodos)
let myArray = ['maçã', 'laranja', 'banana'];
// myArray[3] = 'mamão'
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}.`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const eu = ['Maria', 40];
console.log(eu);
eu[1] = 39;
console.log(eu);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
