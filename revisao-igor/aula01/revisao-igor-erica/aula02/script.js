
document.getElementById("adicionarTarefa").addEventListener("click",
    function () {

        const inputTarefa = document.querySelector("#novaTarefa");
        const tarefaTexto = inputTarefa.value ; 

        if(tarefaTexto === ""){
            alert ("O campo não pode estar vazio!")
        }
    }
);