// let produtos = [
//   { nome: 'Camiseta', categoria: 'Roupas' },
//   { nome: 'Celular', categoria: 'Eletrônicos' },
// ];

// let precos = [
//   { nome: 'Camiseta', preco: 20 },
//   { nome: 'Celular', preco: 500 }
// ];

// console.log(precos[1].preco)
// // [] -> array e chamamos pela posicao primeiro e depois coloca o objeto
// console.log(produtos[0].categoria)

//Att01

// const combinarProdutos = (prods, precs) =>{
//    return prods.map( (prod)=>{
//     let precoProduto = precs.find((prec)=>prec.nome === prod.nome)

//     return{
//       nome: prod.nome,
//       categoria: prod.categoria,
//       preco: precoProduto.preco,
//     }
//    })
// }
// combinarProdutos(produtos, precos)
// console.log(combinarProdutos(produtos,precos))

//att02
// const buscarProdutoPorCategoria = (categoria, arrayProdutos) => {
//   //  console.log('dentro da função:' ,categoria)
//   //  console.log('Dentro da função: ', arrayProdutos)
//   return arrayProdutos.filter( (produto) => produto.categoria === categoria)
// }

// buscarProdutoPorCategoria('Eletrônicos', produtos)
// console.log(buscarProdutoPorCategoria('Eletrônicos', produtos))

//att03
let produtos = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 }
];
let quantidades = [3, 1];

const precoTotal = (arrayProdutos, arrayQuantidades) =>{
  // console.log('Dentro da função: ', arrayProdutos)
  // console.log('Dentro da função: ', arrayQuantidades)

  return arrayProdutos.map((produto,index) =>{
     let precoVenda = produto.preco * arrayQuantidades[index]
    //  console.log('preço produto:',precoVenda)
     return{
      nome: produto.nome,
      preco: produto.preco,
      valorTotal: precoVenda
     }
  })
}

precoTotal(itens, quantidades)



