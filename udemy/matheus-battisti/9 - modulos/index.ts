// 1 - importação de arquivos
import importGreet from './greet'

importGreet()

// 2 - importação de variáveis
import {x} from './variables'

console.log(x)

// 3 - múltiplas importações
import { a, b, myFunction } from './multiple'

console.log(a)
console.log(b)

myFunction()

// 4 - alias
import { someName as name } from './alias'

console.log(name)

// 5 - import all
import * as myNumbers from './numbers'

console.log(myNumbers)

const nX = myNumbers.n2

console.log(nX)

myNumbers.showNumber()

// 6 - importando tipos
import { Human } from './myTipe'

class User implements Human {
    name 
    age 

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new User('João', 25)

console.log(joao)
