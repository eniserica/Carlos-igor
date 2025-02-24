//1 º URL PARA EDITAR 
const BASE_URL = 'http://localhost:3333/api';
//2º Função para pegar o id da url
const pegarParametroDaURL = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const itemId = pegarParametroDaURL('id')

//3º Função para listar o item especifico 
const buscarItem = async (id) => {
    try{
        const res = await fetch(`${BASE_URL}/items/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })

        if(!res.ok){
            console.log('Erro ao buscar item')
            return
        }
        const item = await res.json()
        mostrarItem(item)
    }catch (error){
        console.log(error);
    }
};

//4º Função para mostrar o item no form
const mostrarItem = (objItem) => {
    const formContainer = document.getElementById('form-container');
    console.log(objItem)
    formContainer.innerHTML = `
    <h2 class = "form-container__title">Cadastro de Atividades</h2>
    <form id = "item-form" action="#" method="post">
    <input 
        type = "text" 
        name = "name" 
        id = "name" 
        class = "item-form__input" 
        placeholder="Digite a atividade"
        
    />
    <textarea id = "description" 
    class = "item-form__textarea" 
    placeholder="Descreva sua atividade"
    >
    </textarea>

    <button type = "submit" class = "item-form__button">
        Atualizar
    </button>

    </form>
    <div id = "message" class = "message">Mensagem de retorno</div>
    `
    const form = document.getElementById('item-form')
    form.addEventListener('submit',(event)=>{
        event.preventDefault() 
        atualizarItem(objItem.id)
    })
}
mostrarItem()

//5º Atualizar o item 
const atualizarItem = async (id)=>{
    console.log(id)
    const name = document.getElementById('name').value ;
    const description = document.getElementById("description").value ;

    try{
        const res = await fetch(`${BASE_URL}/items/${id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, description})
        })

        if(!res.ok){
            console.log('Erro ao excluir item')
            return
        }
    } catch(error){
        console.log('Erro ao atualizar')
    }
};
//6º evento pra quando abrir a pagina buscar o item selecionado 
document.addEventListener('DOMContentLoaded', ()=>{
    if(itemId){
        //mostrar os itens
        buscarItem(itemId)
    }else{
        console.log('id da atividade não encontrado')

    }
})
 