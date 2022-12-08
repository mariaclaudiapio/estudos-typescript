// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}.`)
    if(product.isAvailable) {
        console.log('O produto está disponível.')
    }
}

const shirt: Product = {
    name: 'camisa',
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: 'tênis', price: 100, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}.`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}.`)
    }
}

const u1: User = {email: 'mateus@email.com', role: 'Admin'}
const u2: User = {email: 'mariaclaudia@email.com'}

showUserDetails(u1)
showUserDetails(u2)

// readonly
interface Car {
    brand: string,
    readonly wheels: number // readony = propriedade somente leitura
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

console.log(fusca)

// fusca.brand = 'fiat'

// console.log(fusca)

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste'

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const matheus: Human = {
    name: 'Matheus',
    age: 30
}

console.log(matheus)

const shiryu: SuperHuman = {
    name: 'Shiryu',
    age: 18,
    superpowers: ['Cólera do Dragão', 'Último Dragão', 'Excalibur', 'Cólera dos 100 Dragões']
}

console.log(shiryu)
console.log(shiryu.superpowers[2])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array (permite alterações no array somente através de métodos)
let myArray: ReadonlyArray<string> = ['maçã', 'laranja', 'banana']

// myArray[3] = 'mamão'

console.log(myArray)

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}.`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, 2, 'Maria', 4, 5]

type nameAndAge = [string, number]

const eu: nameAndAge = ['Maria', 40]

console.log(eu)

eu[1] = 39

console.log(eu)

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])
