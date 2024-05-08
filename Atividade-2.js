// Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".


let vidaPersonagem = 100

vidaPersonagem -= Number(prompt('100/100 Digite qual dano você sofreu no jogo:'))

switch(true){

case vidaPersonagem >= 51:

alert(`${vidaPersonagem}/100 Dano leve, vida boa!`)

break

case vidaPersonagem >= 21:
    
alert(`${vidaPersonagem}/100 Dano moderado, vida estável!`)

break

case vidaPersonagem > 0:
    
alert(`${vidaPersonagem}/100 Dano crítico, quase sem vida!`)

break

case vidaPersonagem <= 0:
    
alert(`${vidaPersonagem}/100 Game Over!`)

break

}
 


