
// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}.`
}

console.log(showData(5))
console.log(showData('Jennifer'))
console.log(showData(true))
console.log(showData({}))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}.`
}

const myObj = {name: 'Porta', cor: 'branca'}
const otherProduct = {name: 'Carro', wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category: 'Roupa'}
const fourthObj = {name: 19.99, category: 'Roupa'}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj)) // o typescript retorna um erro aqui, porque a propriedade name não foi declarada
// console.log(showProductName(fourthObj)) // o typescript retorna um erro aqui, porque a propriedade name não é do tipo string.

// 3 - generics com interface
interface MyObject<T, U> {
    name: string
    wheels: T 
    engine: U
    color: string
}

type Car = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const myCar: Car = {name: 'fusca', wheels: 4, engine: 1.0, color: 'branco'}
const myPen: Pen = {name: 'caneta', wheels: false, engine: false, color: 'azul'}

console.log(myCar)
console.log(myPen)

// // type parameters
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//     return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}.`
// }

// const server = {
//     hd: '2TB',
//     ram: '32GB'
// }

// console.log(getSomeKey(server, 'ram'))
// //console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'Matheus', 
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

// 6 - typeof type operator
const userName: string = 'Matheus'

const userName2: typeof userName = 'João'

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: typeof userName = 'Maria'

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
}

function showKm(km: Km) {
    console.log(`O veículo tem a quilometragem de: ${km}.`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000, 
    kg: 1000
}

showKm(newCar.km)

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = 'teste'

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

// 9 - template literals type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
// const testing2: CustomType = 'some text 2'

type a1 = 'Testando'
type a2 = 'Union'

type a3 = `${a1} | ${a2}`