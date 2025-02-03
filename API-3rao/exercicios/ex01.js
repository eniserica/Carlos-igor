const numeros = [2, 4, 5, 3, 5, 6, 4, 6, 8];
 //1º - elemento ; 2º? - indece/index; 3º? - array
 numeros.forEach ((elemento, indice, array) =>{
   console.log(`${indice} - ${elemento} - ${array}`)
})
const somaCom5 = (x) => x + 5
numeros.map((elemento)=>{
   console.log(elemento * 2 )
}) 
 console.log(numeros.map(somaCom5)) 

// Mapeamento com Função:
// Dado um array de números, crie uma função que receba esse array e retorne um novo array onde cada número é multiplicado por 2.

   
// const erica = numeros.map(NumerosPor10);

// function NumerosPor10 (numeros){
//     return numeros * 10 
  
// }
// console.log(numeros)

//const numeros = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];


