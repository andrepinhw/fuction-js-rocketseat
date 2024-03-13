let numberOne = Number(prompt(`Digite um numero`))
let numberTwo = Number(prompt(`Digite outro numero`))

let total = [ 
   alert(`A soma dos dois numero é ${numberOne + numberTwo}`),
   alert(`A subtracao dos dois numeros é ${numberOne - numberTwo}`),
   alert(`A multiplicao dos dois numeros é ${numberOne * numberTwo}`),
   alert(`A divisao dos dois numeros é ${numberOne / numberTwo}`),
   alert(`O resto da divisão dos dois numeros é ${numberOne % numberTwo}`)
] 

// Todo número que for divisivel por 2, é par 


let soma = (numberOne + numberTwo)
if(soma % 2 === 0) {
    alert(`A soma desse numeros é par:${soma}`)
} else {
    alert(`A soma desse números é impar:${soma}`)
}

if(numberOne === numberTwo){
    alert(`Esses números sao iguais`)
} else {
    alert(`Esses números sao diferente`)
}