/* Hora e data */

const interval = setInterval(() => {
    const data = new Date()

    dataAtual(data)
    horaAtual(data)

}, 5000)

function dataAtual(date) {

    let dataTexto = `${verificaDia(date)}, ${date.getDate()} de ${verificaMes(date)} de ${date.getFullYear()}`
    document.getElementById("data").innerHTML = dataTexto
}

function horaAtual(hora) {
    let horaTexto = `${verificaHora(hora)}:${verificaMinutos(hora)}`
    document.getElementById("hora").innerHTML = horaTexto

}

function verificaMes(data) {
    let num = data.getMonth()
    let mes

    switch (num) {
        case 0:
            mes = "janeiro"
            break
        case 1:
            mes = "fevereiro"
            break
        case 2:
            mes = "março"
            break
        case 3:
            mes = "abril"
            break
        case 4:
            mes = "maio"
            break
        case 5:
            mes = "junho"
            break
        case 6:
            mes = "julho"
            break
        case 7:
            mes = "agosto"
            break
        case 8:
            mes = "setembro"
            break
        case 9:
            mes = "outubro"
            break
        case 10:
            mes = "novembro"
            break
        case 11:
            mes = "dezembro"
    }
    return mes
}

function verificaDia(data) {
    let num = data.getDay()
    let dia 

    switch (num) {
        case 0:
            dia = "domingo"
            break
        case 1:
            dia = "segunda-feira"
            break
        case 2:
            dia = "terça-feira"
            break
        case 3:
            dia = "quarta-feira"
            break
        case 4:
            dia = "quinta-feira"
            break
        case 5:
            dia = "sexta-feira"
            break
        case 6:
            dia = "sábado"
    }
    return dia
}

function verificaHora(hora) {
    return hora.getHours()
}

function verificaMinutos(hora) {
    return hora.getMinutes()
}