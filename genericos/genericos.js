"use strict";
/*
//sem a função generics
function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length) //aqui o TypeScript não reclama, como gostaríamos, porque especificamos any acima
console.log(echo({ nome: 'João', idade: 27 }))
*/
//Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27)); //por baixo dos panos, ele troca o T do diamante acima para number, como especificamos aqui.
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5') //após declararmos o number no diamante acima, o TypeScript começa a reclamar quando tentamos inserir uma string no array
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
