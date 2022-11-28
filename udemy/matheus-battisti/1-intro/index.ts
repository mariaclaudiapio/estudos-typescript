const firstName = 'Maria'
const anotherName = 1
const x = true

function greeting(name: string) {
    console.log(`Olá, ${name}!`)
}

// greeting(anotherName)
greeting(firstName)

// desafio 1
function soma(a: number, b: number) {
    return(a + b)
}

console.log(soma(4, 5))
