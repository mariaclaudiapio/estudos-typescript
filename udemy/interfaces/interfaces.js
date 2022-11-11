"use strict";
/* //código sem criação de interface:
function saudarComOla(pessoa: { nome: string }) { // duplicação de tipos
    console.log(`Olá, ${pessoa.nome}!`)
}

function mudarNome(pessoa: { nome: string }) { // duplicação de tipos
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

*/
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}!`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}.`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, xyz: true })
pessoa.saudar('Skywalker');
// usando classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}.`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    //return Array(expoente).fill(base).reduce((t, a) => t * a)
    return base ** expoente;
    //return Math.pow(base, expoente)
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) {
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
