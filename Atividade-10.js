// 10) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

//    CEREJA - CEREJA - CEREJA -> R$100
//    LARANJA - LARANJA - LARANJA -> R$80
//    CEREJA - LARANJA - CEREJA -> R$50
//    LARANJA - CEREJA - LARANJA -> R$25

let frutaUm
let frutaDois
let frutaTres

frutaUm = prompt('Digite a primeira fruta:')
frutaDois = prompt('Digite a segunda fruta:')
frutaTres = prompt('Digite a terceira fruta:')

if (frutaUm==="cereja" && frutaDois==="cereja" && frutaTres==="cereja"){

    alert("se o resultado for cereja - cereja - cereja, você ganhou R$100 ")
    
}else if (frutaUm==="laranja" && frutaDois=="laranja" && frutaTres==="laranja"){

    alert("se o resultado for laranja - laranja  - laranja , você ganhou R$80 ")

}else if (frutaUm==="cereja" && frutaDois=="laranja" && frutaTres==="cereja"){

    alert("se o resultado for cereja - laranja  - cereja , você ganhou R$50 ")

}else if (frutaUm==="laranja" && frutaDois=="cereja" && frutaTres==="laranja"){

    alert("se o resultado for laranja - cereja  - laranja , você ganhou R$25 ")

}else{
    alert("você não informou as frutas corretas!")
}