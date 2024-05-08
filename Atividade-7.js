// 7) Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS. Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%. Ao final mostrar o valor a receber.

let saidaEmpresaUm = "JUSTA CAUSA"
let saidaEmpresadois = "SEM JUSTA CAUSA"
let motivoSaida
let valorFgts

motivoSaida = prompt('Digite o motivo que você saiu da empresa:').toLocaleUpperCase()
//motivoSaida.= toUpperCase()

valorFgts=Number(prompt('Digite o valor do seu FGTS:'))

if(motivoSaida==saidaEmpresaUm){
valorFgts= valorFgts - 4000
alert('Seu valor a receber ou apagar é R$:' + valorFgts)

}else if (motivoSaida == saidaEmpresadois){
    valorFgts= valorFgts *0.85

    alert('Seu valor a receber com desconto de 15% é R$:' + valorFgts)

}else {
    alert('você não informou a opção correta!')
}

