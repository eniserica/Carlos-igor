// const array = [12, 3, 4, 5, 76];
// array.push(2)//Adiciona o valor final do array
// console.log(array)
// array.unshift(3)//Adiciona o valor inicio array
// console.log(array)
// array.pop() //Remover o ultimo elemento do array
// console.log(array)
// array.shift() //Remover o primeiro elemento do array
// console.log(array)

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