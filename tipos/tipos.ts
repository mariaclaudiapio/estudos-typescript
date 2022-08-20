// string
let nome = 'João' //aqui o compilador infere que o tipo da variável é "String". Mesmo sem eu declará-lo.
console.log(nome)
//nome = 28; //aqui dá o erro, quando passamos tipo diferente de String

// numbers
let idade = 27
//idade = 'Ana' * mesma lógica acima. 
idade = 27.5 // o number pode ser tanto inteiro, quanto ter casas decimais
console.log(idade)

// boolean
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade
minhaIdade = 27 //quando não inicializamos a variável no momento de sua criação, não ocorre inferência automática do tipo pelo TypeScript
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade) 
//aqui temos um valor flexível. Aí a coisa fica solta... Para evitar isso, podemos usar o exemplo abaixo, passando o tipo no momento da declaração da variável.
let minhaIdade2: number
minhaIdade2 = 27 //quando não inicializamos a variável no momento de sua criação, não ocorre inferência automática do tipo pelo TypeScript
console.log(typeof minhaIdade)
//minhaIdade2 = 'idade é 27' //agora a IDE acusa o erro/inconsistência
console.log(typeof minhaIdade) 

//array
let hobbies = ["Cozinhar", "Praticar Esportes"] //aqui ocorre a inferência automática (variável criada e inicializada na mesma linha)
console.log(hobbies[0])
console.log(typeof hobbies)

//hobbies = [(100)] //aqui temos um erro, por causa da inferência automática. Para corrigir isso, pode-se usar a medida abaixo:
let hobbies2: any[] = ["Cozinhar", "Praticar Esportes"] //aqui ocorre a inferência automática (variável criada e inicializada na mesma linha)
console.log(hobbies2[0])
console.log(typeof hobbies2)

hobbies2 = [100, 200, 'batatinha']
// hobbies2 = 100 //aqui o sistema não aceita, porque poderíamos criar tudo para a variável, contanto, que se tratasse de um array.
console.log(hobbies2)

// tupla
let endereco: [string, number, any] = ["Avenida Principal", 99, "Casa A"]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza,
    Verde = 100, 
    Azul,
    Laranja,
    Amarelo,
    Vermelho = 100,

}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Amarelo)
console.log(Cor.Vermelho, Cor.Verde) // pode ter valores repetidos, o TypeScript deixa. rs

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// funções
function retornaMeuNome():string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void { // o void determina que a função não pode ter retorno
    console.log('Oi')
    //return minhaIdade 
}

digaOi()

function multiplicar(numA: number, numB:number): number {
    return numA * numB
}

//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2.5, 4))

// tipo função
let calculo: (x: number, y: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario = {
    nome: 'João',
    idade: 27
}

//usuario = {}
/*usuario = {
    name: Maria;
    age: 40
}
*/
usuario = {
    nome: 'Maria',
    idade: 40
}
console.log(usuario)

//versão com tipagem determinada por nós
let usuario2: { nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
console.log(usuario2)

// Desafio
/*
    Criar um objeto funcionário com:
    - array de strings com os nomes dos supervisores;
    - função de bater ponto que recebe a hora (número) e retorna uma string:
    -> ponto normal (<=8)
    -> ponto fora do horário (> 8)
*/

//criando um alias (apelido para reutizar um tipo em outras partes do programa)
type Funcionario = { supervisores: string[], baterPonto: (horas:number) => string }

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <=8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
} 

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <=8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
} 

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!!`)
nota = '10'

//checando tipos
let valor = 30

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: 10,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço Inválido!')
        }
    }
}
produto.validarProduto()

let altura = 12
// altura = null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null,
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98745612',
    tel2: null
}

console.log(contato1)

let podeSerNulo = null //nesse exemplo, o "null" assume o tipo "any"
podeSerNulo = 12
podeSerNulo = true

/* let podeSerNulo2: null = null 
podeSerNulo2 = 12
podeSerNulo2 = true */

//Desafio 02
type ContaBancaria = { saldo: number, depositar: (valor: number) => void}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ['34568990', '98765432']
}

correntista.contaBancaria.depositar(2000)
console.log(correntista)