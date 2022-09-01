//@logarClasse
@logarClasseSe(false)
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse: decoratorVazio
}

function decorator(a: string, b: number) {
    return function(_: Function): void {
        console.log(a + ' ' + b)
    }
}