// Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

// a) Ter pelo menos 65 anos
// b) Ter trabalhado pelo menos 30 anos
// c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

let tempoServico  
let idadeUsuario

idadeUsuario = Number(prompt('Digite qual sua idade:'))
tempoServico = Number(prompt('Digite seu tempo de serviço:'))

if(tempoServico >=60 && idadeUsuario>= 25 ){

    alert('você pode se aposentar ')
    
}else if(idadeUsuario >= 65){

    alert('você pode se aposentar ')

}else if (tempoServico >= 30){

    alert('você pode se aposentar ')
}else {
    alert('Na sua condição você precisa trabalhar')
}
