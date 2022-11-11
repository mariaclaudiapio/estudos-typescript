"use strict";
// let & const
/*
console.log(seraQuePode)
//var seraQuePode = '?' //hoisting do var (içamento)
let seraQuePode = '?' //aqui o hoisting/içamento não acontece

let estaFrio = true
if(estaFrio) {
    var acao = 'Colocar o casaco!' //var só tem escopo de função e global
}
console.log(acao)

let estaFrio2 = true
if(estaFrio) {
    let acao2 = 'Colocar o casaco!' //let tem escopo de função, global e de bloco
}
console.log(acao2)

const cpf:string = '123.456.789-15'
cpf = '023.456.789-15'
console.log(cpf)
*/
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Ola' + pessoa);
falarCom('João');
/*
// this
function normalComThis() {
    console.log(this)
}

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
normalComThisEspecial()

// para descobrir o contexto do this é só verificar onde pertence o this da linha anterior à criação da função
const arrowComThis = () => console.log(this)
arrowComThis()
*/
// parâmetros padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
// operador Rest e Spread
const numbers = [1, 10, 99, 5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
//const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', [turmaA]] //aqui o sistema não aceita, porque o array turma B é uma array de strings, não de arrays
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA]; //com o operador spread essa operação pode ser feita
console.log(turmaB);
/* exemplo com número de argumentos fixos:
function retornarArray(arg1: number, arg2: number): number[] {
    return [arg1, arg2]
}

const numeros = retornarArray(1, 2, 4, 5, 6)
console.log(numeros)
*/
//exemplo com número de argumentos variável:
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 4, 5, 6, 58, 100);
console.log(numeros);
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}.`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}.`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
/* const motor = caracteristicas[0]
const ano = caracteristicas[1] */
const [motor, ano] = caracteristicas; // o [] após o const não representa um array, representa um destructuring
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200
};
//const nomeItem = item.nome
//const preco = item.preco
//console.log(nomeItem, preco)
const { nome: n, preco } = item;
console.log(n, preco);
//template string
//const usuarioID: string = 'SuporteCod3r'
//const notificacoes: string = '9'
//const boasVindas = 'Boas vindas ' + usuarioID + 'Notificações: ' + notificacoes
//console.log(boasVindas)
const usuarioID = 'SuporteCod3r';
const notificacoes = '11';
const boasVindas = `Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}.`;
console.log(boasVindas);
