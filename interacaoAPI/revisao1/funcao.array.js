// const array = [12, 3, 4, 5, 76];
// array.push(2)//Adiciona o valor final do array
// console.log(array)
// array.unshift(3)//Adiciona o valor inicio array
// console.log(array)
// array.pop() //Remover o ultimo elemento do array
// console.log(array)
// array.shift() //Remover o primeiro elemento do array
// console.log(array)

/*DIA 31*/


// const numeros = [2, 4, 5, 3, 5, 6, 4, 6, 8];
// //1º - elemento ; 2º? - indece/index; 3º? - array
// numeros.forEach ((elemento, indice, array) =>{
//     console.log(`${indice} - ${elemento} - ${array}`)
// })
// const somaCom5 = (x) => x + 5
// numeros.map((elemento)=>{
//     console.log(elemento * 2 )
// }) 
// console.log(numeros.map(somaCom5))


/*DIA 03*/

//Funcao callback tem caracteristica de ser anonima, nao tem nome 
//O foreach percorre a função 
//elemento representa cada numero do array

 let array1 = [1, 3, 6, 8, 9, 4]; 
// const listarDados = array1.forEach((elemento)=>{
//     console.log(elemento*2)
// })
// console.log(typeof listarDados) 

// //No map retorna um array com a lista desses elementos multiplicado por cinco
// const multiplicaPorCinco = array1.map((elemento)=>{
//     return elemento * 5
// })
// console.log(typeof multiplicaPorCinco)

// const maisDois = multiplicaPorCinco.map((elemento)=>{
//     return elemento + 2
// })
// console.log(maisDois) 

/*maisDois = listarDados.map((elemento)=>{
    return elemento + 2
})
console.log(maisDois) */ 

/*Encontrar um número que seja maior que 6 */

let numeros= [1,2,3,4,5,6,7];
let encontrado = numeros.find((elemento)=>{
    return elemento > 6;
})
console.log(encontrado)

/*Encontrar um número que seja maior que 6*/
encontrado = array1.filter((elemento)=>{
    return elemento > 6;
})
console.log(encontrado)

