const BASE_URL = 'http://localhost:3333/api'

const formCadastro = document.getElementById('item-form')

//Funções utilitárias (resetar o form, atribuindo o valor de 0 , campo vazio)
const resetForm = () => {
    document.getElementById('name').value = "";
    document.getElementById('description').value = ""; 
}

/**Inicio do cadastro do item */
/*função de call back --> */
const handleFormSubmit = async(event) =>{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    

    const item = {
        name: name,
        description: description
    }
    
    await sendItem(item);
    resetForm()
};
//interagi com o api, async 
const sendItem = async (objItem) => {
    try{
        const res = await fetch(`${BASE_URL}/items`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objItem)//TRANSFORMA UM OBJETO JS EM OBJETO EM JSON 
        })

        if(!res.ok){
            console.log('Erro ao cadastrar item')
            return
        }
        console.log('Item cadastrado com sucesso')
        resetForm()
    } catch (error){
        console.log(error)
    }
};
/**Fim do cadastro do item */

/**Inicio de buscar items */
//Buscar os da API 
const listItems = async ()=>{
    try{
        const res = await fetch(`${BASE_URL}/items`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Connection: 'close'
            },
           
        });
        if(!res.ok){
            console.log('Erro ao buscar dados')
            return
        }
        const items = await res.json();
        console.log(items);
        showItems(items) // recebe os array de items 
    }catch (error){
        console.log(error);
    }
}
//Mostra os itens na TELA 
const showItems = async (arrayItems) => {
    console.log(arrayItems)
    const itemList = document.getElementById('item-list')
    itemList.innerHTML = "";
    const cards = arrayItems.map((item) => `
    <article class = "item-card"> 
        <header class = "item-card__header">
            <h1 class = "item-card__title">${item.name}</h1>
        </header>

        <section class = "item-card__body">
            <p class = "item-card__description">
                ${item.description}
            </p>
        </section>
        <footer class = "item-card__footer">
            <button onclick="editItem(${item.id})" class = "item-card__button item-card__button--edit">Editar</button>
            <button onclick="deleteItem(${item.id})" class = "item-card__button item-card__button--delete">Excluir</button>
        </footer> 
    </article>
    `).join("")
    itemList.innerHTML = cards;
    
};
/**FIM de buscar items */

//Deletar item
const deleteItem = async (objId) => {
    try{
        const res = await fetch(`${BASE_URL}/items/${objId}`,{
            method: 'DELETE'
        })
        if(!res.ok){
            console.log('Erro ao excluir')
            return
        }
    }catch(error){
        console.log(error)

    }
}
//Editar item
const editItem = (objId) => {
    const url = `pages/item.html?id=${objId}`
    window.location = url 
}

//Eventos de interação
formCadastro.addEventListener('submit',handleFormSubmit);
document.addEventListener('DOMContentLoaded', listItems);