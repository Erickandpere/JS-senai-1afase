// 5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
//   - "Infantil A" de 5 a 7 anos de idade
//   - "Infantil B" de 8 a 10 anos de idade
//   - "Juvenil A" de 11 a 13 anos de idade
//   - "Juvenil B" de 14 a 17 anos de idade
//   - "Senior" com 18 anos de idade ou mais

let idadeNadador   

idadeNadador = Number(prompt('Digite sua idade:'))

switch (true){

 case idadeNadador >= 18:
    alert('você é um nadador Senior!')
    break

 case idadeNadador >= 14:
    alert('você é um nadador Juvenil B!')
    break

 case idadeNadador >= 11:
    alert('você é um nadador Juvenil A!')
    break

 case idadeNadador >= 8:
    alert('você é um nadador Infantil B!')
    break

 case idadeNadador >= 5:
    alert('você é um nadador Infantil A!')
    break
    default:
    alert('Você não pode ser nadador porque sua idade não é permitada!')
    break
}
    
