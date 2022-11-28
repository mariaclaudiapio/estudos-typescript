// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])
console.log(numbers[0])

const nomes: string[] = ['Maria', 'Antônia']

// 2 - outra sintaxe para array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

console.log(nums[5]) // o TypeScript não bloqueia índices inexistentes

// 3 - tipo any
const arr1: any = [43, 'Antônia', 82, 'Cláudia', true, {}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parâmetros tipados
function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)
// soma('4', 5)

// 5 - retorno de função
function greeting(name: string):string {
    return `Olá, ${name}!`
}

console.log(greeting('Maria'))

// 6 - funcao anonima
setTimeout(function() {
    const sallary: number = 1000
    //console.log(parseFloat(sallary))
    console.log(sallary)
}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x:number, y: number}) {
    console.log(`X coordinates: ${coord.x}`)
    console.log(`y coordinates: ${coord.y}`)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log(`A: ${a}.`)
    console.log(`B: ${b}.`)
    if(c) {
        console.log(`C: ${c}.`)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?:string) {
    if(lastName !== undefined) {
        return(`Olá, ${firstName} ${lastName}, tudo bem?`)
    } else {
        return(`Olá, ${firstName}, tudo bem?`)
    }
}

console.log(advancedGreeting('Maria Cláudia', 'Pio Ramos'))
console.log(advancedGreeting('Maria Cláudia'))

// 10 - union type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}.`)
}

showBalance(100)
showBalance('500')

// 11 - avançando em Union Types
function showUserRole(role: boolean | string) {
    if(typeof role === 'boolean') {
        return 'Usuário não aprovado!'
    }
    return `A função do usuário é: ${role}.`
}

console.log(showUserRole(false))
console.log(showUserRole('admin'))

// 12 - type alias
// function showId(id: string | number) {
//     console.log(`O ID é: ${id}.`)
// }

// showId(1)
// showId('200')

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}.`)
}

showId(1)
showId('200')

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y} e Z: ${obj.z}.`)
}

const CoordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(CoordObj)

// 14 - interface x type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'Maria', age: 40}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types
let test: 'testando'

test = 'testando'

console.log(test)

function showDirection(direction: 'left' | 'right' | 'center') {
    console.log(`A direção é ${direction}.`)
}

showDirection('left')
// showDirection('top')

// 16 - non null assertion operators
const p = document.getElementById('some-p')

console.log(p!.innerText)

// 17 - gigint

let n: bigint

// n = 1
n = 1000n

console.log(n)

console.log(typeof(n))

// 18 - symbol
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
