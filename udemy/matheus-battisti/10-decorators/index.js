"use strict";
// // 1 - exemplo decorator
// function myDecorator() {
//     console.log('Iniciando Decorator!')
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     return function(
//         target: any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log('Executando Decorator...')
//         console.log(target)
//         console.log(propertKey)
//         console.log(descriptor)
//     }
// }
// class myClass {
//     @myDecorator()
//     testing() {
//         console.log('terminando execução do método.')
//     }
// }
// const myObj = new myClass()
// myObj.testing()
// // 2 - multiplos decorators
// function a() {
//     return function(
//         target: any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log('Executou a.')
//     }
// }
// function b() {
//     return function(
//         target: any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log('Executou b.')
//     }
// }
// class MultipleDecorators {
//     @a()
//     @b()
//     testing() {
//         console.log('Terminando a execução.')
//     }
// }
// const multiple = new MultipleDecorators()
// multiple.testing()
// // 3 - class decorator
// function classDec(constructor: Function) {
//     console.log(constructor.name)
//     if(constructor.name === 'User') {
//         console.log('Criando usuário!')
//     }
// }
// @classDec
// class User {
//     name
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const matheus = new User('Matheus')
// console.log(matheus)
// // 4 - method decorator
// function enumerable(value: boolean) {
//     return function(
//         target: any,
//         propertKey: string,
//         descriptor: PropertyDescriptor 
//     ) {
//         descriptor.enumerable = value
//     }
// }
// class Machine {
//     name
//     constructor(name: string) {
//         this.name = name
//     }
//     @enumerable(true)
//     showName() {
//         console.log(this)
//         return `O nome da máquina é ${this.name}.`
//     }
// }
// const trator = new Machine('Trator')
// console.log(trator.showName())
// // 5 - acessor decorator
// class Monster {
//     name?
//     age?
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     @enumerable(true)
//     get showName() {
//         return `O nome do monstro é ${this.name}.`
//     }
//     get showAge() {
//         return `A idade do monstro é ${this.age}.`
//     }
// }
// const charmander = new Monster('Charmander', 10)
// console.log(charmander)
// 6 - property decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);
// 7 - exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook, pen);
console.log(newBook.createdAt);
// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction)
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}.`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);
// 9 - exemplo real property decorator
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('pedroadmin12345');
let ana = new Admin('anadmin');
console.log(ana);
console.log(pedro);
