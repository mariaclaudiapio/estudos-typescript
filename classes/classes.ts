class Data {
    //a visibilidade da classe em JavaScript é pública por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os parênteses
casamento.ano = 2017
console.log(casamento)

class DataEsperta {    
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
        
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os parênteses
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

//Desafio classe produto
//Atributos: nome, preço e desconto
//Criar o construtor
//Obs 1: o desconto é opcional (valor padrão 0)
//Obs 2: Criar dois produtos, passando dois e três parâmetros

class Product {
    constructor(public name: string, public price: number, public discount = 0) {

    }

    //tb é public
    priceWithDiscount(): number {
        return this.price * (1 - this.discount)
    }

    public summary(): string {
        return `${this.name} custa R$${this.priceWithDiscount()} (${this.discount * 100}% off).`
    }
}

const product1 = new Product('Black pen', 4.20)
product1.discount = 0.06
console.log(product1.summary())

const product2 = new Product('School notebook', 18.80, 0.15)
console.log(product2.summary())

class Carro {
    private velocidadeAtual: number = 0 //"private" é visível só na própria classe e não transmissível por herança.

    constructor(public marca: string, public modelo: string, 
        private velocidadeMaxima: number = 200) {
        
    }

    protected alterarVelocidade(delta: number): number { //"protect" é visível só na própria classe, mas é transmissível por herança.
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
        && novaVelocidade <= this.velocidadeMaxima
        
        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro { //o extends reusa o código relacionado com a classe Carro, que é a classe pai
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima) //o "super" deve ser chamado para que o construtor da classe pai seja executado
    }
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }  
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
    private _idade: number = 0
    
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)

pessoa1.idade = 40
console.log(pessoa1.idade)

// Atributos e métodos estáticos: o atributo estático está associado à classe.
/* versão sem static:
class Matematica {
    PI: number = 3.1416

    areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4))

const m2 = new Matematica()
console.log(m2.areaCirc(4))
*/

//versão com static:
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}
    
    static getInstance() {
        return Unico.instance
    }

    agora() {
        return new Date
    }    
}

console.log(Unico.getInstance().agora())

// Somente leitura:
class Aviao {
    public readonly modelo: string
    
    constructor(modelo: string,
        public readonly prefixo: string) {
            this.modelo = modelo
    }    
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
//turboHelice.modelo = 'DC-8'
//turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)