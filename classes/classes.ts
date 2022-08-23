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