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

//@logarClasse
//@logarClasseSe(false)
@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()