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


//Eventos de interação
formCadastro.addEventListener('submit',handleFormSubmit)