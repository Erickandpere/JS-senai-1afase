// Faca um programa no qual o usuario digite a cor que esta no semaforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".

let semaforoUm = 'verde' 
let semaforoDois = 'amarelo'
let semaforoTres = 'vermelho'
let usuarioUm

usuarioUm = prompt("Digite a cor que esta mostrando no semaforo:") 

if(usuarioUm==semaforoUm){
    alert('Pode seguir!')

}else if(usuarioUm==semaforoDois){
    alert('Alerta,pare!')

}else if(usuarioUm==semaforoTres){
    alert('Pare imediatamente!')
}else{

alert('você não informou as cores do semaforo')
}
