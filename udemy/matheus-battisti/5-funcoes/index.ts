// 1 -void (função sem retorno)
function withoutReturn(): void {
    console.log('Esta função não tem retorno.')
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
    return `Olá, ${name}! 🙋🏽‍♀️`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log('Preparando a função.')

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, 'Matheus')
preGreeting(greeting, 'Maria Cláudia')
// preGreeting(greeting, 1)

// 3 - generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(['a', 'b', 'c']))
console.log(firstElement(['Maria', true]))
// console.log(firstElement('Mary'))

function mergeObjects<T, U>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: 'Matheus'}, {age: 30, job: 'Programmer'})

console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber(12, 5))
console.log(biggestNumber('12', '5'))
console.log(biggestNumber('Maria', 'Matheus'))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ['teste', 'testando']))
