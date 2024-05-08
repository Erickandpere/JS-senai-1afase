// Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

let numerosDeOvosComprados

numerosDeOvosComprados = Number(prompt('Digite quantos ovos você vai comprar:'))

switch(true){
    case numerosDeOvosComprados <=12:
    alert(`${(numerosDeOvosComprados*0.4).toFixed(2)} você está pagando no valor da unidade 0,40 centavos!` )
    break
    case numerosDeOvosComprados <=24:
    alert(`${(numerosDeOvosComprados*0.3).toFixed(2)} você está pagando no valor da unidade 0,30 centavos!` )
    break
    case numerosDeOvosComprados > 24:
    alert(`${(numerosDeOvosComprados*0.25).toFixed(2)} você está pagando no valor da unidade 0,25 centavos!` )
    break

}