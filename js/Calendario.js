let semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
let mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

function reserva() {
    let entrada = document.querySelector('.calendario-entrada').value
    let saida = document.querySelector('.calendario-saida').value
    let data = new Date()
    let diaSemana = data.getDay()

    if (entrada == 0 || saida == 0) {
        console.error('Selecione uma data')
        return
    }

    if (saida < entrada) {
        console.error('Saida não pode ser anterior a data de entrada.')
        return
    }

    console.log('Dia da semana ', entrada[diaSemana])
    console.log('Data de entrada', entrada)
    console.log('Dia da semana', semana[diaSemana])

    console.log(entrada)

    localStorage.setItem("Entrada", entrada)
    localStorage.setItem("Saida", saida)

    // window.location.href = "index2.html"
}

let showData = (resultado) => {
    for (let campo in resultado) {
        console.log(campo)
    }
}

// let response = fetch('https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31')
// .then(resposta => {resposta.json()//o parametro 'resposta' recebe o valor fetc(url)
//     .then(data => showData(data))
// })

// console.log(response)




// let response = fetch('https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31')

//     .then(resposta => {//.then (então)
//         return resposta.json()
//     })

//     .then(json => {
//         console.log(json);
//         return json;
//     })

//     .then((data) => console.log(data))

//     .catch(error => {
//         console.error('Error',error)
//     })

// console.log(response)

// function mostrar(users){
//     let output = ''

//     for(let user of users){
//         output += `${user.name}`
//     }
//     document.querySelector('accommodation').innerHTML = output
// }