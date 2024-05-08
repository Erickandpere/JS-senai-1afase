// Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

let ladoUm 
let ladoDois
let ladoTres

ladoUm = Number(prompt('Digite o primeiro lado :'))
ladoDois = Number(prompt('Digite o segundo lado:'))
ladoTres = Number(prompt('Digite o terceiro lado:'))

if (ladoUm===ladoDois && ladoDois===ladoTres){

    alert('Seu triângulo é equilátero!')

}else if (ladoUm===ladoDois || ladoUm===ladoTres || ladoDois===ladoTres){
     alert('seu triângulo é isósceles ')
}else{
    alert('triângulo é escaleno')
}

