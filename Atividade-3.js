// Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número. Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.

let diaSemana

diaSemana = Number(prompt('Digite o dia da semana em número:'))

switch(diaSemana){
    case (1):
    alert('você informou o dia que corresponde ao domingo!')
    break
    
  case (2):
  alert('você informou o dia que corresponde a segunda-feira!')
  break

  case (3): 
  alert('você informou o dia que corresponde a terça-feira!')
  break

  case (4): 
  alert('você informou o dia que corresponde a quarta-feira!')
  break

  case (5): 
  alert('você informou o dia que corresponde a quinta-feira!')
  break

  case (6): 
  alert('você informou o dia que corresponde a sexta-feira!')
  break

  case (7): 
  alert('você informou o dia que corresponde a sábado!')
  break

  default:
    alert('número é inválido"')
    break
}