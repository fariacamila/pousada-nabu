function fazGet() {
    let requisicao = new XMLHttpRequest
    requisicao.open("GET", 'https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31', false)
    requisicao.send()
    return requisicao.responseText
}

function cLinha(card) {
    let nome = document.querySelector('.reserva-quartos_titulo')
    nome.innerHTML = card.name

    console.log(card)
    console.log(card.name)
}

function main() {
    let data = fazGet('')
    let cards = JSON.parse(data)
    let cardsTamplaite = cards.map(item => `${item.name}`)
    // cards.map(callback[name, description, accommodation])

    cards.forEach(element => {
        let linha = cLinha(element)

    })

    // console.log(cardsTamplaite)

    // console.log(cards)
    // console.log(cards)
}

main()
