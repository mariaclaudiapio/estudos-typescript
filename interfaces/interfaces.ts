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

// código com criação de interface:
interface Humano {
    nome: string
    idade?: number //o interrogação serve para declarar que o atributo é opcional
    [prop: string]: any //essa notação é adequada para quando não sabemos o tipo de atributo a ser utilizado no objeto
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}!`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}.`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'Jonas', idade: 27, xyz: true })
pessoa.saudar('Skywalker')

// usando classes...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}.`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// interface função cálculo
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number): number {
    //return Array(expoente).fill(base).reduce((t, a) => t * a)
    return base ** expoente
    //return Math.pow(base, expoente)
}

console.log(potencia(3, 10))

// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

function teste(b: B) {

}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() { //aqui não pode ser usado arrow function por causa do this
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()
