"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}.`;
}
console.log(showData(5));
console.log(showData('Jennifer'));
console.log(showData(true));
console.log(showData({}));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}.`;
}
const myObj = { name: 'Porta', cor: 'branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };
const fourthObj = { name: 19.99, category: 'Roupa' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'fusca', wheels: 4, engine: 1.0, color: 'branco' };
const myPen = { name: 'caneta', wheels: false, engine: false, color: 'azul' };
console.log(myCar);
console.log(myPen);
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - typeof type operator
const userName = 'Matheus';
const userName2 = 'João';
const userName4 = 'Maria';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a quilometragem de: ${km}.`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = 'some text';
