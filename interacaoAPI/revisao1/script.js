/*let produto = 'camisa' // contexto global 
const preco = 50 // contexto global 

function calcularPrecoComDesconto () {
    const desconto = 0.1 
    const precoFinal = preco - preco * desconto
    console.log (`Preço com desconto: R$${precoFinal}`)
}
calcularPrecoComDesconto()
console.log(produto)
console.log(desconto)


for (let i = 0; i < 10; i++) {
    console.log(i)
}*/

//criadas no contexto global pois foram feitas foras de qualquer função
const prato='pizza'
const quantidade = 3

function calcularTotal() {

    const preco = 45.0//função /local
    const total = preco*quantidade 

    if (quantidade > 2){
        const desconto = 0.1 //bloco
        return total * (1- desconto)
    }
    return total

}
console.log(`Preço total com desconto: R$${calcularTotal()}`)
//global
console.log(prato)