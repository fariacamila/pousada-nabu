function verMais(verMaisPremio, verMaisChale, verMaisLuxo) {
    let sobreQuarto = document.querySelector('.sobre-quarto')

    if (sobreQuarto.style.display == 'none') {
        sobreQuarto.style.display = 'block'
    } else {
        sobreQuarto.style.display = 'none'
    }
}

function expandirDescricao(){
    let sobreQuarto = document.querySelector('.comodidade-conteiner')

    if (sobreQuarto.style.display == 'none') {
        sobreQuarto.style.display = 'block'
    } else {
        sobreQuarto.style.display = 'none'
    }
}



addEventListener('', () => {
    document.querySelector('.sobre-quarto').classList.toggle('mostrar-quartos')
})
// addEventListener ecutando o evento click e executar a função